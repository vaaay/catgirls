// CHANGELOG v1.1.0 = - Fixed bug that swapped cat girls too fast spamming your screen (Thanks Unclaimed <3)
//                    - Added Cat Boy mode and NSFW mode

import Settings from "./settings"
import settings from "./settings"

const imagesa = [
  new Image("catgirl1.png", "https://i.imgur.com/hGJEqWs.png"),
  new Image("catgirl2.png", "https://i.imgur.com/zEjvcyX.png"),
  new Image("catgirl3.png", "https://i.imgur.com/S9cIM1h.png"),
  new Image("catgirl4.png", "https://i.imgur.com/0g8GwCW.png"),
  new Image("catgirl5.png", "https://i.imgur.com/BFSv5kB.png")
];

const nsfwimages = [
  new Image("nsfwcatgirl1.gif", "https://i.imgur.com/ez4NKds.gif"),
  new Image("nsfwcatgirl2.gif", "https://i.imgur.com/Kcj6K6R.gif"),
  new Image("nsfwcatgirl3.gif", "https://i.imgur.com/w3PcRm0.gif")
]

const catboyimages = [
  new Image("catboy1.png", "https://i.imgur.com/GhRSZYl.png"),
  new Image("catboy2.png", "https://i.imgur.com/Dsyb66E.png"),
  new Image("catboy3.png", "https://i.imgur.com/1EebUvv.png")
]

let img;
if (settings.nsfwMode) {img = nsfwimages[1]}
else if (settings.catboyMode) {img = catboyimages[1]}
else {
  img = imagesa[1];
}
let ranwidth = 100;


const getRandomImage = () => {
    if (settings.nsfwMode) {
      var imageToUse = nsfwimages[Math.floor(Math.random() * nsfwimages.length)];
      return imageToUse;
    }

    else if (settings.catboyMode) {
      var imageToUse = catboyimages[Math.floor(Math.random() * catboyimages.length)];
      return imageToUse;
    }

    else {
      var imageToUse = imagesa[Math.floor(Math.random() * imagesa.length)];
      return imageToUse;
    }
}

const getRandomWidth = () => {
    var randomWidtha = Math.floor(Math.random() * width)
    return randomWidtha;
}

register('step', () => {
  img = getRandomImage();
  ranwidth = getRandomWidth();
}).setDelay(5);

register('renderOverlay', () => {
    img.draw(ranwidth, height / 1.5);
});



var height = Renderer.screen.getHeight();
var width = Renderer.screen.getWidth();


register("command", () => Settings.openGUI()).setName("cg")
register("command", () => Settings.openGUI()).setName("catgirls")
