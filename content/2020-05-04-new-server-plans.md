---
title: 'Choosing parts for a new server'
description:
  "Now that I've decided to replace my old machine I've got to work out what
  parts I need"
---

So I've got to figure out what parts I need for a reasonably fast server without
going overboard on cost.

<!-- excerpt -->

This all happened weeks ago but I'm going to write down what I decided to I can
come back later and figure out how correct my decisions ended up.

I want to build a proper home server but I can't really justify spending several
thousand on a modern server like an Epyc. As cool as that would be I don't think
I could really justify the price.

Threadrippers are out as well as even a 1950X is still \$600 dollars. As well as
expensive motherboards and cpus the DDR4 EEC RAM is also costly and a decent
server that will be running virtual machines will probably need a reasonable
amount. So after dreaming about about my own personal Epyc server for awhile I
talked myself out of it.

Fortunately by way of a blog article on linuxserver.io I found out about
[serverbuilds.net](https://serverbuilds.net/) a site that writes guides about
picking out second hard obsolete server parts for use as affordable home
servers.

I followed the Anniversary 2.0 guide a fantastic list of available parts and
recommendations for building a server using Intel's LGA2011 socket. With the
possible parts narrowed down it became an easy if time consuming process to
figure out parts.

I know I want to eventually put the server in a server rack along with other
stuff like a UPS, router, patch panel etc. So I wanted a server rack case that
looked nice. I pretty quickly settled on a SilverStone 4U case. This did have
some implications that I only realised hours into researching motherboards.

The SilverStone case is much shorter than a typical server rackmount case so it
only fits ATX motherboards. Most of the dual socket boards are E-ATX. So this
narrowed down my choices to a handful fo Supermicro boards.

I decided on a pair of E5-2650 v2's for the cpu's. They seemed like the best
balance of physical core count, clock speed and price.

I got two 32GB sticks of EEC ram, heatsinks, a bigger ssd to go along with the
HDD's I already had from my old machine and a power supply with 2 EPS
connectors.

I brought the CPU's, motherboard and ram through Ebay but the rest I was able to
source from Australian retailers and the motherboard was the only part that I
couldn't get from an Australian seller (the board shipped from China). So all in
all shipping costs were pretty reasonable.

The Final parts list:

- Motherboard:
  [X9DRL-iF](https://www.supermicro.com/products/motherboard/Xeon/C600/X9DRL-iF.cfm)
- CPU: E5-2650v2 x2
- RAM: 32GB M386B4G70BM0-YK0 Samsung
  - The ram is something I'm unsure about. It's DDR3 ECC so it should work fine
    but ram compatibility can be hit and miss. They were a pretty good price for
    the capacity compared to DDR4 but if they don't work it will suck.
- Heatsinks:
  [XE01-2011](https://www.silverstonetek.com/product.php?pid=793&bno=43&tb=22&area=en)
  x2
  - These are passive heatsinks that I'm a little worried won't be able to
    sufficiently cool the cpus but they were on special and are almost 500g of
    copper so if cooling is an issue I can probably hack some way to fix a 80mm
    fan to the top and get a better cooler out of it.
- Case: [RM400](https://www.silverstonetek.com/product.php?pid=821&area=en)
- USB Cable:
  [G11303050-RT](https://www.silverstonetek.com/product.php?pid=388&area=en)
  - The case has usb 3 to I need an adapter to get the front panel usb to work
    with this old motherboard
- PSU:
  [SilverStone Strider Gold S 750W](https://www.silverstonetek.com/product.php?pid=579&area=en)
  - Probably way more watts than I need but I wanted to find something local
    with x2 EPS connectors and this was the cheapest available
- SSD: 1TB Crucial drive
- HDD: 2TB drives from assorted manufactures x5

All in all the cost came to about \$1400 AUD which was a little more than I was
expecting but not more than I was willing to pay. Far cheaper than building a
more current gen system but whether or not it has reasonable performance I'm not
sure. I hope to use this machine to experiment with virtual machines,
kubernetes, ZFS, webpack compiling and run a Minecraft server. If everything
works out of the box I feel like it should be sufficient for those use cases.
