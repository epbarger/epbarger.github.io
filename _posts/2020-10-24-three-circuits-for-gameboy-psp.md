---
layout: post
title:  "Three Tiny PCBs for Game Boy & PSP"
date:   2020-10-24 00:00:00 -0500
categories: Electronics
featured: true
featured-headline: "Three Tiny PCBs for Game Boy & PSP"
featured-image: "/assets/circleboy.jpg"
featured-sort: 2
---

For whatever reason, my 2020 has been all about modding Game Boys and PSPs. I've worked on quite a few projects in this area (see [GBNP](/javascript/2020/04/11/gameboy_nintendo_power_rom_builder.html) and [Consolized PSP](/electronics/2020/02/02/ps2-controller-psp.html)), but here I want to showcase a few of the smaller mods I've created that maybe don't need a full post dedicated to them :)

### Saving Brightness Levels on a GBA SP

While the stock [Game Boy Advance SP](https://en.wikipedia.org/wiki/Game_Boy_Advance_SP) has two brightness levels (or on/off depending on the model), my SP has an aftermarket screen with six brightness levels! This is awesome, but usually I want it on the second lowest brightness to maximize my battery life. Unfortunately, the kit I have installed does not save my brightness preference, meaning I'd have to cycle through all the brightness levels whenever I turn the Game Boy on.

<div class='image-container'>
[![Game Boy SP Brightness Mod Installed](/assets/sp_brightness_board.jpg)](/assets/sp_brightness_board.jpg)
</div>

To fix this, I created a small circuit board to save my current brightness level. The presses of the brightness button are intercepted by the [ATtiny85](https://www.microchip.com/wwwproducts/en/ATtiny85) micro-controller, counted, and saved to the non-volatile EEPROM memory on the chip. When the Game Boy is powered on, the micro-controller automatically replays the correct number of brightness button presses necessary to maintain the same brightness level the console was previously on! I'm utilizing interrupts and sleep mode on the ATtiny to ensure that minimal power is consumed.

Check out the [code and PCB files](https://github.com/orangeglo/SP-IPS-Brightness-Hack) on GitHub!

### Installing a 3DS Slider in a GBA

What if instead of a directional pad, the [Game Boy Advance](https://en.wikipedia.org/wiki/Game_Boy_Advance) had a 3DS joystick? This mod was something I attempted purely for my own amusement, as I think in practice these games don't work nearly as well with a joystick.

<div class='image-container'>
[![CircleBoy Installed](/assets/circleboy.jpg)](/assets/circleboy.jpg)
</div>

The CircleBoy is a small PCB that convert a [3DS](https://en.wikipedia.org/wiki/Nintendo_3DS) circle pad joystick into directional pad signals for the Game Boy. Software on an ATtiny85 micro-controller reads analog values from the joystick, and converts those signals into button presses on the Game Boy PCB. The board includes the ability to configure the dead-zone size and mapping strategy by shorting different pads on startup. I've even sold a few of these boards to other tinkerers in the Game Boy community!

For more images, see [installation gallery](https://imgur.com/a/vMOLDO8).

Check out the [code and PCB files](https://github.com/orangeglo/CircleBoy) on GitHub!

### Replacing the PSP Analog Stick

This last one is a completely passive adapter that lets you plug a joystick designed for the [Playstation Vita](https://en.wikipedia.org/wiki/PlayStation_Vita) into a [PSP 3000](https://en.wikipedia.org/wiki/PlayStation_Portable#PSP-3000). The stock PSP joystick only slides around (instead of tilting), so this ends up being a huge upgrade! Because the two sticks use are so similar, this PCB does not need any circuitry - only two flat flex cable connectors.

<div class='image-container'>
[![Vita Joystick in a White PSP 3000](/assets/vita_stick_psp.jpg)](/assets/vita_stick_psp.jpg)
</div>

As always, the [PCB files](https://github.com/orangeglo/VitaStickForPSP3000) are up on GitHub!