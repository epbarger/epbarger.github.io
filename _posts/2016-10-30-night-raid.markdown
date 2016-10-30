---
layout: post
title:  "Night Raid - Missile Command Clone for Arduboy"
date:   2016-10-30 01:00:00 -0500
categories: night-raid
---

A few months ago I discovered the existence of a really cool piece of hardware called the [Arduboy](http://www.arduboy.com). The Arduboy consists of an Arduino-compatible ATmega32u4 micro-controller, tiny OLED display, nice clicky buttons, and a rechargeable battery, all wrapped up in a well built package that resembles a downsized Gameboy. Writing for it is very straightforward, as the company provides a nice open source library to interact with all the hardware.

<div class='image-container'>
<video muted controls loop>
  <source src="/assets/nightraid480.webm" type="video/webm">
  Your browser does not support my webm video :(
</video> 
</div>

Night Raid is the first game I've written for the Arduboy. The gameplay is pretty much a straight clone of Missile Command. The player intercepts incoming missiles with their own, in order to defend their cities from destruction. Instead of having different stages like the original game, I've opted to go for a non-stop barrage, with the difficulty ramping up as the score increases. The game ends when all of the player's cities or defenses have been destroyed. In order to incentivise the defense of all their cities, the player can only fire one missile per city.

Writing for the Arduboy is a lot of fun. You're working in a memory-constrained environment (32KB Flash, 2.5KB RAM), so you really need to think about whether you need a whole ```unsigned int``` or if a simple ```byte``` will do. I found this a bit refreshing honestly, as most of the time I'm writing in a dynamic language like Ruby or Javascript, on a platform where memory might as well be infinite relative to the Arduboy.
