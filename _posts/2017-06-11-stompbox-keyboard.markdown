---
layout: post
title:  "Programmable Stompbox Computer Keyboard"
date:   2017-06-11 00:00:00 -0500
categories: Electronics
---

This latest project is a programmable computer keyboard, with buttons you press with your feet. I built it with parts that are commonly used in guitar effect pedals and other music equipment.

<div class='image-container' style='width:100%;display:inline-block;'>
[![Stompbox Keyboard Pedal](/assets/stomp_long.jpg)](/assets/stomp_long.jpg)
</div>

Each footswitch can have up to four keyboard keys mapped to it. When you press the button, it sends all of the assigned keys to the computer simultaneously, as if you are doing a complex keyboard shortcut. This gives it a lot of flexibility to control various functionality in nearly any piece of computer software. I see a lot of potential uses for it in video/music production, DJing, live music, and computer gaming.

The internals of the pedal are very simple - three SPST momentary switches wired up to a Arduino-compatible Atmega32u4 board. This chip can act as a HID keyboard, letting me send keyboard commands without the need for an external USB chip. 

<div class='image-container' style='width:52%;display:inline-block;'>
[![Keyboard Closeup](/assets/stomp_close.jpg)](/assets/stomp_close.jpg)
</div>
<div class='image-container' style='width:46%;display:inline-block;'>
[![Keyboard Editor](/assets/stomp_editor.png)](/assets/stomp_editor.png)
</div>

I wrote a simple Python GUI application to let me reprogram the keyboard. It connects over a serial port and sends new key configuration with a simple serial protocol. This was actually the first time I had written anything non-trivial in Python, and my first time developing a (admittedly simple) GUI program for the desktop. I chose Python because of its inclusion of the [Tkinter](https://wiki.python.org/moin/TkInter) library, which gives you bindings for the [Tk GUI toolkit](https://en.wikipedia.org/wiki/Tk_(software)). This seemed like the simplest way to get a basic desktop application going.

I've built a couple of these and given them out to friends to try out. If people find them useful I may continue to develop this project, but at the moment I'm very happy with how it has turned out!