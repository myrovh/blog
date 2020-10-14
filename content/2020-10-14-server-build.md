---
title: 'Building the new server'
description: "This post is months late. Server has been running well for months now"
---

Better late than never. I did receive all the server parts I ordered and they all worked great except for one little thing that nearly ruined everything...

<!-- excerpt -->

I kinda fell of the wagon of keeping this blog maintained for a few months but I'm back on track now! For posterity I'll write down how the build went and the one tiny hardware issue that caused me weeks of headaches.

![parts testing](/images/testing.jpg 'Testing all the parts for the first time')

Most of the parts I needed arrived around the same time and once I had them all I got started with making sure that each part was working as expected.


With the major parts validated to boot I then put everything together in the case. I'm pretty happy with the case itself. It looks nice from the front and the internal layout is easy to work with thanks to the slide out drive caddys. It is a bit cramped considering its about a mid tower size case fitting into a 4U height space. The SATA cables coming out of the drive at the bottom of the middle stack has no more and 1mm of clearance with the headsink. I don't that that is a huge deal though if I want to clean it up a but I can get a right angled cable or one of those ultra thin SATA cables

![assembly](/images/build.jpg 'putting everything in the case')

As for the heatsinks when I originally ordered them I wasn't quite sure if they would be up to the job. After a bit of testing I found they are are capable of keeping the cpus a reasonable temps when they are under full load so long as they are cooled with fans. I realise now that while these low profile server heatsinks are called 'passive' they are ment to run in server racks with large volumes of air being blown through them by loud industrial fans. Still putting some fans directly on top of them works just as well while being whisper quiet and pretty low profile. Even accounting for the high cost of the Noctua fans they still worked out to be pretty great value considering I picked the last two heatsinks in stock at Scorptech for a discount.

With everything installed and a few stress tests run from a live usb I was ready to install Proxmox. This is where I ran into the showstopping issue I alluded to in the intro. I had the proxmox installer on a usb key and it would load fine. Once booted it would detect all the installed disks and I used the super easy install wizard to install proxmox to the ssd. Everything seemed to go fine, the installer had no issues writing to the disk and reported a successful install. Alright job done time to reboot! Except the UEFI would not detect the disk and so couldn't boot Proxmox.

I immediatly blamed the motherboard bios. It was old after all and early model UEFI firmwares were supposed to be buggy. I don't really want to relive the hours spent researching bootloaders, reinstalling proxmox, flashing different linux images to usb keys, trying to use `efibootmgr` to manually insert the missing boot entry, trying to boot via `rEFInd` and so on.

None of those things worked and they never would have worked because the issue wasn't with any of the software. It was the SATA cable attached to the ssd! Everything for this server is brought new or refurbished except for the HDDs and the SATA cables. Those SATA cables you see in in the photo are probably at least a decade old at this point and the yellow one plugged into the primary ssd decided to fail in the most difficult to diagnose way possible. I think what happened is some defect in the old cable caused issues when software attempted to access the attached device and while operating systems seemed willing to attempt to connect the device a few times until they succeded the UEFI was not and probably dropped the disc on the first issue it encountered thus it was impossible for me to get the UEFI to boot the disk. 

The solution was easy. I found a much newer unopened SATA cable and used that instead. Problem solved. The fact that the disk would work fine whever I accessed it from any operating system stopped me from realising that the fault was in hardware. Now that its been so long since I solved this I don't even remember what lead me to realise that the cable was the issue.

A little while after I had all these issues solved that final two big parts showed up. The server rack and the UPS. With everything assembled together I had a really nice looking setup that makes almost no noise and has room for expansion.

![installed in rack](/images/final.jpg 'rack, server and UPS together at last')