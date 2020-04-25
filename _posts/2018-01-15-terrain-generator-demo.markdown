---
layout: post
title:  "Random Terrain Generator Demo"
date:   2018-01-15 00:00:00 -0500
categories: Javascript
featured: false
featured-headline: "Random Terrain Demo"
featured-image: "/assets/terrain.png"
featured-sort: 6
---

Full screen version [here](/terrain/). Click to regenerate, space to pause, right arrow to fast-forward.

<script type="text/javascript" src="/terrain/jquery-3.2.1.slim.min.js"></script>
<script type="text/javascript" src="/terrain/terrain.js"></script>
<div class='image-container'>
<canvas id="terrain" width="100" height="100" style="width: 100%; height: 400px; cursor: pointer; border-radius: 3px" moz-opaque></canvas>
</div>

I'm using a 2D midpoint displacement algorithm (aka the [Diamond-square algorithm](https://en.wikipedia.org/wiki/Diamond-square_algorithm)) to generate the terrain. If you're interested in learning how the algorithm works, definitely check out my [source code](https://github.com/epbarger/terrain/blob/master/terrain.js#L58). It's not perfectly clean, but understandable enough!
