---
title: "Oops I Re-Did My Stylesheet Again"
date: 2024-04-09
subtitle: Can't stop, won't stop (but I'm trying desperately to stop)
---
Having no archive and habitually erasing all the evidence anyways, it might not be obvious that I'm the kind of person who redesigns their website every 6 months to a year. I've had a personal website since middle school in one form or another - Blogger, Wordpress, Tumblr, then in college hand-crafted, deeply amateur HTML. We're way past the ship of Theseus at this point, past sports car getting rebuilt in the garage; it's some kind of mania.

The truth is I'm not an amazing coder or web designer, but I'm addicted to the immediate results. The other forms of creativity I engage in – mainly writing – take time and headspace, but web coding is the closest equivalent lately of making with my hands. I used to have to compulsively hammer the keyboard shortcut to refresh, like a monkey before tools; now I use [Hugo](https://gohugo.io/) and it knows how to deliver that drug right to me every time I save.

So yeah, I re-did my website again, not [even a month]({{<ref "/notes/2024/2024-03-17/">}} "2024-03-17") after re-launching the whole dang site to actually start using it. Why? *WHY?*

As I mentioned I don't think I'm that great a designer. Most recently I had been inspired by [Indexhibit](https://indexhibit.org/) without thinking about why. Indexhibit is for artists, visual artists in particular, to show off their work – it's in the name and the structure of the code: there's an "index" and an "exhibit". I'm not a visual artist in the slightest, even though I am trying to take and post more [photos]({{<ref "/photos/">}} "Photos"), so that structure doesn't make sense. I love text, I want to generate a corpus of words in a browser. I don't have a product to sell or a vibe to promote, and my site definitely isn't a resumé. It's part blog, part feedback-less Instagram, part playground. Therefore the Indexhibit structure wasn't working for me, and I had customized it enough to look like I had customized it, but not competently enough to look great.

New mission: *use as little CSS as possible* and delegate as many decisions to the browser as I can. I don't think browsers are perfect, especially as they race to [engorge themselves with useless "AI" features](https://keith.is/posts/souring-on-arc-browser/), but they can be relied upon to render words on a page well – they haven't abdicated that duty yet. Meanwhile the [Gemini protocol](https://geminiquickst.art/) continues to intrigue me as an alternate internet, where it's all messages in bottles instead of industrial dark magic, so I'm taking that ethos to my little static site.

I'm down to 37 lines of CSS before minify-ing at time of writing, with only two classes. Here's the recipe:

1. At the root we set line height and use Jim Fisher's [formula for responsive text size](https://jameshfisher.com/2024/03/12/a-formula-for-responsive-font-size/).
2. The [color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) property isn't perfect, but it takes care of a lot, in particular colors that are high contrast and accessible, adapt for user preference, and come off as tech-y but not try-hard. Unless you're a dark mode user on Safari, in which case hyperlinks become unreadably dark for no reason - we'll get around to fixing that.
3. [Smooth those fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth). What fonts? Use the [system font stack](https://systemfontstack.com/). Again, great designers got paid lots of money, let them do it for you if you don't know better.
4. A couple of lines to set the paradigm to "blog", a.k.a. readable text width, a dash of margin, and overrides to nav styles when needed, so I can use them appropriately but not have unsightly bullets everywhere.
5. Make the title a bit bigger, but no math required: you can just write "xx-large" for the font size and it doesn't do much, but it does enough.

That's it! Like I said, 37 lines of code at time of writing. I ripped my hands off the steering wheel at this point. I used as many HTML5 elements as correctly as I know how and that takes care of a lot of the work for me I checked my work against Robin Rendle's ["smallest CSS" post](https://robinrendle.com/notes/the-smallest-css/) and was chuffed to find I had organically come to many of the same conclusions, and the same dumb bug in Safari. (Seriously, fix that!) I had to re-structure and standardize few of my templates, but that was it. Commit, sync, push.

I've been writing and posting more on here, and hopefully this re-design will let me stop thinking about anything other than that. This is my black t-shirt and black pants of the web; no more decision fatigue here. At least for a few months, right?

## 2024-08

I'm up to a back-breaking [62 lines of CSS](https://github.com/wickedlyethan/wickedlyethan.github.io/blob/main/assets/css/style.css), but now I minify it and embed it in every page, so I don't feel too bad. The new lines are just some things to differentiate elements in blog posts, specifically figure captions and blockquotes; I did end up having to add a few lines to force Safari's hand and color links nicely, so that's their fault, not mine. I even went crazy and upgraded my title to "xxx-large".

I recently added some more visual elements to site that I'm really happy with because they're just [unicode icons](https://www.compart.com/en/unicode), which can be relied upon to be rendered nicely and totally fit the vibe and ethos I'm going for.

Most importantly, I've blogged and posted more this year than I have in the past five combined. The site feels great to me and I'm proud of it, and it feels clever to offload the design work and focus on content.

## 2024-12

A few more lines of CSS have crept into the stylesheet, now sitting at a bloated, disgusting 83 lines. It was worth it, I swear! I added sub-headlines and needed to adjust the default spacing, and I realized that using CSS keywords for the few elements that had non-standard sizing was locking them in, instead of letting them ebb and flow with the root font size calculation, so I changed those to percentages. Oh and I dedicated a whole foul line to set the line height of content paragraphs to [the golden ratio](https://medium.com/@zkareemz/golden-ratio-62b3b6d4282a), which feels similar to the root font size like a "well duh!" rule I never would've thought of. It felt instantly right and I'm going to force it upon every citizen I see.

## 2025-09

Dropping the bit about more CSS being a foul, degenerate thing because I did come around to injecting *a little* more personality into the site. I'm sticking to my overall thesis by using only [system colors](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color) so I don't need to even attempt to create a cohesive color palette, which I consider a dark, arcane art.

When I need to tweak them I learned about the [relative color syntax](https://chriscoyier.net/2023/05/12/add-opacity-to-an-existing-color/), which is really nice for taking edge off of some system colors or reusing them for other things, like the bottom border of the header. Now I feel fancy too, because this is pretty modern CSS.

I just finished doing a pass to try to go as classless as possible, which I also like as a philosophy – HTML5 provides so many useful semantic elements that I'm resorting to classes and IDs only for truly bespoke elements that are many times repeating or truly singular, respectively.

Lastly, I'm giving in to an old habit and implementing a typography scale, specifically the [minor third](https://baseline.is/tools/type-scale-generator/) because it feels linear instead of exponential in growth, which I find more pleasing and predictable. I think this is one thing the default stylesheet does do poorly, and using someone else's math to fix it is right in line with what I'm trying to accomplish.

So yeah, the stylesheet has grown 3.5x in a year, but that's because I'm actually using my site and want it to look nice. I'm the main audience, after all, and I'm really proud of how clean and readable it is on pretty much any device! It might get worse too – I'm thinking of adding actual functionality to the blog too, *gasp*.