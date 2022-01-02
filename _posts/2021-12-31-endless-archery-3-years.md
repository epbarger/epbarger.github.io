---
layout: post
title:  "Endless Archery - Three Years On"
date:   2021-12-31 00:00:00 -0500
categories: Games
featured: true
featured-headline: "Endless Archery - iOS Game"
featured-image: "/assets/ea_beach.jpg"
featured-sort: 1
---

It has been over three years since I released my first commercial game to the iOS App Store, [Endless Archery](https://apps.apple.com/us/app/endless-archery/id1390437916). Endless Archery is a simple physics game where you shoot arrows at a target over procedurally generated terrain. It's meant to be a relaxing experience, in addition to having soft achievements and a leaderboard to reward players going for high scores. The game started life as [a small PICO-8 game](/games/2018/02/09/endless-archery.html), and I released an [updated version](/games/2018/12/15/endless-archery-ios.html) to the App Store in November 2018.

Over the years, I've checked in here and there to update the game with new features and content. I've declared the game finished a few times, but isn't long until I think of more changes and improvements to make. It has been very satisfying to have a project to come back to here and there, where changes will have an impact on the community that continues to play the game.

<div class='image-container'>
[![Endless Archery](/assets/endless_archery_ios.png)](/assets/endless_archery_ios.png)
</div>

## Major Additions

Here are a few of the more major additions to Endless Archery I've made over the last three years.

### iPad Support

Just over a year after releasing the game, I released update 1.3, which added iPad support. This was a fairly large project! Though the game already had _some_ support for different screen ratios (supporting both the older 16:9 iPhone screens and the newer 19:9 screens), I still had to spend lots of time improving the scaling support so that the vertical size of the terrain could be scaled without affecting the physics. Thankfully I had used constants for screen width and height in the game, so it was mostly a matter of tripling checking the use of the constants in the rendering and physics systems, and adapting the menu to make use of the extra space afforded by 4:3 ratio iPad screen.

### New Themes

Over the three years, I've added two new "themes" to the game - a beach theme, and a moon theme. Creating a new theme in Endless Archery means new art assets need to be created, new terrain colors picked, and new bonus effects added.

The moon level has reduced arrow movement speed (to simulate reduced gravity without altering the gameplay physics), and a randomly generated star field background, with orbiting Earth in the background.

<div class='image-container'>
[![Endless Archery Moon Theme](/assets/ea_moon.jpg)](/assets/ea_moon.jpg)
</div>

The beach level (released only a few days ago!) has a moving ocean tide with sailboats in the distance. The sailboats even have little wakes powered by [Love2D](https://love2d.org/)'s particle system!

<div class='image-container'>
[![Endless Archery Beach Theme](/assets/ea_beach.jpg)](/assets/ea_beach.jpg)
</div>

### Random Ambient Piano Music

Many of the early reviews the game received mentioned wanting some sort of relaxing background music added to the game. While I would have loved to attempt to compose music for the game, I knew that creating enough music of a quality I was happy with was likely beyond me. Instead, I opted to record about 50 different simple piano samples. I then created a randomized playback engine that builds very basic pentatonic phrases by playing groups of samples together with varied, but musical, timing. This ended up suiting the game - the piano melds into the wind sounds, and the semi-random timing of the piano phrases works quite well!

As a quick example, here's the introductory jingle that plays when the game starts up.

<audio controls>
  <source src="/assets/ea_intro.mp3" type="audio/mp3">
</audio>

## Store Performance

I released Endless Archery in the App Store at a price of $1.99. Unfortunately, the price barrier does mean many fewer people will play my game. So I didn't expect my game to be a huge hit - all I was hoping was that some people would play it and enjoy it.

While Endless Archery was far from a smash hit on the App Store, it has done quite well compared to my expectations! Some stats as of writing...

- _Overall Rating (All Countries)_ - 4.78 / 5
- _Leaderboard Participants (Opt-In)_ - 804
- _Downloads_ - 72,084 (More on this below!)
- _Gross Revenue_ - About $5,000

You might take a look at the downloads figure and note that it doesn't match up with the revenue number. If 72,084 people had paid me $2 I'd have been extremely pleased! However the high downloads were achieved by temporarily making the game free for periods of time. Twice a year I made the game free for about a week. This generates lots of downloads, and builds activity on the leaderboards. It's also a good time to connect with players, as paid games going free are usually posted on websites where I can drop in to read and answer comments. I also suspect the higher downloads helps the app's ranking in the App Store - usually I see a period of higher sales after making the game temporarily free. So this strategy has seemed to be a win-win!

## So Far, So Good

I'm extremely thankful that overall the reception to Endless Archery was and continues to be positive! I was worried pre-release that such a simple game wouldn't appeal to many, but Endless Archery does seem to have attracted a niche of players.

Want to try the game? You can [view Endless Archery on the App Store here](https://apps.apple.com/us/app/endless-archery/id1390437916). If you would like a free download code, feel free to shoot me an email!
