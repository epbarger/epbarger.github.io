---
layout: post
title:  "Combo Caddy - Javascript Boxing Coach"
date:   2016-06-08 12:00:00 -0500
categories: Javascript
---

Learning how to box has had me feeling just a bit too cool, so I had to find a way to nerd it up.

Combo Caddy is a simple mobile-friendly website that shouts boxing combos at you, for heavy bag work or other training. Much like [ResistorCalc](/javascript/2016/03/16/resistor-calc-update.html), it is a simple single page Javascript website, with nothing fancy behind the scenes. There is still plenty of work to be done. Right now the boxing "coach" is just myself doing a gruff voice into a headset microphone.

<div class='image-container'>
[![ComboCaddy Screenshot](/assets/combo_caddy_2.png)](/assets/combo_caddy_2.png)
</div>

So far this project has been a fun journey into the [quirks of iOS HTML5 audio support](http://www.ibm.com/developerworks/library/wa-ioshtml5/index.html). Apple's phones will only play audio if it was directly triggered by a user action. This means I need to reuse the same Javascript audio object by swapping out the source when needed. Unfortunately, iOS also seems incapable of caching more than one audio file at a time, so every time I swap the source, the file is fetched from the network, causing some extra delay. The solution to this will be to use an [audio sprite](http://www.ibm.com/developerworks/library/wa-ioshtml5/index.html#audiosprites), something I will get to if I add a more "professional sounding" voice coach :).
