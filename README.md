# pixiSlot

This project setup with PIXI 6.3.0, Typescript and GSAP.

main.ts is the main entry for the app. There is the application object created.

# Build Prerequisite

Download Zip or clone the repo

Do npm install to install all required dependencies.

# Build and Watch
To build run npm run build. Compiles typescript files and bundles them.

To watch run npm run watch or just npm start. Bundles the code when files changes.

# Running app

Serve target/index.html on your web-server and run in browser of choice. (I use chrome)

I have used WebStorm and with the Run/Debug configurations you can easily setup a "JavaScript Debug" configuration to run the target/index.html file in a browser. WebStorm will then start a web server for you.

# About Project

It Majorly has two screens

**Loading Screen**
a) it shows assets loading in precentage

b) a continue button which helps to move to next screen

**Game Screen**
a) ReelView with 5 reels and 3 symbols in each reel

b) spin button
 
**Functionality**

on pressing Spin -

New set of symbols randomly generated through positions from reelset provided are displayed .(spinnig animation is not implemented yet)

Result of Winning/Not Winning Combination is displayed

**Reelset:**

  ["hv2", "lv3", "lv3", "hv1", "hv1", "lv1", "hv1", "hv4", "lv1", "hv3", "hv2", "hv3", "lv4", "hv4", "lv1", "hv2", "lv4", "lv1", "lv3", "hv2"],

  ["hv1", "lv2", "lv3", "lv2", "lv1", "lv1", "lv4", "lv1", "lv1", "hv4", "lv3", "hv2", "lv1", "lv3", "hv1", "lv1", "lv2", "lv4", "lv3", "lv2"],

  ["lv1", "hv2", "lv3", "lv4", "hv3", "hv2", "lv2", "hv2", "hv2", "lv1", "hv3", "lv1", "hv1", "lv2", "hv3", "hv2", "hv4", "hv1", "lv2", "lv4"],

  ["hv2", "lv2", "hv3", "lv2", "lv4", "lv4", "hv3", "lv2", "lv4", "hv1", "lv1", "hv1", "lv2", "hv3", "lv2", "lv3", "hv2", "lv1", "hv3", "lv2"],

  ["lv3", "lv4", "hv2", "hv3", "hv4", "hv1", "hv3", "hv2", "hv2", "hv4", "hv4", "hv2", "lv2", "hv4", "hv1", "lv2", "hv1", "lv2", "hv4", "lv4"];

**Symbol Payout**

'hv1': {3: 1, 4: 2, 5: 3},
'hv2': {3: 1, 4: 2, 5: 3},
'hv3': {3: 1, 4: 2, 5: 5},
'hv4': {3: 2, 4: 5, 5: 10},
'lv1': {3: 5, 4: 10, 5: 15},
'lv2': {3: 5, 4: 10, 5: 15},
'lv3': {3: 5, 4: 10, 5: 20},
'lv4': {3: 10, 4: 20, 5: 50}

**PayLine**
[1, 1, 1, 1, 1],
[0, 0, 0, 0, 0],
[2, 2, 2, 2, 2],
[0, 0, 1, 2, 2],
[2, 2, 1, 0, 0],
[0, 1, 2, 1, 0],
[2, 1, 0, 1, 2]
