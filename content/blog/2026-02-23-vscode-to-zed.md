---
title: Blogging away from VS Code to Zed
date: '2026-02-23T15:52:48-05:00'
subtitle: I'd like less, actually.
summary: I spend all day at work staring at Visual Studio Code which means I’m sick of it. When I’m on my personal machine working on my fun little blog I want that experience to be different. I wanted something lightweight, clean, and not a Microsoft product. Enter Zed.
tags: [tech]
---

I spend all day at work staring at Visual Studio Code, and in that context I think it’s a great IDE. Tons of extensions, powerful command palette, and a source control interface that makes that part of the job pretty idiot-proof. I know it well and coworkers come to me with questions, and I [curate](https://dev.to/askrishnapravin/recommend-vs-code-extensions-to-your-future-teammates-4gkb) our project’s extensions to keep everyone on the same page. I am blessed to be a technical writer who isn’t shackled to MadCap Flare or the devil’s taint that is Microsoft Word. (If someone told me to write documentation in Google Docs I would become violent.)

Which all means I’m sick of it, and when I’m on my personal machine working on my fun little blog I want that experience to be different. I wanted something lightweight, clean, and not a Microsoft product.

- I want a tightly integrated terminal, so stalwart Sublime Text was out.
- I like minimalism in my software, so maximalist Nova wasn’t gonna be it.
- JetBrains software gives me flashbacks to CS 101, so no thank you.
- I’m not here to become a Vim brainiac, I want to blog. The less friction the better.

<figure>
<img src="/images/blog/hector-hammond-green-lantern-movie.webp" alt="Just learn NeoVim">
<figcaption>"Just learn NeoVim"</figcaption>
</figure>

After admittedly not a lot of exploration I’ve been enjoying [Zed](https://zed.dev/), made by previous developers of Atom and Electron. (Blessedly, Zed is not an electron app – it’s written in Rust to be native to each OS.) Their [about](https://zed.dev/about) page sold me on the editor being “hyper-responsive” and something that “should disappear”, and that’s been my experience.

My workload is super light – I write Markdown, run Hugo to proof it, and commit to GitHub to publish – and Zed gets out of the way while providing  enough of what I need. (The most used tool in any IDE for me is “Copy relative path”, that’s the level we’re talking here.) The Zed team ships updates so often – sometimes multiple times a day – that helpful things have been added in between blog posts: the other day they added a “open in default app” context action for files, something that you need an extension to do in VS Code.

Otherwise, it gets out of the way so effectively that I’m struggling to think of other features to highlight. Similarly to my beloved iA Writer, it’s well-made software that facilitates me doing things without being showy.

<figure>
<img src="/images/blog/2026-02-23-zed-screenshot.png" alt="My Zed screenshot">
<figcaption>My Zed layout using B612 Mono and Dracula</figcaption>
</figure>

(Oh, here’s a tiny one: I like that its source control panel defaults a perfectly good commit name so I don’t even have to bother trying to write one when I’ve updated a single file. Silly but it helps!)

It’s true that Zed includes multiple features for generative AI and LLMs, but unlike VS Code there are practical and philosophical differences that make Zed more palatable to me. Firstly, in the headline for the editor: “Zed is a minimal code editor crafted for speed and **collaboration** with humans and AI.” [Emphasis mine.] Collaboration is the *choice* to work together on something, and Zed has not once tried to force or encourage me to use AI. I turned off the panel for agents and never created an account so the LLM-powered editing predictions can’t be enabled at all. Meanwhile VS Code features GitHub CoPilot prominently in the UI and harangues users to “Finish Setup” to get access to CoPilot like it’s a prerequisite.

Zed is fast and pleasantly simple, I recommend it! However, that recommendation is provisional – there *is* a lot of AI-centered language on the website, and that predilection (which the developers probably feel is mandatory in the current code environment) could turn sour at any moment. Zed Industries points to [subscriptions](https://zed.dev/pricing) as their primary revenue source, which isn’t a sure thing either. I almost wish it was a one-time purchase, even though I hypocritically was weighing paid options lower in my searching.

Better than Microsoft, though. It’s a low bar but it’s worth repeating. Next I should look into moving away from GitHub and GitHub Pages, whose firm free grasp has held onto my personal website for nine years.
