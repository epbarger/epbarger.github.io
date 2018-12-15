---
layout: post
title:  "TinyPicross - Picross for Arduboy"
date:   2017-11-16 00:00:00 -0500
categories: Games
featured: true
featured-headline: "TinyPicross for Arduboy"
featured-image: "/assets/tinypicross_2.jpg"
featured-sort: 5
---

I decided it was time to build another game for the [Arduboy](http://www.arduboy.com), which I've [written about previously]({% post_url 2016-10-30-night-raid %}).

TinyPicross is heavily inspired by the Nintendo Picross games, specifically the 3DS and Switch games. [Picross (AKA Nonogram)](https://en.wikipedia.org/wiki/Nonogram) puzzles are logic puzzles where you fill in grid cells according to hint numbers. The Wikipedia article is going to do a better job explaining than I ever would.

<div class='image-container' style='width:25.8%;display:inline-block;'>
[![TinyPicross for Arduboy](/assets/tinypicross_1.jpg)](/assets/tinypicross_1.jpg)
</div>
<div class='image-container' style='width:73.9%;display:inline-block;float:right;'>
[![TinyPicross for Arduboy](/assets/tinypicross_2.jpg)](/assets/tinypicross_2.jpg)
</div>

While I would have liked to build a random puzzle generator, making one seems challenging, especially with the limited computational power of the Arduboy. A good Picross puzzle should be able to solved entirely logically, so generating puzzles that don't require guessing is not a simple task.

Instead of generating the puzzles on the Arduboy, I opted to generate 162 15 by 7 puzzles on my computer (using [Gnonograms](https://github.com/jeremypw/gnonograms)), and store them in flash memory. Since memory is such a precious resource when writing embedded programs, I couldn't afford to waste any space using a full `bool` for each grid cell, since a `bool` uses a full byte of space on the AVR platform. I cut down the amount of space each puzzle needed by packing each 7 cell column into a single `byte`. By doing this I was able to get the size of a puzzle down to 15 bytes, which I was happy with. A [bitmask](https://en.wikipedia.org/wiki/Mask_(computing)) can applied to the byte to get the value of the cell I need.

Since entering 162 puzzles by hand seemed very error-prone and tedious (see [puzzles.h](https://github.com/epbarger/tinypicross/blob/master/puzzles.h)), I hacked together a Ruby script to convert Gnonogram save files into C code. This will make it simple to swap out the puzzles in the future once I finish them all!
