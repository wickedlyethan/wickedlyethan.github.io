---
title: "Making Windows 11 Palatable with CTT and Microwin"
date: 2024-09-28
updated:
summary: 
---
I've transitioned to macOS now as my primary OS, so my hulking Windows gaming computer only gets booted for [music library management]({{<ref "2024-08-14.md">}}) and playing multiplayer games. I wanted to nuke Windows yet again and leave it as stripped-down as possible; enter the incredible [Chris Titus Utility and microwin](https://youtu.be/92SM8Az5QVM?si=2_bw-S7QLqY5_K2g), which makes an ISO that installs Windows in about 5 minutes and gets rid of so much Microsoft cruft it's too much to list.

I'm impressed with the tools and plan on using them exclusively for re-deploying Windows, which had become a yearly ritual. The trick is to combine them with the only great piece of software Microsoft has made in years, [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/). As part of their semi-embrace of Linux tools and ethos, the Windows team put out a package manager that is smart, simple, and reliable. Much like Homebrew on macOS it's the better way to install and manage software. [Ninite](https://ninite.com/) is still pretty cool, but bothering with the fiddly checkboxes is a turn-off and feels less hacker-cool.

## Making a Winget manifest

Let's start with making a manifest of what you currently have installed:

```shell
winget export -s "winget" -o "{desination filepath.json}"
```

Unfortunately you can't trim down the manifest any more than that when generating it, but the `winget export` command spits out readable JSON that you can edit to cut out anything you don't want on your next install.

(It occurs to me that this process assumes you already install things via Winget – if you don't, will it find the appropriate packages to match your software from Winget? I'm not sure. Revisit later.)

Because I have multiple drives in my system, I drop this file on a drive that isn't going to get wiped and I'm good to go. You could put this on a NAS or heck, another thumbdrive if it's 2013 and you're drowning in them.

## Sign out of your shit

It's not a security problem if you're wiping your install to re-install, but a friendly reminder to log out of all your shit to make life easier later. I don't like having phantom logins on Firefox, Google Drive, etc., and more importantly I have software that uses good old-fashioned software license keys, make sure to de-activate those before wiping!

## Re-install Windows the cool way

Following Titus' video linked above, making the Microwin image is a process and yields a weirdly large ISO if you choose to inject your drivers, which is a nice time-saving feature and optional but cool. Once you're done though, format that ISO onto a thumbdrive or drop it on a [Ventoy](https://www.ventoy.net/en/index.html) if you're cool.

A crucial step for my particular setup was figuring out which hard drive I wanted to install to, and it can be confusing to tell in the Windows install process (though it's forever better to see "disk 1" than "sda1" or whatever gobbledygook Linux pretends is normal). Use `DISKPART` from an elevated terminal to figure out which Disk is the one you want to install to.

(For example, in my system I have a 256 GB NVME *and* a 256 GB SSD currently installed. The only way to tell them apart definitively was to figure out their disk labels and how much space they truly have – the NVME reports 232 GB, the SSD 239 GB; take notes.)

**It is time.**

Per Titus' video the install did take five minutes or so to install Windows 11 Home, and was, if anything, bottlenecked by the USB drive itself more than anything else. I made a sandwich and came back to find a sparkling new desktop, bereft of bloatware and pack-in advertisements for *Candy Crush*.

## Post-Install Order of Operations

I found this to be the most efficient order of operations after any fresh install of Windows, and I thought I'd list them out for reference.

1. Run the Winutil (aka Chris Titus Tweaks) script from the desktop shortcut provided, go to the Tweaks tab and select "standard" but also disable Copilot and OneDrive. Toggle all the little tweaks in the right side you want, turning off mouse acceleration, sticky keys, that kind of thing. Run the tweaks and once complete, restart.
2. Update Windows and while it's updating go through system settings to customize and fix little things not covered by the tweaks. Restart when updates are ready.
3. Open the Microsoft Store app (🤮)and go to the Downloads section to  update the built-in apps so that Winget is properly configured
4. Open an elevated terminal and use the Winget manifest you made to install the apps you want with `winget import {filepath}`. Watch them all install without your fallible and unnecessary intervention.

And you're pretty much done! In a world where Discord and Steam have better, more user-friendly security features than any bank, getting signed in took seconds and once I told Steam where I keep my video games I was back to playing [*Echo Point Nova*](https://store.steampowered.com/app/1836730/Echo_Point_Nova/) about 30 minutes after starting the re-install process.

What used to be a long afternoon of progress bars and glumly clicking "no thanks" a dozen times to offers for free Office 365 is now a breeze. My fresh install sits at about 70 processes and 1.9 GB of RAM on idle, and only one program starts with the system: Windows Defender.

My Macbook can do all the regular stuff without heating an entire room, and my GeForce Now subscription let's me *actually* play *Cyberpunk 2077*, instead of smiling through the migraine of trying to run that game on hardware that didn't cost two month's salary, so this machine has been reduced to some games, some of the time. I don't imagine myself spending hundreds of dollars on a new GPU ever again, and I don't imagine Windows getting [less shitty](https://www.zdnet.com/article/microsoft-announces-sweeping-changes-to-controversial-recall-feature-for-windows-11-copilot-pcs/) anytime soon, so re-installing a stripped-down, more private Windows for limited use was a fun way to try a new tool and spend enough time to make and eat lunch. Hopefully this guide helps someone!
