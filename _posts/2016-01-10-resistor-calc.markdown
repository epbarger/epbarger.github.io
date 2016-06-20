---
layout: post
title:  "Resistor Calculator"
date:   2016-01-10 21:08:58 -0500
categories: resistor-calculator
---

[ResistorCalc.net](http://www.resistorcalc.net) is a simple tool that converts between four-band resistor color codes and their value. The page is written in Javascript, with a little jQuery for DOM manipulation. It also works quite well on phones thanks to the powers of [everyone's favorite responsive CSS framework](http://getbootstrap.com).

The biggest challenge was parsing the variety of inputs the tool can get. *1K1*, *1.1k*, and *1100*, are all valid inputs for the same resistor value. When you add in extra decimals, zeros, and the optional tolerance portion, the input becomes tricky to sanitize!

<div class='image-container'>
[![Resistor Calc Screenshot](/assets/resistor_calc_1.png)](/assets/resistor_calc_1.png)
</div>

I intend to add a few more features to the page in the future, but for now it's complete and useful for hobbyists / EE students.
