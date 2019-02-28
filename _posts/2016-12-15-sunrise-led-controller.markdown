---
layout: post
title:  "Sunrise LED Controller"
date:   2016-12-15 00:00:00 -0500
categories: Electronics
featured: true
featured-headline: "Sunrise LED Controller"
featured-image: "/assets/ledcontroller_2.jpg"
featured-sort: 4
---

I've always wanted to try one of those [alarm clocks that wake you up with light](http://www.usa.philips.com/c-p/HF3520_60/wake-up-light). Instead of buying one like a normal person, I decided to build one myself! Hooray!

What I ended up with is essentially a programmable dimmer for 12v LED light strips. I started with an Arduino Pro Mini knockoff as the brains, and connected a [DS1307 real time clock module](https://www.adafruit.com/products/264) from Adafruit to provide relatively accurate timekeeping. I also added a [four digit 7-segment display](https://www.adafruit.com/products/881) to give my project a decent looking clock display.

<div class='image-container' style='width:49%;display:inline-block;'>
[![LED Controller Board](/assets/ledcontroller.jpg)](/assets/ledcontroller.jpg)
</div>
<div class='image-container' style='width:49%;display:inline-block;'>
[![LED Controller with Lights](/assets/ledcontroller_2.jpg)](/assets/ledcontroller_2.jpg)
</div>

I hooked up the LED strip through an old school TIP120 Darlington transistor. I would have liked to have used a MOSFET instead, but I already had a few TIP120s laying around (thanks UMass ECE!). Using a MOSFET would have let me lower the power consumption, and probably increase the length of the LED strip I can drive without a heatsink. But the TIP120 works fine, and I can control the brightness of the LEDs with a little [PWM](https://en.wikipedia.org/wiki/Pulse-width_modulation) from the Arduino.

I'm currently putting the finishing touches on the software, but already this project is serving to brighten my mornings.
