---
name: dhaka-aqi
repo: dhaka-aqi-dashboard
summary: Air-quality monitoring and next-hour PM2.5 forecasting for Dhaka, with a live dashboard.
tags: [python, flask, scikit-learn, data]
order: 3
year: 2026
shots:
  - { src: /projects/dhaka-aqi/overview.jpg, alt: "Dashboard overview: current AQI 114, unhealthy for sensitive groups, with the EPA scale and dataset statistics" }
  - { src: /projects/dhaka-aqi/model-validation.jpg, alt: "Model performance, observed PM2.5 trend and actual-versus-predicted validation chart" }
  - { src: /projects/dhaka-aqi/forecast.jpg, alt: "Recursive 24-hour PM2.5 forecast" }
---

## What it is

A pipeline from public sensor data to a forecast. It pulls PM2.5 readings for Dhaka from the OpenAQ API, converts them to the US EPA 2024 AQI, trains a next-hour model and serves everything in a dashboard.

## How it works

- **Data**: 4,280 hourly observations, cleaned (error codes, gaps, outliers) onto a regular hourly grid.
- **Model**: hour, weekday, month and lagged readings feed a linear model, chosen over a random forest on held-out data. It scores R² 0.74 on 852 unseen hours.
- **Forecast**: up to 72 hours ahead, feeding each prediction back in as the next input.
- **Dashboard**: Flask and Chart.js, with live readings when an API key is set and a bundled snapshot otherwise.
