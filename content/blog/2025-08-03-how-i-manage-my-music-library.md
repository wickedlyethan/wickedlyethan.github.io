---
title: 'How I Manage My Music Library'
date: '2025-08-03T17:10:11-04:00'
subtitle: 
summary: 
---

Spotify is ubiquitous enough to feel like digital infrastructure, but like most modern infrastructure it’s pretty shit. The quality is bad, the UI is bad, the economics are bad; however, I don’t own my music *because* Spotify is bad; I think Spotify is intolerably bad *because* I’ve never stopped owning my music.

I think of managing a music library as one of my primary computer tasks – something you do on a real computer – and one of the few that isn’t in the browser (same with photos). Since switching to macOS for daily computing it’s one of the few tasks I unfortunately do on Windows, which I don’t love. Since the process and tools have changed plenty over the years, it’s like a sub-hobby. It doesn’t *have* to be this way – you could buy your music from iTunes and be done with it – but I like the ritual, the quality, and the control I have.

## Getting music

Pretty straightforward: I buy it. I buy it on [Bandcamp](https://bandcamp.com/) for cool indies, or [7Digital](https://us.7digital.com/), [Pro Studio Masters](https://www.prostudiomasters.com/), or [HDtracks](https://www.hdtracks.com/) for anything else. These are the kind of websites that have 24-bit 192kHz recordings of Pink Floyd on the front page no matter what year you go there, to get a sense of the vibe. I don’t go that far, but my goal is always to get music that's at least CD quality, so that means FLAC by default, 320 kbps MP3 if I must. This all started with ripping my CDs to FLAC as a kid with [Exact Audio Copy](https://www.exactaudiocopy.de/), so we might as well continue in that tradition.

I’m not a saint or anything – if something can’t be bought or is prohibitively expensive I’ll hop on Soulseek, but I try to avoid it. And I do stream music – I use YouTube Music to listen to tracks people have recommended me or I’m checking out, but I try to adhere to the principle of buying music if I’ve listened to it a certain number of times.

## Tagging and organizing

Editing the tags for your music is both personal and shouldn’t be – ideally tags would be perfect right out of the box, but they rarely are. Because of all the places my music ends up (more on that later) I choose to be extra fussy.

My library manager of choice is [MusicBee](https://www.getmusicbee.com/), which is unfortunately on Windows and best available through, of all things, the Microsoft Store. It’s an excellent piece of software with great features, good design, and no BS. I’d pay for it if they asked me to, and I wish it was on macOS.

First, I import downloaded files into the MusicBee inbox – but not into my library yet – to check the existing tags against MusicBrainz, the default metadata source, making sure to get good cover art if it isn’t there! The main tag I’m concerned with is genre, and I try to have the opposite of dogma about it. Music genres honestly [baffle and irritate](https://everynoise.com/) me; I just need a general sense of what music is going to be like, how loud it’s going to be, that kind of thing. I keep it simple with tags like “Rock”, “Acoustic”, “Electronic”, “Pop”, etc. That might makes people super mad, whatever sue me.

Next I use MusicBee’s volume analyzer to make sure every track has robust [ReplayGain](https://en.wikipedia.org/wiki/ReplayGain) tags. ReplayGain is a great technology not used enough.

Next I use MusicBee’s import and organize tool to standardize file names and directory structure as the music gets imported into my library. A well-organized library makes everything easier, if you’re in a situation where music is being listened to in a lot of places with different tools to manage files. It’s another matter of personal preference, but here’s the pattern I use:

```sh
File Extension/Album Artist/Year – Album Title/Track# Title
```

Here’s what it looks like in practice:

```sh
Music/flac/William Prince/2023 - Stand in the Joy/01 When You Miss Someone.flac
```

I think this is a good system because it reduces the possibility of duplicately named files but doesn’t make individual files have over-long filenames – the directory they’re in gives all the context clues you need.

Now everything gets copied over to my NAS – I use the Windows machine where all this organizing happens as a backup, not a source.

## Listening everywhere

Managing the library is a nice ritual but it’s only worth it if you can get to your music everywhere you want, and that has been a freaking journey. Music isn’t like documents, where once you’re in plain text land you’re good to go anywhere (except iOS because fuck you). You need a file system streamer, renderer, output, etc., and there’s less of a cool hipster movement to make great audio players. Spotify has eaten the world.

This is where this gets pretty inaccessible if you’re like me and have requirements like:

- No duplicating the library. It all needs to get served from the NAS if we’re listening at home.
- Highest quality possible. I’ve got FLAC, I want FLAC wherever I can get it!
- Ideally not garbage UX, but this is more flexible than I’d like it to be.
- I’m happy to pay for good software, but I’m not paying a subscription if I can help it. Sorry, Roon, that means you.

Here’s the crazy stack I’ve cooked up:

- I self-host [Navidrome](https://www.navidrome.org/) on my [homelab]({{< relref "blog/2024-10-05-my-new-homelab.md" >}}) so I can listen to music through the browser on my work and personal Macs. Easily one of my favorite pieces of open source software ever, highly recommend.
- I copy my music to my Android phone using MusicBee’s device syncing. I transcode everything to 320 kbps MP3s to save space on my phone and because Bluetooth headphones and car speakers have no use for the extra quality. On my phone I use:
  - [Poweramp](https://powerampapp.com/) for listening to the music that’s on my phone.
  - [Symfonium](https://symfonium.app/) for streaming music from the NAS to my phone in specific cases, like if I’m using wired headphones while writing or when I’m playing drums.
  - YouTube Music for streaming music. Because I have YouTube Premium, the music app has settings for quality, and their [documentation](https://support.google.com/youtubemusic/answer/9076559?hl=en&co=GENIE.Platform%3DiOS&oco=0#zippy=%2Caudio-quality-on-wi-fi) claims that the “Always High” setting is 256 kbps. Not great, but passable.
- After years of struggling with a Raspberry Pi to stream music from my NAS to the stereo in our living room, I finally got a [Wiim Pro](https://www.wiimhome.com/wiimpro/overview) and it’s been a rock-solid setup. It’s a clunky app, but serving music from the NAS using DLNA *works*, and that’s all that matters. It. Works.

## Conclusion

You don’t need to spend as much time and energy managing your music library as I do if you don’t want to, but you’ll need to do a little bit at least if you’re going to escape the Spotify hegemony. I *recommend* finding a good music library program like MusicBee, buying your music in high quality formats, and making it available in multiple places, but you might find an easier way to do it. Consider doing it, though, because you and the artists you love deserve better.