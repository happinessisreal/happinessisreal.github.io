---
name: gridwise
repo: gridwise-energy-optimizer
summary: Operator notes in plain English become typed constraints, then an exact linear program finds the cheapest 24-hour energy plan.
tags: [python, fastapi, linear programming, llm]
order: 2
year: 2026
live: https://gridwise-energy-optimizer-production.up.railway.app/docs
shots:
  - { src: /projects/gridwise/dispatch-dark.jpg, alt: "Optimal 24-hour dispatch: grid import, solar, battery charge and discharge, with the operator's directive window highlighted" }
  - { src: /projects/gridwise/api-demo.jpg, alt: "Three operator notes become two typed constraints and a no-op, and the API returns the plan totals" }
---

## What it is

Built for the BUP CSE Fest 2026 hackathon. A campus has solar panels, a battery and a grid connection, and an operator leaves notes like *"keep at least 90 kWh in the battery from 6 PM to 10 PM"*. GridWise turns those notes into a cheapest-possible plan for the day.

## How it works

The rule is simple: the LLM never does arithmetic.

1. An LLM (or a deterministic fallback when it's slow or absent) classifies each note into one of six typed directives.
2. Guardrails validate them: hour windows, factor bounds, percentage-to-kWh conversions.
3. A HiGHS linear program with 96 variables and 73 constraints solves the exact optimum in under 5 ms.

## Highlights

- Energy balance, battery limits, reserve floors and end-of-day neutrality hold by construction.
- 97 tests, a non-root Docker image and a live API.
