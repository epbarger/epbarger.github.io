---
layout: post
title:  "DailyWiki - Random Wikipedia Articles Every Day"
date:   2016-04-24 00:00:00 -0500
categories: dailywiki
---

[DailyWiki](https://gentle-tundra-91628.herokuapp.com/) is a simple page that simply links 30 random Wikipedia articles each day, refreshing at midnight. I've always been a fan of random Wikipedia browsing, so this is my attempt to streamline that process a tiny bit.

<div class='image-container' style='width:49%;display:inline-block;'>
![DailyWiki Light Theme](/assets/dailywiki_1.png)
</div>
<div class='image-container' style='width:49%;display:inline-block;'>
![DailyWiki Dark Theme](/assets/dailywiki_2.png)
</div>

It's a very basic [Sinatra](http://www.sinatrarb.com/intro.html) application. Once a day I refresh a [Redis](http://redis.io/) cache of 30 wikipedia articles, and render them on the page. This keeps the article list in sync for everyone using the website. This was my first time using Sinatra, and I really appreciated how simple and clean it can be compared to writing Rails code. I'll definitely be using it again in the future for these simple lightweight projects that require a server.

I'm not sure where else I'll take this project, but it was fun to throw together!
