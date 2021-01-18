---
layout: post
title:  "Major Rewrite and New Features for ResistorCalc.net"
date:   2016-03-16 00:00:00 -0500
categories: Javascript
featured: false
featured-headline: "ResistorCalc.net"
featured-image: /assets/resistor_calc_3.jpg
featured-sort: 3
---

I've finally finished making a series of large changes to [ResistorCalc.net](http://www.resistorcalc.net), my simple Javascript resistor color code calculator. The biggest changes are behind the scenes. I re-wrote the majority of the resistor conversion code, added a lot more functionality, and packaged everything up into a *Resistor* prototype. This more cleanly separates the business logic from the code that wires it all up to the UI. I also fixed some minor CSS issues. Styling should now be more consistent across mobile devices.

<div class='image-container' style='width:78%;display:inline-block;'>
[![Resistor Screenshot Desktop](/assets/resistor_calc_3.jpg)](/assets/resistor_calc_3.jpg)
</div>
<div class='image-container' style='width:20%;display:inline-block;'>
[![Resistor Screenshot Mobile](/assets/resistor_calc_2.jpg)](/assets/resistor_calc_2.jpg)
</div>

With this update comes some features! The application now supports five band resistors, and can even convert between four and five band. It now works offline, thanks to [ApplicationCache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) support. I would have liked to use the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers), but it's not supported in most mobile browsers yet. The final new feature, and a personal favorite, is the ability to tell you the nearest real-world resistor value comparable to the one you entered. 

I believe that this tool is now one of the more feature complete resistor calculators out there.
