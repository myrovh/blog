---
title: 'My home server died'
description:
  'My home server died. Just as things were starting to get interesting.'
---

My home server died. Just as things were starting to get interesting too. 😭

<!-- excerpt -->

All right I've been putting off writing this for too long so I'll just hash this
out as quick as possible.

My home server died after I replaced the wireless card. Not sure if the wireless
card was the cause of the fault but after installing it the motherboard didn't
POST and just constantly rebooted. Over the next few evenings I tried to narrow
down the fault. Eventually I figured out that the three of the ram sticks (DDR 3
non EEC) had died and caused the failure to POST so if I used only the one
remaining good stick i could finally get into the motherboard BIOS.

![motherboard taken out of the case](/images/server_surgery.jpg 'RIP CTOGGHA the first')

Here's a photo of the early stages of trying to figure out was wrong. Later I
got rid of the case altogether and just had the motherboard sitting on a box.

Now the next issue. The bios would no longer boot my Arch Linux install. I
needed to confirm the drives were still okay so I booted a Ubuntu live disk and
confirmed that all the drives were still showing up in `lsblk`. So the drives
were fine but something had gone wrong with the bios detecting grub. This was
resolved with a quick reinstall of grub using the arch live disk.

- Mount the root partition onto `/mnt` and efi partition onto `/mnt/boot`
- `arch-chroot /mnt`
- `grub-install --target=i386-pc /dev/sdX`
- `grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB`
- `grub-mkconfig -o /boot/grub/grub.cfg`
- confirm the reinstall worked with `efibootmgr -v`

> I'm not really that clear on how UEFI works maybe doing a bios reset (when
> trying to figure out what was wrong with the board) cleared whatever the UEFI
> was using to remember what it was booting from? Something to look into in the
> future.

From there is was just a matter of changing the IP reservation on the router to
point to the new mac address and everything was back up and running. Except with
only 4GB of ram.

![monitorix log](/images/ram.png)

Here is a chart from monitorIX showing ram usage. The usage history from before
the incident has been chopped off by the change in total ram. All in all the
debugging and boot fixing took place over almost 3 weeks but probably only
equals a few hours total work.

Even though I did eventually fix up the issues and get the server running again
it does now provide me with a excuse to build a real home server instead of a
scrapheap machine built out of leftover parts from several old computers. I've
briefly enjoyed the benefits of having my own personal server and I don't want
to go back. It's fortunate even that this experiment was interrupted now before
I managed to get a large number of services running on it. If the server had
failed a few months further down the track it would have been a serious
inconvenience rather than an opportunity to upgrade.

I've actually already ordered the parts for the new system and a few bits have
already arrived but I'll write about the process of picking those parts and what
I plan for them later.
