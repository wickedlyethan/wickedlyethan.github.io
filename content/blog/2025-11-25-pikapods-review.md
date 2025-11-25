---
title: 'PikaPods review: Self-hosting without the headache'
date: '2025-11-25T10:14:15-05:00'
subtitle: If you want to use great open source apps but can’t be arsed to become a hobbyist system administrator, this is a great place to start.
summary: I love my humble homelab, but one thing I knew I was never going to do was expose the homelab to the outside internet. I’ve thought for a long time about setting up a virtual private server (VPS), but renting a VPS is DIY but on someone else’s silicon, and that means all the fussing. Enter [PikaPods](https://www.pikapods.com/), an open source app hosting service based in Malta that manages containerized applications with a super easy interface and cheap prices. Instead of renting a virtual machine, I’m asking for space on someone’s Docker instance and they take care of the rest.
---

I love my humble [homelab]({{<relref "/blog/2024-10-05-my-new-homelab.md">}}) and host a few services that I would consider essential: [Home Assistant](https://www.home-assistant.io/), [AdGuard](https://adguard.com/en/welcome.html), [Navidrome](https://www.navidrome.org/), and [Linkding](https://linkding.link/) are crucial digital infrastructure that make my life better.

But, one thing I knew I was never going to do was expose the homelab to the outside internet, making these and other services available anywhere. I was never comfortable with the idea and know the limits of my knowledge well enough that I wouldn’t be able to do it “right”; it would cause more anxiety than it would provide benefit.

Instead, I’ve thought for a long time about setting up a virtual private server (VPS), like a DigitalOcean droplet or similar, to host a few services that would be useful to be able to get to anywhere. However, renting a VPS is DIY but on someone else’s silicon, and that means all the fussing and experimentation of a homelab but with more round-trip time, so I kept putting the project off.

Enter [PikaPods](https://www.pikapods.com/), an open source app hosting service based in Malta that manages containerized applications with a super easy interface and cheap prices. Instead of renting a virtual machine, I’m asking for space on someone’s Docker instance and they take care of the rest.

Two of my favorite apps I use are [Inoreader](https://www.inoreader.com/) for RSS and [Instapaper](https://www.instapaper.com/) for read-it-later. I think they both are well-made, great pieces of software that are worth paying for! But, it’s true that it’s a time of \~\~economic uncertainty\~\~ and cutting down on expenses where you can is always prudent, and they cost a fair bit of money to get the features you want – $90 and $60 a year, respectively. (And you’re getting a lot of other features you might not want, making the app more complicated or overbuilt for my use.)

Yes, you can use both for free, but I’m of a split mind:

1) These developers deserve money if I’m going to use their product
2) If I’m not going to pay for it, I shouldn’t be surprised when functionality changes or the service gets worse. I, as a free user, am part of the problem!

Comparatively, PikaPods lists two similar apps, [Miniflux](https://miniflux.app/) for RSS and [Wallabag](https://wallabag.org/) for read-it-later, starting at less than $2/month each. To use both – which I am – is 4.5x cheaper than paying for their premium counterparts, and there are other benefits:

- I control the software itself and can configure it how I want
- I can use my own domain
- I can configure backups of the entire app itself and/or use apps that believe in full data portability
- Because these apps are open source, I can test them out on my homelab before I commit to spending to have them hosted

I did exactly that with Miniflux, which I’ve found to a wonderfully minimalist RSS reader with nothing I don’t want and an important feature I didn’t want to pay a ton for: feed filtering. I can get my tech news but filter out "Elon Musk" and "Sora" with a dash of RegEx and I’m much happier for it.

PikaPods even does revenue sharing with the developers of the apps “where possible”, and I’m free to donate to the devs separately when I want to.

Lastly, and I think this is one of the bigger ideas around a service like PikaPods: If PikaPods goes away, my app and data don’t have to. If the service crashes and burns tomorrow, I can fallback to hosting my own Miniflux instance on my homelab and learn to tunnel it to the wider web eventually, export my feed manifest and use it on another app (hell I can go right back to Inoreader!), or find another service with a similar model. I’m not locked in. I’m deploying my instance of an app, not paying to be allowed to use an app.

I love this paradigm and am enjoying my PikaPods apps a lot. I haven’t even paid yet – the service comes with $5 of service credit, which is multiple months for what I’m using it for! If you want to use great open source apps but can’t be arsed to become a hobbyist system administrator, I recommend checking out PikaPods.