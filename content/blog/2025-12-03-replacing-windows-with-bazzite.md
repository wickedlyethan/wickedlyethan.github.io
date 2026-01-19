---
title: 'Replacing my gaming PC OS with Bazzite: Field notes from Linux'
date: '2025-12-03T22:10:44-05:00'
subtitle: 
summary: I recently Ship of Theseus’d my gaming desktop – which blissfully hasn’t been my primary computer for a long time – into a Micro ATX case and installed the Linux distribution Bazzite as the only OS on the machine. The process hasn't been smooth. What follows are my field notes from switching my gaming desktop from Windows to Linux, from the deliberately naive viewpoint of “why is this like this??”
tags: [tech, homelab]
---

![I'm the one in the middle](/images/blog/Laughing_Wolves.jpg)

## A simple, painful premise

I recently Ship of Theseus’d my gaming desktop – which blissfully hasn’t been my primary computer for a long time – into a Micro ATX case and installed [Bazzite](https://bazzite.gg) as the only OS on the machine[^1].

I want no more Windows, no apps that aren’t for gaming, and for it all to be easy enough that I can plug this system into the TV and play. We’ve had [moments of brilliance]({{<relref "notes/2025/2025-12-02.md">}}), but the process hasn't been smooth.

What follows are my field notes from switching my gaming desktop from Windows to Linux, from the deliberately naive viewpoint of “why is this like this??”, as if I was a normal user trying to use my computer normally[^2] [^3].

Latest update: 2025-12-13.

## Installation

- The Bazzite installer is one of the better Linux installation environments I’ve experienced (evil eye to Debian, regardless of my love for you), but it’s still confusing. It’s not sequential, instead dumping the user onto a main screen with many options taken care of for you, but you can’t proceed until you figure out to select a storage device to format and how to format it. Too complicated, make it simpler.
- During installation I had to pick between KDE and GNOME. What if I have no idea what the hell those are? KDE is marked as default, why not do that *by default*?
- Upon first boot there was a lot of gobbledygook onscreen and then I was shown a hideous GRUB prompt that made no sense to me. I hit Enter and hoped for the best. Get rid of this shit.

## The OS

- Obviously there's no onboarding app or anything, nothing to teach the user about transitioning from Windows or what apps they should check out, settings to change, etc. Who could possibly need that?
- KDE Plasma itself is fine but is obsessed with showing you way, way too much one layer under the skin. Right-clicking anywhere reveals tons of unclear, oblique actions and features.
  - For example, behind the “show more” caret of the taskbar there’s an app(?) called "Wayland to X11 Video Bridge”. What is this? Why am I able to see this?
- Why is the app store called "Bazaar" with a price tag as the icon? As far as I can tell I can’t buy apps in this app store, and the price tag feels cheap, like it’s going to try and sell me something.
- When I tried to connect to my Wi-Fi network, I was asked if I wanted to create an “encrypted wallet” in the KDE Wallet app, or if I wanted to “store credentials for all users”. I exited this app I had never heard of and had no idea what it was doing, resulting in a connection of error of “No secrets were provided”. What the fuck does that mean?
  - The fix for this was going into the OS Wi-Fi configuration and selecting “store password for all users (not encrypted)”. What the hell is any of this? Take the password and connect to the Wi-Fi, this is the most basic of tasks.
- To log in to the various launchers for games, I wanted to install 1Password, one of the most popular password managers in the world. This was a nightmare.
  - 1Password has official, native Linux apps. Per their [documentation](https://support.1password.com/install-linux/), I first had to know what my OS “distro” is based on. Luckily I knew that Bazzite is based on Fedora, so I go to that section of the page.
  - Next I need to “Download and install the .rpm package”. That text is hyperlinked, but doesn't go to documentation on how to do that; it starts the download of said .rpm package. What the fuck is an RPM package? When I double-click it in the file manager it opens like an archive. What the hell?
  - I start searching the internet and find out that RPM packages *are* archives and need to be installed with specific software, usually the `rpm` terminal command. I was trying to avoid the terminal at all costs, but ok here we go.
  - It doesn’t work. This particular RPM package doesn’t like the regular `rpm` command and gives me an error. The internet tells me to use the command `rpm-ostree -ivh <package>` instead. Disobeying one of the first rules of modern computing – don’t run random commands you see on the internet – I run this command.
  - It works, but it prompts me to reboot my computer to run the 1Password app. Wtf.
  - That works. I reboot and 1Password works like the familiar macOS app. That wasn’t fun.
- Now that I have internet, I have hundreds of gigabytes of games to download. Having cracked Pandora’s Box of the terminal, I figure I’ll be clever and set up a bunch of games to download over night and use `sudo shutdown` to schedule the machine to shutdown at 3 AM.
  - Denied. Downloading games, utilizing 90% of the available CPU, doesn't count as activity, so Bazzite went to sleep 15 minutes after I walked away, then shut down at 3 AM.
  - There’s no equivalent to macOS’ superlative `caffeinate` command on Fedora-based distros, so I change the power settings to never, ever go to sleep and do the same thing the next night.
  - Success! I’ve installed 7 modern video games at 450 GB total. Shameful.

## Playing games

- Every time I boot any game up I have to “process Vulkan shaders”. I am aware, as a Steam Deck owner, that Valve has done complicated and important work to make shader compilation less arduous to improve compatibility. I **hate** that I know what shader compilation is. I hate that in a world of poorly optimized Unreal Engine 5 games, *everyone* has to know what shader compilation is.
  - If I let Steam sit and compile shaders, it takes 30+ minutes to open a game, every time. If I skip this step, the internet tells me I’ll have worse performance, and I do notice some stuttering in places.
  - I can’t find a way to trigger the compilation step of all the shaders for all the games manually, but I find out Steam has an option to compile shaders “in the background”. This utilizes 30% of my CPU. I set the computer to compile shaders overnight using this option and schedule another 3 AM shutdown.
  - Who knows what it was doing, but it didn’t finish all those shaders. The next time I boot up it goes right back to merrily compiling shaders indefinitely. What the fuck.
  - I later fix this problem by switching the Proton protocol version in the Steam settings from “experimental” (why is this the default?) to version 9. I don’t know what this means or what the differences are, and stumbled upon this setting. Thank goodness I know what Proton even is. Steam no longer asks to process shaders, but now I get shader compilation stutter in my games and I have to brute force through them.
- After some pretty excellent *Uncharted 4* (despite its claims that shaders aren’t fully compiled), I want to play *Overwatch 2*, one of my favorite games and my default social game to hang out and play with friends. [ProtonDB](https://www.protondb.com/app/2357570), which I know about from making sure stuff works for my Steam Deck, lists the game as “Gold”, so it should be good to go, right?
  - Wrong. In the middle of a match my entire computer crashes.  *Overwatch 2* has known memory leak issues (not mentioned on ProtonDB), and running the Steam performance monitor while playing shows the game using 14 GB of RAM after two matches before crashing the entire system again.
  - I haven’t fixed this one yet. Some posts on the internet suggest it’s a Proton issue, a Blizzard issue, or an NVIDIA issue.
  - For now I’ll play *Overwatch 2*, the main game I play for the most hours a week, via GeForce Now on my Macbook Air. Speaking of which:
- There is a native GeForce Now app for the Steam Deck, and it’s great. But there’s no native GeForce Now app for Linux otherwise, and using GeForce Now in a web browser gives you far less than what you pay for. So, I’ll run it on my Macbook Air instead.
- After taking a week off or so I wanted a comfort replay for the holidays and booted up *The Witcher 3: Wild Hunt – Blood and Wine* (2019), with mixed results.
  - The first night everything ran pretty smoothly, but the next day it consistently crashed in menus. This appears to be a known issue with DirectX 12, which the game's special launcher defaults to. To fix this I had to add a parameter to the game's launch options in steam to skip the launcher *and* edit a JSON file to tell the game to default to DirectX 11.
  - Using DirectX 11 gets rid of all the modern graphics technology implemented in the game's "next gen" patch from 2022, and in general made performance much sloppier and choppier, not great for a ten year-old game. Need to look into this.
  - *The Witcher 3* is rated **platinum** on [ProtonDB](https://www.protondb.com/app/292030), showing a flaw in the methodology. The game has the highest possible rating, yet every recent entry includes "tinker steps" like setting a specific Proton version, the aforementioned launcher skipping (which to be fair you'd do on Windows too), fixes for audio syncing and "crackling", etc. One might argue that the need for any tweaks at all should disqualify it from "platinum" status, but the bar is pretty low here.
- After getting my ass whooped by the Bruxa fight in the first hours of *Blood and Wine* (it's been years, I forgot to do any mutagens or character points), I tried to de-stress with [*Lushfoil Photography Sim*](https://store.steampowered.com/app/1749860/Lushfoil_Photography_Sim/), a chill photography game. It crashed on starting the level every time.
  - It's also rated [platinum](https://store.steampowered.com/app/1749860/Lushfoil_Photography_Sim/) on ProtonDB, though with only eight reports. The latest report suggests rolling back your graphics driver (?!) to get the game to work.

## 2026-01 update

Having "fixed" *The Witcher 3* by changing the Proton version to 10.3 instead of experimental – which is a confusing and stupid naming scheme, who would assume that "experimental" should be the default? – we have been playing games and it's been... okay. Things mostly work and work mostly well.

However, I've been reading yet more warnings about the computer parts market going to shit and decided that being frugal about a 7 year old GPU, after buying lots of other new parts, doesn't make a lot of sense. GPUs are disgustingly expensive as objects, but it's not like progress has halted. I picked up a [5060 Ti](https://www.microcenter.com/product/694730/zotac-nvidia-geforce-rtx-5060-ti-twin-edge-dual-fan-16gb-gddr7-pcie-50-graphics-card) and just finished installing it and benchmarking, and the results are promising.

They're *weird* though. The 2070 Super made a lot of noise when the machine booted up, sending the fans to full speed for a few seconds before calming down; that’s no longer the case on the 5060 Ti. The 2070 Super seems to have been running an older driver, because the system immediately picked up a significantly newer one when I checked for updates. Furthermore, benchmarks revealed that I *lost* between ten  percent performance when I switched from Windows, the opposite of the story I was told! Luckily the 5060 Ti now doubles those numbers, but that means on average I’m up 35%, not a full double. That’s less than I’d hoped.

Still, it means my machine is now more power efficient (a 17% difference in TDP), quieter (no fan spin up on boot, anecdotally whisper-like), and can drive the games I want to play at 90+ FPS at 1440p, which is the worst-case scenario for the system as most of the time it’ll be plugged into the TV at 1080p. Is that worth $400, or the $1,100 total I’ve spent on the machine? Only time will tell, but it does remove any and all anxiety about clearing the 60 FPS mark, which is crucial for me because any less and 1) I get a migraine and 2) I wonder what the hell it’s all for at all.

[^1]: To be clear, I have years of Linux experience and run multiple virtual machines every day on my homelab. I broke my first family computer by erasing the Windows partition to install Ubuntu when I was eleven years old. I hate that I feel I have to provide bona-fides, but talking about Linux at length both lacks nuance *and* is overly complicated, leading to crusader-like conflations and idiotic circular logic. Anyways, back to the post.

[^2]: I won't write my whole manifesto about this, but tl;dr Linux needs to be held to the same standards as any CONSUMER piece of software. Great UI, thoughtful UX, legible documentation, golden paths, affordances, et-fucking-cetera. The fractured, pretentious landscape doesn't help, but I'm going to treat this experiment like I bought this thing pre-built from fucking Best Buy. Pretending otherwise is a disservice to everyone.

[^3]: I considered adding a rundown of my computer's specs here, but actually I shouldn't have to; this should all work with most modern hardware. Suffice to say I'm running a brand new, modern AMD CPU architecture and a powerful but somewhat aged NVIDIA GPU. I don't care if Linux works better with AMD cards, NVIDIA is like 90% of the market and one of the points of this build was to not spend $500+ on a brick of silicon.
