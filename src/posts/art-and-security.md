---
layout: layouts/post.njk
title: "Anomaly Detection as a Basis for Physical Security Monitoring"
description: "How I built a sensor platform that uses a time-series autoencoder to detect unusual patterns across temperature, light, sound, and motion data."
date: 2021-08-21
tags:
  - engineering
---

![Lasers](/assets/images/posts/muse.jpg)

A basic security system works using the same common approach: it watches for specific conditions such as motion in a defined zone, a door or window changing from open to closed, or an impact against a surface greater than a defined threshold. An alert is triggered when a condition is met. That works well enough for the scenarios the manufacturer anticipated, but it's a rigid model. It doesn't get improve over time, it doesn't understand context, and it can't reason about patterns that weren't pre-programmed into it.

I wanted to try building something different. Rather than creating a system around a fixed set of triggers, I wanted to build one that learned what "normal" looked like and flagged deviations from that. The core idea is anomaly detection: instead of comparing observations against a rulebook, you compare them against a statistical model of expected behavior.

## The Hardware

The system runs on a Raspberry Pi, which is a reasonable fit for this kind of always-on workload. It's low power, runs Linux, and has well-supported GPIO and I2C interfaces for connecting sensors directly.

The sensor array covers several environmental dimensions. Temperature and humidity are tracked via an I2C sensor, useful both as environmental data and as a secondary signal (a door left open in winter shows up as a temperature drift over time). A light sensor captures ambient light levels, which form a reliable behavioral fingerprint: lights turning on and off follow patterns that reflect when people are home and which rooms are in use. A sound sensor measures decibel levels (not enough data to recreate an audio recording, just a continuous reading of acoustic presence in the space). A Raspberry Pi camera module provides the visual layer.

Power continuity matters for a security system in ways it doesn't for most other Raspberry Pi projects. A UPS HAT handles this, keeping the system running through power interruptions and exposing battery state (voltage, current, charge level, thermal status) over I2C. The software tracks three power modes (charging, fully charged, battery powered) and adjusts accordingly. Fan speed is also automated based on CPU temperature to keep the hardware stable under sustained load.

## Software Architecture

The application is built on Django with Django REST Framework, which provides a local REST API for querying state and managing configuration. Uvicorn runs it as an ASGI service. SQLite handles local persistence for small devices like this better than more robust databases like PosgresSQL.

The more interesting coordination layer is Redis. Rather than a monolithic process, the system is broken into several independent services (supervised by Supervisord) that communicate via Redis pub/sub channels. The camera service publishes motion and face detection events on named channels; other sensor events follow a similar namespace pattern. This means a crash in the camera service doesn't affect the API or sensor polling, and any service can be independently restarted without taking down the system. It's a pattern worth considering for any embedded system where reliability matters more than simplicity.

Each detected event is modeled with a namespace, a metadata payload, a timestamp, and an expiration (when storage space is limited, we can make the decision that after a certain amount of time some data is no longer relevant or worth keeping). Events are assigned a severity level on a five-point scale computed from context at creation time. A debouncing mechanism where by using a Redis cache keyed on an MD5 hash of the event signature, helping to mitigate cases where the same condition for an event type within a small enough time frame generates repeated alerts.

## Computer Vision

The camera service uses OpenCV. The motion detection implementation for this setup works through frame differencing: consecutive frames are compared, morphological operations clean up noise, and contour analysis isolates the largest region of movement in the frame. Face detection runs Haar cascade classifiers over the same frames when motion is present.

Running OpenCV on a Raspberry Pi is fairly easy to set up. Using a headless build avoids pulling in unnecessary display dependencies and helps keep memory usage more manageable. Frame resolution and capture rate need to be tuned to what the hardware can sustain continuously, meaning detection quality and CPU budget are in direct tension, and finding the right balance takes a bit of testing.

**Note:**  Extreme gradual changes could bypass this system of measurement (ex. moving extremely slowly in front of the camera, or gradually increasing ambient db levels). Outside of this experiment, the principle of fixed thresholds used by simple alarms still has some merit as a method to mitigate this issue.

## Additional Data Sources

Aside from sensors, local network is also rich with signals that can be monitored. For example, the system periodically scans the local network, maps discovered device MAC addresses to manufacturers, and maintains a record of known devices. An unrecognized device appearing on the network generates an alert. It's a blunt instrument by itself, but as one signal among many it provides useful coverage, particularly for detecting unexpected access points or unfamiliar devices.

For self-health monitoring, device values are also captured such as CPU temperature, memory usage, disk I/O, and network I/O. This telemetry is all added into the historical record that the anomaly model later trains on.

## Anomaly Detection with an Autoencoder

Once you have continuous multivariate time-series data such as light, sound, temperature, and motion event frequency sampled over weeks, you have the ingredients for a more principled approach to detection.

The model is a time-series autoencoder. The architecture takes a fixed-length window of sensor readings as input, compresses it through an encoder into a lower-dimensional latent representation, then reconstructs the original sequence through a decoder. The model is trained exclusively on normal data (anomalous events having been manually labeled in the initial batch of data, and confirmed or dismissed in alerts for later iterations).  After training, reconstruction error serves as the anomaly score. The higher the error on a given window of sensor readings, the less it resembles patterns the model learned to expect.

This has a few advantages over threshold-based rules. It captures correlations across sensors: a spike in sound level alone might be unremarkable, but the same spike with no corresponding change in motion or light at 2am is a different reading entirely. It also adapts to the actual patterns of the space rather than forcing a generic baseline onto a specific environment. Periodic retraining handles drift: changing daylight patterns across seasons, schedule changes, or any significant shift in household routines.

One thing worth being direct about: you need enough representative normal data before the model is useful. There's a ramp-up period after deployment before detection becomes reliable. The system tracks when reconstruction error has been elevated across an extended window, which serves as a proxy for systematic drift and a prompt to retrain.

## Some Observations

The most useful thing this project demonstrates is how security monitoring is fundamentally a data problem. The ability to sense an environment, whether physical or virtual, is the foundation of any higher level of analysis. Raw data must be shaped into observability, and observability must be refined with actionability. The value is create by what you do with your data stream; how you model it, what patterns you surface, and how you distinguish signal from noise.

Owning the full pipeline from sensor to storage to model keeps all of that under your control. There's no vendor deciding what events are worth surfacing or how long your history is retained. That control comes with the responsibility of maintaining the system, but for something this close to home infrastructure, the tradeoff is worth it.

One final observation is that there is a beautiful continuous flow to the captured signals of daily life. The arc of light levels curve slowly as the sun rises and sets each day, ambient sound dips during the night and afternoon but swoops upward in the morning and evening while preparations for the day's work or the evening's meal are undergone. These signals of our daily lives paint a picture of both our presence and our absence within the spaces we inhabit.
