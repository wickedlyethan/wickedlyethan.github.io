---
title: "Save your wife's saves from Xbox Game Pass"
date: '2026-04-21T17:32:05-04:00'
subtitle: Defeating platform lock-in with spite and open-source software
summary: "Emily has fallen in love with [*Kingdom Come: Deliverance II*](https://store.steampowered.com/app/1771300/Kingdom_Come_Deliverance_II/) (2025), Warhorse Studios' medieval mishap epic, and its cast of big dumb boys, a mutt named Mutt and [returning cast member](https://kingdom-come-deliverance.fandom.com/wiki/Pebbles) Pebbles the horse. KCD2 wasn't on sale when she got the whim, so I recommended financial prudence via trying it out on Xbox Game Pass first. This was *in theory* a great idea – Game Pass provides a lot of value for what it is, and hell it just [dropped its price](https://gameinformer.com/2026/04/21/xbox-drops-prices-for-game-pass-ultimate-and-pc-game-pass-but-new-call-of-duty-games), so as long as you're not a COD bro it continues to be a pretty excellent consumer value – but there's no great thing that Microsoft can't fuck up."
tags: [tech, games]
---

Emily has fallen in love with [*Kingdom Come: Deliverance II*](https://store.steampowered.com/app/1771300/Kingdom_Come_Deliverance_II/) (2025), Warhorse Studios' medieval mishap epic, and its cast of big dumb boys, a mutt named Mutt and [returning cast member](https://kingdom-come-deliverance.fandom.com/wiki/Pebbles) Pebbles the horse. What games she gets into remains a mystery to me – the prior most recent obsession was [*Supermarket Simulator*](https://store.steampowered.com/app/2670630/Supermarket_Simulator/) (2025), which struck me as the most Eurojank simulator a game can be, but she was ensnared by the petty power she was granted. I should have learned after *Baldur's Gate 3* (2023!) taught us all that millions of people will learn a hardcore tactics game if they can smooch someone at the end of an encounter. Vibes are supreme on that side of the home office, and she'll gladly put a game's sinews in her teeth if it means she can hang out with lovable oafs and be somewhere very *else* for a spell.

KCD2 wasn't on sale when she got the whim, so I recommended financial prudence via trying it out on Xbox Game Pass first. This was *in theory* a great idea – Game Pass provides a lot of value for what it is, and hell it just [dropped its price](https://gameinformer.com/2026/04/21/xbox-drops-prices-for-game-pass-ultimate-and-pc-game-pass-but-new-call-of-duty-games), so as long as you're not a COD bro it continues to be a pretty excellent consumer value – but there's no great thing that Microsoft can't fuck up.

Save files are sacred in an age where games can take [multiple days](https://howlongtobeat.com/) of your one precious life to see the end credits, which [most players don't](https://www.ign.com/articles/2014/03/17/gdc-most-players-donat-finish-games). Microslop has decided to take your Game Pass saves hostage as a form of lock in, so they're stored in an insane hierarchy of hashed and containerized pseudo-files. They're not encrypted as far as I can tell, but they are utterly fucked up.

When KCD2 went on sale on Steam for half off and I pitched a world where Emily could play on the TV or even on the Steam Deck, where I myself would access to it because of library sharing, I figured there had to be a way to rescue her two dozen hours in Bohemia. Luckily, a kind soul out there made an entire app to do that: [GPSaveConverter](https://github.com/Fr33dan/GPSaveConverter). It wasn't super easy but we got the job done, so I wanted to write how I did it.

To export your Xbox Game Pass saves using GPSaveConverter:

1) Backup your saves in case.
2) Download the [latest release](https://github.com/Fr33dan/GPSaveConverter/releases) of GPSaveConverter. That's right, it's a bare `.exe` like the good old days.
3) Open it up and let it try to find file translations based on online sources.
4) Select *Kingdom Come: Deliverance II* in the "Potential Xbox packages" panel and weep because you need to make your own file translations.
5) Select **View > Show File Translations**.
6) In the File Translations section, create a file translation per type of save file.
   - File translations are RegEx formulas, and with the help the app's [wiki](https://github.com/Fr33dan/GPSaveConverter/wiki/File-Translations) and [this blessed YouTube video](https://youtu.be/EdCjEr4-jfc?si=TzyL3bSBpTNiSB36) it becomes pretty simple if you know some RegEx.
   - KCD2 has multiple types of saves: "autosave", "permanent", and "save", all with a triple-digit number on the end.
   - Therefore I created a file translation per type of save with `${SaveNumber}` as a variable, then defined that variable as `[0-9]+` in the **Named Regex Group** section of the file translation.

Here's an example file translation for KCD2's autosaves:

- Non-Xbox file name: `playline0/autosave${SaveNumber}.whs`
- Xbox Blob ID: `autosave${SaveNumber}.whs`
- Container Name 1: `saves/playline0`
- Named Regex Group 0: `(?<SaveNumber>[0-9]+)`

Highlight the save files you want to export in the **Xbox Save Files** panel, then click the button with two downwards carets to "Move all files to the non-Xbox saves".

And it worked! I'm buying the dev a coffee and posting yet another "fuck Microsoft" blog post because, and this is true, I even suffered Windows randomly restarting to install updates in the middle of this process. I wish I was making it up.