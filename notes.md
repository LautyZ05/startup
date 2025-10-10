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

### Sep 26th, 2025

I did the flex assignment and it was way more complicated than I thought at least for me. Wrote down some notes in the CSS section to help quickly remember what some things do.

### Oct 1st, 2025

To deploy startup, use this
```
./deployFiles.sh -k ~/Desktop/startup260.pem -h connectthedots.click -s startup
```
Also I added 2 more html pages to my startup and worked on my css page

### Oct 3rd, 2025

Did the vite assignment and it was a bit weired trying to change the site's elements. I understood the html part of the jsx file as html calls main.jsx, then that one calls app.jsx. But the css was confusing at first but then just rereading the assignment a bit more carefully I figured out that the app.css wasn't for the entirety of the app but only for things like the images and effects. While the index.css was the actual stylizer of the webpage.

Did the componenets assignment, at first I thought everything was going to be super difficult as everything looked complex. But after going through the assignment, it was much easier than expected. The only thing that stopped me from changing the background color were errors I made in making the constants, some typos, and forgetting the "()" in the function. Other than that, I had pretty much everything in place

Did the router assignment and it was nervewracking. Mostly becuase I kept trying to run "npm run dev" and it wouldn't work until I searched it up and it told me that I had to add it to my json script. I spent way too long to figure that out and I wished I looked it up sooner, and I just ended up using "npx vite" instead. Other than that it was smooth sailing and will definitely use it as well as the react stuff in my start up.

### Oct 8th, 2025

I did the simon react part 1 assignment and it's not as difficult or complicated as I thought it would be. While yes I did take my time watching the video and pausing tons of time. Everything made sense as the video provided by Professor Jenson was a life saver and I don't think I would have understood anything without it. I learned some pretty helpful stuff like the fact that I can edit the json file. I don't know why but I always that I shouldn't edit it but I guess I was wrong and can finally do "npm run dev".

I also am almost finished with the startup react part 1 assignment. Only doing some final touches and all that is left is the deployReact file and I should be able to upload. I essentially did the same thing that I did for the simon react part 1 assignment but using my files. Like creating new directories for each of my pages, creating their respective jsx files, renaming files like the startup.css to app.css, and creating new files like the app.jsx, index.jsx, and the new index.html.

I also redid some parts of several pages because they weren't going to work that well with a single page and not multiple html pages. Like the header and footer were redone. I moved most of the navigation buttons to the header and leaving the title in the center, completely removing the back button (I also turned the title at the top into a link to take you to the start page). Then in the footer, I added my name to it and turned the github link into a button. I changed some of the text in the start page (used to be index.html) to say "Welcome Player!" instead of the title as it's being featured in the header now.

Also learned that NavLinks doesn't really work within the main tag so all those links are broken and send you to the 404 page. That's probably something I gotta ask a TA about or wait until part 2. I've tried adding NavLink to the main tag but it completely breaks my website so I left them as "a" tags and let them take you to the 404 page. So I added to the start page a warning just in case cause you never know.

Edit:

Deleated deployFiles and replaced it with deployReact. Uploaded my startup to my production environment and everything works just like it did on vite. Also here's the new code to upload to production environment
```
./deployReact.sh -k ~/Desktop/startup260.pem -h connectthedots.click -s startup
```

### Oct 10th, 2025

I completed the javascript array assignment and it wasn't too bad. It's similar to arrays in c++ that I'm learning in cs235 so that's helpful. I was a bit confused on how things some things worked but after testing some things on my own on the codepen, I understood it better. Like at first I didn't get the "i => i > 3" at first but then I understood that it takes each thing in the array and checks it if it's greater than 3. Also was confused on why my code worked differently to the possible solution but then I reread the instructions and got it. I thought you find the length of the array and then test that against the tester but in reality it was each item in the array that you had to test.

Just finished the javascript DOM assignment. I found it pretty cool how you can make a whole entire table in JavaScript and the only thing you put in the HTML file is a button with an onclick attribute and that transforms your whole table. While looking at the provided code, I will say that it is a lot of code to be able to produce a simple table but it's pretty cool.

Finished the reactivity assignment and what I learned will be really useful. Reason I say this is because the assignment helped show how to store stuff to local storage, create reactive buttons and text boxes, and how to create variables that you can take from one function to another. This is going to be really useful as in my startup, I want the settings page to change the color of the background to a few options like white, black, dark gray, dark blue, etc. So learning how to make the reactive buttons to change the color and using some information from previous assignments to change the background color will come in very handy.

## AWS

My IP address is: 52.201.35.163
This is my IP address that I got from setting up the AWS server which was super exciting, weird, and a bit complicated lol. (9/12/25)

[connectthedots.click](https://connectthedots.click) is my domain name that I finally set up and have running. As of today,(9/12/25) it is secured and using HTTPS

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

As of Sep. 24th, 2025, I created, edited, and uploaed 3 html files for my website. At it's current state it looks odd and still needs a lot of work but has the essentials that I need.

## CSS

some helpful notes about certain stuff that I most likely need help reminding with an example down below

- flex-direction: helps with what order content will be going in, row (horizontal) or column (vertical)
- justify-content and align-items: both essnetially help format the items. Depending on flex-direction, they essentially swap directions. For row, justify-content is left-right and align-items is top-down. And it's the opposite for column, justify-content is top-down and align-items is left-right

```css
      example {
        flex: 0 40px;
        background-color: darkgrey;
        font-size: 20px;
  
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
      }
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
