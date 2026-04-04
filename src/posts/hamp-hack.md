---
layout: layouts/post.njk
title: "Hamp Hack"
description: "This weekend was Hampshire Collage's First hackathon, Hamp Hack. It was a 24 hour interdisciplinary hackathon with it's primary focus set on the topics of environmental sustainability, brain and cogni…"
date: 2016-02-28
tags:
  - engineering
  - events
---

![Hamp Hack](/assets/images/posts/hamp-hack/IMG_2827.JPG)

This weekend was Hampshire Collage's First hackathon, Hamp Hack. It was a 24 hour interdisciplinary hackathon with it's primary focus set on the topics of environmental sustainability, brain and cognition, life hacks and artificial intelligence.

![GitHub octocat trophy](/assets/images/posts/hamp-hack/IMG_2833.JPG)

Our team ended up winning an award from GitHub for our project (we each got an awesome Octocat trophy)!

For our project, we built an application that used [OpenCV](http://opencv.org/) to process whiteboard images from multiple angles to make them more readable. Our hack was inspired by our own experiences in classes with professors that write very fast. An application that could automatically record the text written on the whiteboard and use OCR to make it searchable would be something that would come in quite useful for most people.

Our design centered around a pipeline that processed images from two different camera angles. The first step analysed the images to find the coordinates of the corners. These coordinates were then used to automatically correct the skew of the images caused by the camera angle. The left and right images were then stitched together to create a large panoramic view of the whiteboard. The final step of the process involved using a Gaussian distribution to sharpen the image to make it more readable.

Here is a sample of before and after images.

![Whiteboard before processing](/assets/images/posts/hamp-hack/Screenshot from 2016-02-28 12-03-22.png)

![Whiteboard after processing](/assets/images/posts/hamp-hack/out.jpg)

This weekend was a lot of fun for everyone, there was a lot of great projects and it is always really cool to see the projects that each team comes up with.

![Major League Hacking](/assets/images/posts/hamp-hack/IMG_2826.JPG)
