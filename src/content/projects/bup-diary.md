---
name: bup-diary
repo: bup-diary
summary: An AI journal you can talk to. It finds your most relevant past entry before it answers.
tags: [flutter, supabase, gemini]
order: 6
year: 2025
shots:
  - { src: /projects/bup-diary/showcase.jpg, alt: "Four screens: sign in, create account, the features menu and the diary entry editor with a mood picker" }
---

## What it is

A journaling app: write about your day, tag a mood, and chat with an assistant that has read your entries. It can also suggest tasks based on what you wrote.

## How it works

- Each entry is embedded with Gemini when you save it.
- A chat message is embedded too, and a vector similarity search in Postgres finds the most relevant past entry. Gemini answers based on that entry.
- Supabase handles sign-in, storage and the task generator.
