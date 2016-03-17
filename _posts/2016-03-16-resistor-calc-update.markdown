---
layout: post
title:  "Major Rewrite and New Features for ResistorCalc.net"
date:   2016-03-16 00:00:00 -0500
categories: resistor-calculator
---

I've finally finished making a series of large changes to [ResistorCalc.net](http://www.resistorcalc.net), my simple Javascript resistor color code calculator. The biggest changes are behind the scenes. I re-wrote the majority of the resistor conversion code, added a lot more functionality, and packaged everything up into a *Resistor* prototype. This more cleanly separates the business logic from the code that wires it all up to the UI. I also fixed some minor CSS issues. Styling should now be more consistent across mobile devices.

<div class='image-container' style='width:79%;display:inline-block;'>
![Desktop](/assets/resistor_calc_3.png)
</div>
<div class='image-container' style='width:20%;display:inline-block;'>
![Desktop](/assets/resistor_calc_2.png)
</div>

With this update comes some features! The application now supports five band resistors, and can even convert between four and five band. It now works offline, thanks to [HTML5 ApplicationCache]() support. The final new feature, and a personal favorite, is the ability to tell you the nearest real-world resistor value comparable to the one you entered. I believe that this tool is now one of the more feature complete resistor calculators out there.
