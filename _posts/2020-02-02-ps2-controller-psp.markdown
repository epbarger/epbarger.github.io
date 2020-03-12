---
layout: post
title:  "Using a Playstation 2 controller with a PSP"
date:   2020-02-02 00:00:00 -0500
categories: Electronics
featured: true
featured-headline: "PS2 to PSP Adapter"
featured-image: "/assets/ps2psp.jpg"
featured-sort: 4
---

Recently, when I was clearing out some things from my parent's house, I came across my old [Sony PSP](https://en.wikipedia.org/wiki/PlayStation_Portable). I have a lot of fond memories playing games like Patapon 2, Wipeout, and Metal Gear Solid on the thing, so I thought it would be fun to revisit some of those games. Problem is, I'd rather play them on a TV! While the PSP 2000 I have supports video out, there is no way to use a real controller, so you're stuck with the built-in tiny joystick. Unless... I could create an adapter to enable me to use a Playstation 2 controller!

<div class='image-container'>
[![PS2PSP](/assets/ps2psp.jpg)](/assets/ps2psp.jpg)
</div>

The core of the board is an ATmega328 microcontroller. This is connected to the PSP through three ribbon cables - one for the directional pad and left trigger, one for the face buttons and right trigger, and one for start, select, and other function buttons. Triggering a button is simple with the microcontroller - just pull the appropriate signal to ground.

To replace the joystick on the PSP, I added a two-channel digital potentiometer chip to the PCB. This chip is connected to the microcontroller through [I2C](https://en.wikipedia.org/wiki/I%C2%B2C), a simple two wire communication protocol. Using this chip, I'm able to control the X and Y axis of the PSP joystick with 256 bit resolution.

With those elements in place, it becomes relatively simple to map the PS2 controller to the PSP controls. The PS2 controller's second analog stick can be mapped to the PSP face buttons, enabling psuedo-analog control for quite a few PSP games.

The design is open source, and available [here](https://github.com/orangeglo/PS2PSP).

I'm planning to work more on this project in the near future!
