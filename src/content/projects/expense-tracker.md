---
name: expense-tracker
repo: swing-expense-tracker
summary: A desktop finance tracker with income, categories, pie charts and salted-hash accounts.
tags: [java, swing, flatlaf]
order: 7
year: 2025
shots:
  - { src: /projects/expense-tracker/dashboard.jpg, alt: "Dashboard with income, expenses, balance and savings cards" }
  - { src: /projects/expense-tracker/chart.jpg, alt: "Spending pie chart by category" }
---

## What it is

A Java Swing app for personal finances, in ৳. Each user has their own ledger behind a login.

## How it works

- Passwords are stored as salted PBKDF2 hashes, and older plain-text accounts upgrade on their next login.
- The interface uses FlatLaf and JFreeChart.
- A Maven build produces a runnable jar, with tests for the ledger maths and account handling.
