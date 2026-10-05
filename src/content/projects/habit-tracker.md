---
name: habit-tracker
repo: Goriber-Habit-Tracker
summary: A dependency-free terminal study tracker with a stopwatch, pomodoro, streaks and per-subject stats.
tags: [c, cli]
order: 8
year: 2024
shots:
  - { src: /projects/habit-tracker/tour.jpg, alt: "Terminal screens: home menu with a 5-day streak, statistics, to-do list and a pomodoro in progress" }
---

## What it is

*Goriber* is Bangla for "the poor man's": a humble habit tracker with no accounts, no cloud and no dependencies. One C11 binary and one data file.

## How it works

- Stopwatch, countdown and pomodoro sessions are logged with their subject and duration.
- Statistics show total time, a day streak and per-subject bar charts.
- Input is line-based, so junk input gets a retry instead of an infinite loop, and the pomodoro pauses with a single key.
