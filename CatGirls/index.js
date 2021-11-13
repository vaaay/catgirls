import Settings from "./settings"
import settings from "./settings"

let lastCatRender = 0;


register("renderOverlay", () => {

  randomize().draw(randomizeWidth(), height / 1.5);
})


var height = Renderer.screen.getHeight();
var width = Renderer.screen.getWidth();

// sfw catgirls
var catgirlimage1 = new Image("catgirl1.png", "https://i.imgur.com/hGJEqWs.png");
var catgirlimage2 = new Image("catgirl2.png", "https://i.imgur.com/zEjvcyX.png");
var catgirlimage3 = new Image("catgirl3.png", "https://i.imgur.com/S9cIM1h.png");
var catgirlimage4 = new Image("catgirl4.png", "https://i.imgur.com/0g8GwCW.png");
var catgirlimage5 = new Image("catgirl5.png", "https://i.imgur.com/BFSv5kB.png");

// nsfw catgirls
var nsfwimage1 = new Image("nsfwcatgirl1.gif", "https://i.imgur.com/ez4NKds.gif");
var nsfwimage2 = new Image("nsfwcatgirl2.gif", "https://i.imgur.com/Kcj6K6R.gif");
var nsfwimage3 = new Image("nsfwcatgirl3.gif", "https://i.imgur.com/w3PcRm0.gif");

// catboys
var catboyimage1 = new Image("catboy1.png", "https://i.imgur.com/GhRSZYl.png");
var catboyimage2 = new Image("catboy2.png", "https://i.imgur.com/Dsyb66E.png");
var catboyimage3 = new Image("catboy3.png", "https://i.imgur.com/1EebUvv.png");

function randomize() {
  lastCatRender = Date.now();
  if (settings.nsfwMode) {

  var images = [nsfwimage1, nsfwimage2, nsfwimage3],
      imageToUse = images[Math.floor(Math.random() * images.length)];

  return imageToUse;
  }

  else if (settings.catboyMode) {

    var images = [catboyimage1, catboyimage2, catboyimage3],
        imageToUse = images[Math.floor(Math.random() * images.length)];

    return imageToUse;
  }
  else {

    var images = [catgirlimage1, catgirlimage2, catgirlimage3, catgirlimage4, catgirlimage5],
        imageToUse = images[Math.floor(Math.random() * images.length)];

    return imageToUse;

  }
}

function randomizeWidth() {
    var randomWidth = Math.floor(Math.random() * width)

    return randomWidth;
}

register("command", () => Settings.openGUI()).setName("cg")
register("command", () => Settings.openGUI()).setName("catgirls")
