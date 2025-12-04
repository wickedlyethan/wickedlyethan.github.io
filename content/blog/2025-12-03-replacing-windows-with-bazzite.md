---
title: 'Replacing my gaming PC OS with Bazzite: Field notes from Linux'
date: '2025-12-03T22:10:44-05:00'
subtitle: 
summary: I recently Ship of Theseus’d my gaming desktop – which blissfully hasn’t been my primary computer for a long time – into a Micro ATX case and installed the Linux distribution Bazzite as the only OS on the machine. The process has not been smooth. What follows are my field notes from switching my gaming desktop from Windows to Linux, from the deliberately naive viewpoint of “why is this like this??”

---

![I'm the one in the middle](/images/blog/Laughing_Wolves.jpg)

## A simple, painful premise

I recently Ship of Theseus’d my gaming desktop – which blissfully hasn’t been my primary computer for a long time – into a Micro ATX case and installed [Bazzite](https://bazzite.gg) as the only OS on the machine[^1].

I want no more Windows, no apps that aren’t for gaming, and for it all to be easy enough that I can plug this system into the TV and play. We’ve had [moments of brilliance]({{<relref "notes/2025/2025-12-02.md">}}), but the process has not been smooth.

What follows are my field notes from switching my gaming desktop from Windows to Linux, from the deliberately naive viewpoint of “why is this like this??”, as if I was a normal user trying to use my computer normally[^2].

This one is definitely a "living" post.

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
  - Next I need to “Download and install the .rpm package”. That text is hyperlinked, but does not go to documentation on how to do that; it starts the download of said .rpm package. What the fuck is an RPM package? When I double-click it in the file manager it opens like an archive. What the hell?
  - I start searching the internet and find out that RPM packages *are* archives and need to be installed with specific software, usually the `rpm` terminal command. I was trying to avoid the terminal at all costs, but ok here we go.
  - It doesn’t work. This particular RPM package doesn’t like the regular `rpm` command and gives me an error. The internet tells me to use the command `rpm-ostree -ivh <package>` instead. Disobeying one of the first rules of modern computing – don’t run random commands you see on the internet – I run this command.
  - It works, but it prompts me to reboot my computer to run the 1Password app. Wtf.
  - That works. I reboot and 1Password works like the familiar macOS app. That wasn’t fun.
- Now that I have internet, I have hundreds of gigabytes of games to download. Having cracked Pandora’s Box of the terminal, I figure I’ll be clever and set up a bunch of games to download over night and use `sudo shutdown` to schedule the machine to shutdown at 3 AM.
  - Denied. Downloading games, utilizing 90% of the available CPU, does not count as activity, so Bazzite went to sleep 15 minutes after I walked away, then shut down at 3 AM.
  - There’s no equivalent to macOS’ superlative `caffeinate` command on Fedora-based distros, so I change the power settings to never, ever go to sleep and do the same thing the next night.
  - Success! I’ve installed 7 modern video games at 450 GB total. Shameful.

## Playing games

- Every time I boot any game up I have to “process Vulkan shaders”. I am aware, as a Steam Deck owner, that Valve has done complicated and important work to make shader compilation less arduous to improve compatibility. I **hate** that I know what shader compilation is. I hate that in a world of poorly-optimized Unreal Engine 5 games, *everyone* has to know what shader compilation is.
  - If I let Steam sit and compile shaders, it takes 30+ minutes to open a game, every time. If I skip this step, the internet tells me I’ll have worse performance, and I do notice some stuttering in places.
  - I can’t find a way to trigger the compilation step of all the shaders for all the games manually, but I find out Steam has an option to compile shaders “in the background”. This utilizes 30% of my CPU. I set the computer to compile shaders overnight using this option and schedule another 3 AM shutdown.
  - Who knows what it was doing, but it didn’t finish all those shaders. The next time I boot up it goes right back to merrily compiling shaders indefinitely. What the fuck.
  - I later fix this problem by switching the Proton protocol version in the Steam settings from “experimental” (why is this the default?) to version 9. I don’t know what this means or what the differences are, and stumbled upon this setting. Thank goodness I know what Proton even is. Steam no longer asks to process shaders, but now I get shader compilation stutter in my games and I have to brute force through them.
- After some pretty excellent *Uncharted 4* (despite its claims that shaders aren’t fully compiled), I want to play *Overwatch 2*, one of my favorite games and my default social game to hang out and play with friends. [ProtonDB](https://www.protondb.com/app/2357570), which I know about from making sure stuff works for my Steam Deck, lists the game as “Gold”, so it should be good to go, right?
  - Wrong. In the middle of a match my entire computer crashes.  *Overwatch 2* has known memory leak issues (not mentioned on ProtonDB), and running the Steam performance monitor while playing shows the game using 14 GB of RAM after two matches before crashing the entire system again.
  - I haven’t fixed this one yet. Some posts on the internet suggest it’s a Proton issue, a Blizzard issue, or an NVIDIA issue.
  - For now I’ll play *Overwatch 2*, the main game I play for the most hours a week, via GeForce Now on my Macbook Air. Speaking of which:
- There is a native GeForce Now app for the Steam Deck, and it’s great. But there’s no native GeForce Now app for Linux otherwise, and using GeForce Now in a web browser gives you far less than what you pay for. So, I’ll run it on my Macbook Air instead.

[^1]: To be clear, I have years of Linux experience and run multiple virtual machines every day on my homelab. I broke my first family computer by erasing the Windows partition to install Ubuntu when I was eleven years old. I hate that I feel I have to provide bona-fides, but talking about Linux at length both lacks nuance *and* is overly complicated, leading to crusader-like conflations and idiotic circular logic. Anyways, back to the post.

[^2]: I won't write my whole manifesto about this, but tl;dr Linux needs to be held to the same standards as any CONSUMER piece of software. Great UI, thoughtful UX, legibile documentation, golden paths, affordances, et-fucking-cetera. The fractured, pretentious landscape doesn't help, but I'm going to treat this experiment like I bought this thing premade from fucking Best Buy. Pretending otherwise is a disservice to everyone.