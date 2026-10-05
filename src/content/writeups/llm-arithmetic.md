---
title: Never let the LLM do the arithmetic
date: 2026-09-18
summary: In GridWise, a language model reads the operator's notes, but an exact linear program does every calculation. Here's why that split works.
tags: [llm, optimisation, python]
stage: budding
project: gridwise
---

[GridWise](/projects/gridwise) plans a campus's electricity for the next 24 hours: when to buy from the grid, when to use solar, and when to charge or drain the battery. An operator can steer it with notes in plain English:

> The data center requires at least 80 kWh to remain in the battery from 6 PM until 10 PM.
> Grid intake must stay at or below 190 kWh from 7 PM until 10 PM while the substation is constrained.
> A seminar room booking was moved to next week.

The tempting design is to hand everything to an LLM. GridWise doesn't, and that's the point of this writeup.

## Language for intent, maths for numbers

An LLM is good at reading the notes and bad at guaranteeing that a schedule obeys physics. So the work is split:

1. **The LLM classifies each note** into one of six typed directives, and nothing else. The notes above become:

```json
{"type": "minimum_battery_reserve", "applies": true, "hours": [18, 19, 20, 21], "minimum_energy_kwh": 80.0}
{"type": "max_grid_window", "applies": true, "hours": [19, 20, 21], "max_grid_kwh": 190.0}
{"type": "no_op", "applies": false}
```

2. **Guardrails check the output** before it can influence anything: hours are unique and in range, factors sit between 0 and 1, and percentages become kWh.
3. **A linear program does the numbers.** 96 variables (grid, solar, charge and discharge for each hour) and 73 constraints go to the HiGHS solver, which returns the exact cheapest plan in under 5 ms.

The seminar note is a distractor. It becomes a `no_op`, and the plan ignores it.

## Why the split holds up

- **Every plan is physically valid**: energy balance, battery limits, reserve floors and an end-of-day battery level equal to the start. These are constraints, not suggestions the model might forget.
- **The LLM can fail safely.** If it's slow or rate-limited, a deterministic extractor takes over, and the guardrails treat both the same way.
- **It's testable.** 97 tests replay the public sample cases and adversarial notes, and check every returned plan against the physics.

The general lesson: let the model translate, and let something exact compute.
