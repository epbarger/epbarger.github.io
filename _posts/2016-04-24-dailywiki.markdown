---
layout: post
title:  "DailyWiki - Random Wikipedia Articles Every Day"
date:   2016-04-24 00:00:00 -0500
categories: dailywiki
---

[DailyWiki](https://fierce-reaches-42697.herokuapp.com/) is a simple page that simply links 30 random [Wikipedia](https://en.wikipedia.org) articles each day, refreshing at midnight. I've always been a fan of random Wikipedia browsing, so this is my attempt to streamline that process a tiny bit.

<div class='image-container' style='width:49%;display:inline-block;'>
![DailyWiki Light Theme](/assets/dailywiki_1.png)
</div>
<div class='image-container' style='width:49%;display:inline-block;'>
![DailyWiki Dark Theme](/assets/dailywiki_2.png)
</div>

It's a very basic Rails app at the moment. Once a day I refresh a [Redis](http://redis.io/) cache of 30 wikipedia articles, and render them on the page. This keeps the article list in sync for everyone using the website. There are no models, and only one controller action, so it's pretty hard to even justify it being a Rails app in the first place. 

In the future I want to try rewriting it in [Sinatra](http://www.sinatrarb.com/intro.html). Other than that, I'm not sure where else I'll take this project, but it was fun to throw together!
