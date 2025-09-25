# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)
- [Markdown Instructions](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [HTML Intro](https://github.com/webprogramming260/.github/blob/main/profile/html/introduction/introduction.md)
- [My website](https://startup.connectthedots.click)

## Notes (by day)
### Sep 5th, 2025

I made an aws account and I am very confused. As well as made a repository and cloned it into vscode and github and everything and still am very confused. I will definitly be talking to a TA hopefully soon (probebly next week) to ask questions. Also downloaded vscode for the first time and also very confused on how to use it and committing changes but I'm getting the hang of it. Hopefully this gets easier over time.

### Sep 12th, 2025

I finally made my AWS server and it was pretty cool. Even though everything seemed super complicated at first, it was actually a pretty smooth process. I'm still a bit confused but I'll probably get used to everythin after a while.

I also have set up my domain name and I was worried that I did something wrong multiple times because nothing seemed to work but I just had to wait a few minutes and check around like checking my spam folder. After that everything ran great! I couldn't access it through my laptop but it worked fine on my phone and iPad.

Some time has passed and I finally the website is secured and I can access it through my computer and it works great

### Sep 19th, 2025

Did the structure HTML assignment and it really brought back memories from highschool. Everything we coded was very similar to what I remember.

Did the input HTML assignment and it reminded me how much repitition there is in HTML. As well as learned/relearned how to program buttons/checkbox/text areas.

Did the media HTML assignment and it looked harder than it actually was. I wasn't too sure on where I could get a video to change so I instead added a youtube video and that worked.

### Sep 24th, 2025

I created three html files and wrote code in it to roughly match what I had previously had drawn up. As I created it and started looking at the design, I'm currently thinking of switching some things around like having the log in and guest options be in the index instaed of the select file but I'm going to keep thinking about on what I should change or what should stay.

Also I got to enter into my startup folder in the terminal to be able to upload my html files to the server. (thank you TA for showing me what to do as I was never going to get it on my own)

## AWS

My IP address is: 52.201.35.163
This is my IP address that I got from setting up the AWS server which was super exciting, weird, and a bit complicated lol. (9/12/25)

[connectthedots.click](https://connectthedots.click) is my domain name that I finally set up and have running. As of today,(9/12/25) it is secured and using HTTPS

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

As of Sep. 24th, 2025, I created, edited, and uploaed 3 html files for my website. At it's current state it looks odd and still needs a lot of work but has the essentials that I need.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
