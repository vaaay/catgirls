let lastCatRender = 0;


register("renderOverlay", () => {

  randomize().draw(randomizeWidth(), height / 1.5);
})


var height = Renderer.screen.getHeight();
var width = Renderer.screen.getWidth();


var catgirlimage1 = new Image("catgirl1.png", "https://i.imgur.com/hGJEqWs.png");
var catgirlimage2 = new Image("catgirl2.png", "https://i.imgur.com/zEjvcyX.png");
var catgirlimage3 = new Image("catgirl3.png", "https://i.imgur.com/S9cIM1h.png");


function randomize() {
  lastCatRender = Date.now();
  var images = [catgirlimage1, catgirlimage2, catgirlimage3],
      imageToUse = images[Math.floor(Math.random() * images.length)];

  return imageToUse;
}

function randomizeWidth() {
    var randomWidth = Math.floor(Math.random() * width)

    return randomWidth;
}
