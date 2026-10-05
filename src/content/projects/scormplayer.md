---
name: scormplayer
repo: scormplayer
summary: A test harness for e-learning packages. It validates them against the official ADL schemas and logs every LMS API call live.
tags: [javascript, vite, e-learning]
order: 5
year: 2026
shots:
  - { src: /projects/scormplayer/player.jpg, alt: "A sample quiz running in the player with the debugger listing every SCORM API call" }
  - { src: /projects/scormplayer/validation.jpg, alt: "Validation report for an uploaded package" }
---

## What it is

SCORM is the old standard that e-learning courses use to talk to a learning platform. When a course misbehaves, you usually can't see why. This tool runs a course locally and shows everything.

## How it works

- Upload a `.zip` and the package is extracted, checked against the ADL SCORM 2004 schemas and launched.
- Both the SCORM 1.2 and 2004 runtime APIs are exposed, with a fresh session for every launch.
- Every API call, console message and error from the course appears in a filterable debugger panel.
