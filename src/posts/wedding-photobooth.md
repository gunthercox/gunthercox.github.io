---
layout: layouts/post.njk
title: "Building a Photobooth"
description: "For our October wedding, I built a Raspberry Pi-powered photobooth from scratch rather than renting one. Here's how it came together."
date: 2024-11-22
tags:
  - engineering
---

![Photo booth](/assets/images/posts/wedding-photobooth/photobooth.jpg)

My wife and I got married this past October, and somewhere along the way in the planning process I decided to build our photobooth from scratch rather than rent one.

## The Hardware

The photobooth runs on a Raspberry Pi, which handles the workload of image capture via a connected camera, running a local web server, and managing the session flow. Guests interact with it through a touchscreen tablet that connects locally, loading the web interface the Pi serves directly.

This design kept the physical footprint simple. The Pi tucks cleanly into the camera enclosure, and the tablet provides a large, legible interface.

## The Interface

The interface was designed around a single constraint: anyone should be able to use it without instructions. Guests would range from younger siblings to grandparents, and we wouldn't be able to attend to it ourselves consistently throughout the evening.

Getting things right took several rounds of testing with friends and family before the wedding. Each session revealed something: labels that weren't clear or buttons that weren't obviously tappable. The initial flow I had designed made sense to me, but left opportunities where confusion could be eliminated for others. The interface went through a few significant revisions based on that feedback, and by the time the wedding arrived it held up well under unsupervised use.

## An Experiment Worth Running

Renting a photobooth was an option. It would have been less work, and the cost difference wasn't dramatic. But my wife and I regularly pitch "possible future business ideas" to each other. Everything from home-based pottery studios to apps and digital services. Something between curiosity and excitement made me lean towards making a fully custom experience was the right move for us to make.

There was also something fitting about it. Any rented booth would have been a highlight regardless, but one built specifically for our wedding, one built and running custom software written by us, and that could be iterated on... That distinction mattered. A from-scratch photobooth feels like a signature move (the only thing that might have topped it would have been figuring out how to get [Salvius](https://en.wikipedia.org/wiki/Salvius_(robot)) ordained to perform the ceremony, but getting a robot licensed to officiate is a bit more challenging than it sounds).

Whether this evolves into a future service we offer, or stays a one-day success story is still an open question. As an experiment in building something real, with real guests and a very hard deadline, it was worth every effort in my opinion.

## Now Available for Rent

Our experiment didn't end at the reception. The photobooth remains available for others to rent for their own events. You can browse details and reach out to us for availability at [photobooth.gunthercox.com](https://photobooth.gunthercox.com/).
