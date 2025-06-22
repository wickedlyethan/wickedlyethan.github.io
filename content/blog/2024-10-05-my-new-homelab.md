---
title: 'My New Homelab'
date: 2024-10-05
summary: I recently upgraded my homelab from an over-exerted Raspberry Pi 4 to a Lenovo M900 mini PC, and it went shockingly smoothly. I've learned enough over the years of tinkering that it even felt like I knew what I was doing, which was exciting in and of itself! Now everything is running faster and better and I'm stoked about it.
---
I recently upgraded my homelab from an over-exerted Raspberry Pi 4 to a Lenovo M900 mini PC, and it went shockingly smoothly. I've learned enough over the years of tinkering that it even felt like I knew what I was doing, which was exciting in and of itself! Now everything is running faster and better and I'm stoked about it.

## The itty-bitty homelab

For the past four years my homelab, such as it was, ran off a Raspberry Pi 4 with 2 GB of RAM, a 1.5 GHz quad-core processor, and a 16 GB microSD card. Its original purpose was to stream music from my NAS to our nicest set of speakers at the front of the apartment using first [Volumio](https://volumio.com/), then [Moode](https://moodeaudio.org/); audio is sent bit-for-bit out of a [HiFiBerry Digi2 Pro](https://www.hifiberry.com/shop/boards/hifiberry-digi2-pro/) HAT module with a S/PDIF output to our A/V receiver, which I trusted enough with digital to analog conversion.

This worked fine, but not great! Over the years the Pi corrupted microSD cards, randomly rebooted, lost connection (even when connected via ethernet via a powerline adapter), and wasn't speedy. When it did work it was wonderful to have my music collection on the nicest speakers I own in great quality. When it failed it was during a song I love, while trying to relax, and would become unreachable for ten minutes at least.

It might have been during the pandemic that after a brief stint of wrestling with Lifx's terrible software (most smart home software is bad) I went down the rabbit hole of [Home Assistant](https://www.home-assistant.io/). There's not a lot of reasons to engage with any smart home hardware unless it can be controlled through Home Assistant because it's much better, faster, and more customizable than any app I've seen.

So, I learned Docker and ran that on top of the music streaming OS on the Pi, got Home Assistant up and running, and then messed with Pi-Hole and then Mealie and now I needed a dashboard to see it all and uh oh. By this time the Pi's RAM was maxed out and I had missed the fundamentals like keeping containers up to date or using network shares. Not great! The whole system was fragile, temperamental, and would misbehave at the worst times, like trying to turn off the bedroom lights to go to bed.

The last straw was, ironically, a piece of software that worked perfectly the first time: [Navidrome](https://www.navidrome.org/), the simplest piece of self-hosted software I've ever used. In a few clicks (after disabling other containers to free up resources) I was able to stream music from my NAS to my locked-down work laptop – an integral part of me getting any kind of work done – and it was so easy it drove me a bit nuts. What other software had I not been trying because the Pi was maxed out and fussy?

## Small, but much mightier

I love finding stuff on Craigslist. I hesitate to say it's a hobby unto itself, but I think it is. I've grabbed some of my favorite hardware and hobby essentials through hunting for deals – my Olympus PL8, my Synology NAS, my Steam Deck! I've had nothing but positive experiences, and while acknowledging it's easier for me, a white dude, to meet up with strangers, following a few patterns can make it pretty easy and safe to get huge savings on tech.

I hit up a guy named Steve OfCraigslist who had multiple Lenovo M900 tiny PCs and paid $75 for a 6th-gen i5, 8 GB of RAM, a 256 GB SSD, and it's the size of a stack of CDs cases. Since then I’ve upgraded the RAM to 16 GB ($30) and installed a bunch of containers, LXCs, and VMs running services large and small.

## Whatcha got there?

Here’s what’s currently running on my homelab, in order of importance:

- Proxmox VE as the bare-metal OS
- Home Assistant OS as a [VM](https://tteck.github.io/Proxmox/#home-assistant-os-vm)
- AdGuard Home as an [LXC](https://tteck.github.io/Proxmox/#adguard-home-lxc) for full-network ad-blocking
- A Debian 12.7 VM running Docker and Portainer, everything deployed as a stack using Docker-compose
  - Navidrome for streaming music via the browser
  - Linkding as a Pinboard alternative
  - MeTube for archiving YouTube videos
  - Whoogle for more private/simpler searches
  - Libre Speedtest for stripped-down speed tests
- Heimdall as an LXC for a dashboard
- An Ubuntu 24.04 VM for VPN-related activities

## How’s it going?

*Great*, thanks for asking! The new homelab is incredibly solid and much smoother than its predecessor. Having much, much more power is beneficial, who knew! I’ve got everything I can imagine wanting up and running for now, and the system idles at about 1% CPU usage and about 5 GB of RAM, so there’s plenty of headroom.

The problem is now I have to learn more basics I skipped, such as backups or how LXCs work. I admit to using [these helper scripts](https://tteck.github.io/Proxmox/) from TTeck and rolling with it, but I don’t love the idea of critical home infrastructure running on things I don’t fully understand.

The best part about the new homelab is I barely think about it now. It runs silently in the corner, keeping the place running without throwing tantrums like the Pi did, blocking ads and serving music and automating our lights to turn on with the sunrise. Meaningful quality of life updates through open source software running on cheap, efficient hardware – what can be better?
