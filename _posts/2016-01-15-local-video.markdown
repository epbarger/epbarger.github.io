---
layout: post
title:  "Local Video - YouTube From Your Location"
date:   2016-01-15 17:29:00 -0500
categories: Ruby
featured: true
featured-headline: "Local YouTube Video Finder"
featured-image: /assets/local_video.png
featured-sort: 4
---

Local Video is a simple Ruby on Rails application I built that uses YouTube's API to pull videos that it has tagged as being near your coordinates. I'm not certain how YouTube classifies the video locations, but from what I've seen it's likely to be some combination of upload location and possibly video metadata. Either way, this tool tends to find some cool videos shot locally to you (and a lot of apartment listing videos as well). 

<div class='image-container'>
[![Local Video Screenshot](/assets/local_video.png)](/assets/local_video.png)
</div>

The application itself is a basic Ruby on Rails app with a Postgres database. Essentially I just get the user location with the [HTML5 Geolocation API](http://www.w3schools.com/html/html5_geolocation.asp) and pass that to the YouTube video API.
