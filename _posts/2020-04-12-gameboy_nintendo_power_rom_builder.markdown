---
layout: post
title:  "Building Nintendo Power Game Boy ROMs"
date:   2020-04-11 00:00:00 -0500
categories: Javascript
featured: true
featured-headline: "Game Boy Nintendo Power ROM Builder"
featured-image: "/assets/gbnp.png"
featured-sort: 6
---

In 2000, Nintendo released the [Nintendo Power Game Boy Cartridge](https://en.wikipedia.org/wiki/Nintendo_Power_(cartridge)) (AKA GB Memory cart), a first party re-programmable flash cart. You were able to take this cartridge into stores, insert it into a kiosk, and download new games to it. This was done to make more space in stores for Nintendo 64 games.

Until now, the only way to flash these cartridges with new games was to use a relatively decent open source Windows tool called [GB Memory Maker](https://github.com/Infinest/GB-Memory-Binary-Maker). Being a Mac user, I thought it would be fun to take the core functionality of this tool, and turn it into a website! In addition to building the files necessary to flash multiple games to the cartridge, I've also included some extra options, like customizing the menu style and ticker text.

<div class='image-container'>
[![Game Boy Nintendo Power ROM Builder](/assets/gbnp.png)](/assets/gbnp.png)
</div>

This website is a very simple [Vue](https://vuejs.org/) application. [Check out the source here](https://github.com/orangeglo/gbnp)!
