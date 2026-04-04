---
layout: layouts/post.njk
title: "Hack MIT"
description: "Our team traveled to MIT this weekend to participate in this years Hack MIT event. Hack MIT is a hackathon hosted my MIT students on the MIT campus."
date: 2015-09-20
tags:
  - engineering
  - events
---

![Hack MIT](/assets/images/posts/hack-mit/IMG_2805.JPG)

Our team traveled to MIT this weekend to participate in this years Hack MIT event. Hack MIT is a hackathon hosted my MIT students on the MIT campus.

![My awesome name badge](/assets/images/posts/hack-mit/IMG_2807.JPG)

*My awesome name badge.*

This was my second time participating at Hack MIT and I have to say that it definitely ranks top on my list of best hackathons to attend. This year, Synaptic was one of the sponsors for the event and they were offering some different hardware options for participants to experiment with. We decided to grab one of their capacitive-based touch imaging sensors.

![Synaptics capacitive-based touch imaging sensor](/assets/images/posts/hack-mit/IMG_2809.JPG)

After hooking up the sensor we came up with an idea to use it as an input device for producing different forms of audiovisual media. Essentially, we used the touch pad to create a piano-like synthesizer that would produce both sound and imagery depending on where the user touched the sensor.

Our code worked by using a bucket-flood algorithm to detect multiple touch points from the user's fingers. This produced raw values that we matched into a grid where each square on the grid represented a different tone. One axis was used to determine the note and the other axis was used to determine the octave.

As a final component to our project, we added a visualizer element using a Python open-gl library to display a burst of colors when the user touched the sensor. The color that was displayed was based on the tone being generated and the size of the burst was based on the amount of area that the user touched the sensor.

![Synaptics capacitive touch sensor](/assets/images/posts/hack-mit/IMG_2814.JPG)

All together, this weekend was a great experience. Everyone on our team definitely learned a lot and had an amazing time programming, listening to sponsors present, and enjoying MIT's great meals.

