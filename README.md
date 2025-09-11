# Connect the Dots

[My Notes](notes.md)

A brief description of the application here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. hopefully this description has been modified. will this change work again?

This will be a simple application where anyone who has accses to it can play a simple game of Connect 4 anywhere they want. They can either play with themselves against a computer that will randomly place down their dots or against a friend in person with each person taking turns. You can either play as a guest or log in with your information to keep track of you and your friends' scores as well.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever wanted to play a simple but addictive online game similar to Google's Tic Tac Toe but tired of the it at the same time? Well here's a new simple way to play Connect 4 on any device with internet compatibility anywhere you want. Connect the Dots is a simple application where you can either play againts a random computer or with friends in person. You can practice your Connect 4 skills as many times as you want or use it as a quick distraction. You can even have small competitions with your friends thanks to the easy to see scoreboard that will keep track of your wins/losses and calculate your win percentage.

### Design

![Design image](design_image.png)

In the image above, you can see a rough sketch of the design of the application. This is a rough draft so many things may change.

Down below, you can see how a user will interact with the server which will hold the scoreboards.

```mermaid
sequenceDiagram
    actor Friend 1
    actor Friend 2
    actor Friend 3
    Friend 1->>Website: Friend 1 +1 win
    Website-->>Friend 2: Friend 1 +1 win
    Website-->>Friend 3: Friend 1 +1 win
    Friend 3->>Website: Friend 3 -1 loss
    Website-->>Friend 1: Friend 3 -1 loss
    Website-->>Friend 2: Friend 3 -1 loss
```

### Key features

- Ability to play Connect 4 as a guest or logged in
- Single play or multiplay
- Secure login
- Updated scoreboards with correct scores (wins/losses/percentage)
- Controls for easy dot selection

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Will use 3-4 HTML pages for starting page, multiplayer select/scoreboard page, game page, and a fourth extra page for either an about us, settings page, or something that could improve the userbility.
- **CSS** - A nice, simple, and clean UI that can easily be switch between a light or dark mode without dramaticly changing things. 
- **React** - Presseble buttons to enter the application, to choose type of game, to login, and controls to move the dots left or right.
- **Service** - Connects to server to store and retrieve login and scoreboard information.
- **DB/Login** - Stores the users names and their scores when logged in.
- **WebSocket** - Once a game for a logged in user has finished, their score will be uploaded, calculated, and then displayed to all users in the scoreboard.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
