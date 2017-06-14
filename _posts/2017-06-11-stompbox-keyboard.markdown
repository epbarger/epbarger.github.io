---
layout: post
title:  "Programmable Stompbox Computer Keyboard"
date:   2017-06-11 00:00:00 -0500
categories: Electronics
---

This project is a programmable computer keyboard, with buttons you press with your feet. It is built using parts that are commonly used in guitar stompboxes and other music equipment.

<div class='image-container' style='width:100%;display:inline-block;'>
[![Stompbox Keyboard Pedal](/assets/stomp_long.jpg)](/assets/stomp_long.jpg)
</div>

Each footswitch can have up to four keyboard keys mapped to it. This gives it a lot of flexibility to control various functions in nearly any piece of computer software. I see a lot of uses for it in video/music production, DJing, live music, and computer gaming.

The internals of the pedal are very simple - three SPST momentary switches wired up to a Arduino-compatible Atmega32u4 board. This chip can act as a HID keyboard, letting me send keyboard commands without the need for an external USB chip. 

<div class='image-container' style='width:52%;display:inline-block;'>
[![Keyboard Closeup](/assets/stomp_close.jpg)](/assets/stomp_close.jpg)
</div>
<div class='image-container' style='width:46%;display:inline-block;'>
[![Keyboard Editor](/assets/stomp_editor.png)](/assets/stomp_editor.png)
</div>

I wrote a simple Python GUI application to let me reprogram the keyboard. It connects over a serial port and sends new key configuration with a simple serial protocol. This was actually the first time I had written anything non-trivial in Python, and my first time developing a (admittedly simple) GUI program for the desktop. I chose Python because of its inclusion of the Tkinter library, which gives you bindings for the Tk GUI toolkit. This seemed like the simplest way to get a basic desktop application going.
