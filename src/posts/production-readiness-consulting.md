---
layout: layouts/post.njk
title: "Production Readiness Consulting"
description: "I've opened up 1-on-1 engineering sessions for developers who've built something with AI and want to know if it's actually ready for real users."
date: 2026-04-04
tags:
  - engineering
---

Something interesting has happened over the last couple of years: the barrier to shipping working software has dropped dramatically. AI coding tools have made it genuinely possible for someone with limited engineering experience to build and deploy a functional app. That's not hype, I've seen it firsthand.

But "working" and "production-ready" are different things, and the gap between them isn't always obvious until something goes wrong.

## The gap AI doesn't close

AI is good at producing code that does what you asked. It's less reliable when it comes to thinking through what you *didn't* ask; auth edge cases, injection vulnerabilities, what happens when a database query exceeds 30 seconds under load, or why storing a certain piece of user data might create liability down the road.

These aren't obscure edge cases. They're the things that experienced engineers develop intuition for over time, often because they've seen them cause real problems. That intuition doesn't transfer automatically through a code generation tool.

The other layer is that you often don't know what you don't know. If you've never shipped a production system before, you may not have a mental model for what questions to even ask or prompt your coding agent to fix. A vague sense that "something might be wrong" is hard to act on.

## What I'm offering

I've opened up 20-minute 1-on-1 engineering sessions focused on exactly this. You bring your app, your architecture, or a specific area of concern. We look at your actual code together, not a hypothetical, not a tutorial, just specific, honest observations about what I see.

(Think of this like home inspection, but instead of checking the foundation for cracks and the drywall for water damage before you buy a home, I'm helping you better understand the condition of your code).

Sessions cover whatever's relevant to your situation. Common areas include:

- **Authentication and authorization:** session management, JWT pitfalls, how auth bugs become data breaches

- **Input validation and injection:** SQL injection, XSS, command injection, and why validation alone isn't sufficient

- **API design and security:** rate limiting, CORS, key management

- **Scalability fundamentals:** caching, indexing, async processing, identifying bottlenecks before they surface under load

- **Data storage and privacy:** what to store, what not to, encryption at rest, and the downstream consequences of data handling decisions

- **Error handling and observability:** logging, alerting, and building systems you can actually debug

The goal isn't to hand you a checklist. It's to make sure you leave with enough understanding to evaluate future decisions on your own.

## Pricing and booking

The introductory rate is **$10 per session**. It's priced to be accessible while this is still new. I expect to raise it as availability fills.

Booking is through Ko-fi. No account required to pay. If you're not sure whether a session makes sense for your situation, send me an email first and I'll give you a straight answer.

[See the consulting page](/consulting/) for details and to book.
