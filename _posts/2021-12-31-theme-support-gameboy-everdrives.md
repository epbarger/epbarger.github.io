---
layout: post
title:  "Theme Support for Game Boy EverDrives"
date:   2021-12-31 00:00:00 -0500
categories: Javascript
featured: true
featured-headline: "Theme Support for Game Boy EverDrives"
featured-image: "/assets/gba_theme_editor.png"
featured-sort: 6
---

Flash carts are a popular aftermarket accessory for Game Boys. A flash cart allows you to play ROM files from an SD cart, meaning you can store and play many different games from the same cartridge! One of the most popular flash cart brands is [EverDrive](https://everdrive.me/), who make flash carts for many different retro game systems.

I myself own the EverDrive X5 for the Game Boy Advance, and the Everdrive X3 for the original Game Boy. Both devices are fantastic, but I was disappointed that I could not change the colors of the menu on the devices to add some personalized flair. So I set out to change that!

<div class='image-container' style='width:49%;display:inline-block;'>
[![Original GBA Theme](/assets/gba_theme_original.png)](/assets/gba_theme_original.png)
</div>
<div class='image-container' style='width:49%;display:inline-block;'>
[![Custom GBA Theme](/assets/gba_theme_custom.png)](/assets/gba_theme_custom.png)
</div>


The first step to achieving this was to reverse engineer the menu code just enough to change the colors on the screen. To do this, I had to research the opcodes and memory mapping used by the assembly language for both the Game Boy (GB) and Game Boy Advance (GBA). At a high level, it came down to writing the color data to certain locations in memory which the device interprets in a special way. I highly recommend looking at the [GB Pandocs](https://gbdev.io/pandocs/) if you're interested in learning more about GB programming.

I also had to spend time learning about the color format the Game Boys used. Turns out both devices use BGR555 colors, stored in a little-endian manner. BGR colors are essentially a 15-bit code - 5 bits each for blue, then red, and green. After some research I was able to [write a tool](https://orangeglo.github.io/BGR555/) to give me valid color values that could be injected.

Once I had some clues what the hexadecimal for the palette writing instructions looked like, and how to come up with the replacement colors, I was able to use a hex editor to search the ROM for code that looked like it was color related. My progress was to search, replace the color with bright red, and load it on the EverDrive to see if the change worked! Eventually I was able to map out all the colors the menus used for both the GB and GBA EverDrives!

<div class='image-container'>
[![Screenshot of GBA Theme Editor](/assets/gba_theme_editor.png)](/assets/gba_theme_editor.png)
</div>

After creating a map of where each color was stored, I was ready to create websites to enable easy theme creation! Starting with the color tool I created above, I created two very similar Vue.js powered websites that let you customize all the colors with a live preview, then write out an IPS file to be applied as a patch to the original menu ROM. Both websites are quite basic, but function nice enough to be a pleasant experience.

The websites share a good bit of code with my previous Game Boy related website, the [Nintendo Power ROM Editor](/javascript/2020/04/11/gameboy_nintendo_power_rom_builder.html). I was able to borrow some code to make the in browser hex-editing of the menu ROM a lot more straightforward. The trickiest part of the website build was determining the clearest way to present the editing constraints, as the GBA model in particular has some quirks in regards to what colors the editor is and isn't able to change.

I shared the websites around the Game Boy and EverDrive communities, and it's been really cool to see people making custom themes and personalizing their devices further! Check them out below!

[EverDrive GBA Theme Editor](https://orangeglo.github.io/everdrive-gba-editor/)

[EverDrive GB Theme Editor](https://orangeglo.github.io/everdrive-gb-editor/)