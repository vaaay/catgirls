// CHANGELOG v1.1.0 = - Fixed bug that swapped cat girls too fast spamming your screen (Thanks Unclaimed and Debug <3)
//                    - Added Cat Boy mode and NSFW mode
//
// CHANGELOG v1.2.0 = - Added option to use custom Cat Girl images
//                    - Added Cat Girls and Cat Boys
//
// CHANGELOG v1.3.0 = -Fixed bug with Settings menu
//                    -Added option to change all skins in a server to Cat Girl skins (Thanks SusAmogus module <3)
//                    -Added option to change most sound effects to Cat Girl sound effects!


import Settings from "./settings"
import settings from "./settings"

const EntityOtherPlayerMP = Java.type("net.minecraft.client.entity.EntityOtherPlayerMP");
const ResourceLocation = net.minecraft.util.ResourceLocation;
const ThreadDownloadImageData = net.minecraft.client.renderer.ThreadDownloadImageData;
const ImageBufferDownload = net.minecraft.client.renderer.ImageBufferDownload;
const NetworkPlayerInfo = net.minecraft.client.network.NetworkPlayerInfo;
const DynamicTexture = net.minecraft.client.renderer.texture.DynamicTexture;
const textureManager = Client.getMinecraft().func_110434_K();


let a1 = settings.image1address.replace('https://i.imgur.com/', '')
let a2 = settings.image2address.replace('https://i.imgur.com/', '')
let a3 = settings.image3address.replace('https://i.imgur.com/', '')
let a4 = settings.image4address.replace('https://i.imgur.com/', '')
let a5 = settings.image5address.replace('https://i.imgur.com/', '')

const imagesa = [
  new Image("catgirl1.png", "https://i.imgur.com/hGJEqWs.png"),
  new Image("catgirl2.png", "https://i.imgur.com/zEjvcyX.png"),
  new Image("catgirl3.png", "https://i.imgur.com/S9cIM1h.png"),
  new Image("catgirl4.png", "https://i.imgur.com/by4hljL.png"),
  new Image("catgirl5.png", "https://i.imgur.com/BFSv5kB.png"),
  new Image("catgirl6.png", "https://i.imgur.com/lo3RwkE.png"),
  new Image("catgirl7.png", "https://i.imgur.com/lV4SWQm.png"),
  new Image("catgirl8.png", "https://i.imgur.com/Lw2gC6B.png")
];

const customImages = [
  new Image(`${a1}`, `${settings.image1address}`),
  new Image(`${a2}`, `${settings.image2address}`),
  new Image(`${a3}`, `${settings.image3address}`),
  new Image(`${a4}`, `${settings.image4address}`),
  new Image(`${a5}`, `${settings.image5address}`)
];

const nsfwimages = [
  new Image("nsfwcatgirl1.gif", "https://i.imgur.com/ez4NKds.gif"),
  new Image("nsfwcatgirl2.gif", "https://i.imgur.com/Kcj6K6R.gif"),
  new Image("nsfwcatgirl3.gif", "https://i.imgur.com/w3PcRm0.gif")
]

const catboyimages = [
  new Image("catboy1.png", "https://i.imgur.com/GhRSZYl.png"),
  new Image("catboy2.png", "https://i.imgur.com/Dsyb66E.png"),
  new Image("catboy3.png", "https://i.imgur.com/1EebUvv.png"),
  new Image("catboy4.png", "https://i.imgur.com/MiATTVr.png"),
  new Image("catboy5.png", "https://i.imgur.com/qpZFmIe.png"),
  new Image("catboy6.png", "https://i.imgur.com/JFeyydO.png")
]

const soundeffects = [
  new Sound({source: "catsound1.ogg"}),
  new Sound({source: "catsound2.ogg"}),
  new Sound({source: "catsound3.ogg"}),
  new Sound({source: "catsound4.ogg"}),
  new Sound({source: "catsound5.ogg"}),
  new Sound({source: "catsound6.ogg"}),
  new Sound({source: "catsound7.ogg"}),
  new Sound({source: "catsound8.ogg"})
]


let img;
if (settings.customCatGirls) {img = customImages[1]}
else if (settings.nsfwMode) {img = nsfwimages[1]}
else if (settings.catboyMode) {img = catboyimages[1]}
else {
  img = imagesa[1];
}
let ranwidth = 100;


const getRandomImage = () => {
    if (settings.customCatGirls) {
      var imageToUse = customImages[Math.floor(Math.random() * customImages.length)];
      return imageToUse;
    }

    else if (settings.nsfwMode) {
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



const loadSkin = (buffer, name) => {
  const saved = new ResourceLocation("minecraft:skins/" + name);
  const textureb = new DynamicTexture(buffer);
  textureManager.func_110579_a(saved, textureb);
  return saved;
};

const getSkin = (uuidS) => {
  const mojangProfile = JSON.parse(FileLib.getUrlContent("https://sessionserver.mojang.com/session/minecraft/profile/" + uuidS));
  const texturea = JSON.parse(
    java.util.Base64.getDecoder()
      .decode(mojangProfile.properties[0].value)
      .map((c) => java.lang.Character.toString(c))
      .join("")
  );
  const skinURL = texturea.textures.SKIN.url;
  const skinID = skinURL.split("/").pop();
  const saved = new ResourceLocation("minecraft:changeskin/" + skinID);
  const textureb = new ThreadDownloadImageData(
    null,
    skinURL,
    null,
    new ImageBufferDownload()
  );
  textureManager.func_110579_a(saved, textureb);
  return saved;
};

const changePlayerSkin = (player, skin, skinType = "slim") => {
  try {
    const playerInfo = ReflectionHelper.getPrivateValue(
      net.minecraft.client.entity.AbstractClientPlayer,
      player.getPlayer(),
      "playerInfo",
      "field_175157_a"
    );

    ReflectionHelper.setPrivateValue(
      net.minecraft.client.network.NetworkPlayerInfo,
      playerInfo,
      skin,
      "locationSkin",
      "field_178865_e"
    );

    ReflectionHelper.setPrivateValue(
      net.minecraft.client.network.NetworkPlayerInfo,
      playerInfo,
      skinType,
      "skinType",
      "field_178863_g"
    );

    ReflectionHelper.setPrivateValue(
      net.minecraft.client.entity.AbstractClientPlayer,
      player.getPlayer(),
      playerInfo,
      "playerInfo",
      "field_175157_a"
    );
  } catch (e) {}
};

const catgirlskinList = [
  "catgirlskin1",
  "catgirlskin2",
  "catgirlskin3",
];
let skinsData = [];
let loadedSkins = [];
setTimeout(() => {
  catgirlskinList.forEach((skin) =>
    skinsData.push(
      javax.imageio.ImageIO.read(
        new java.io.File(
          `./config/ChatTriggers/modules/CatGirls/skins/${skin}.png`
        )
      )
    )
  );
}, 0);

const loadSkinTrigger = register("step", () => {
  if (!loadedSkins.length) {
    if (skinsData.length != catgirlskinList.length) return;
    catgirlskinList.forEach((name, i) =>
      loadedSkins.push(loadSkin(skinsData[i], name))
    );
    loadSkinTrigger.unregister();
  }
}).setDelay(2);

let skinMapping = {};
let catgirlskinsOn = false;

function catgirlskin(timeout = 5000) {
  if (!settings.usecatgirlSkins) return;
  if (!loadedSkins.length) return;
  if (skinsData.length != catgirlskinList.length) return;
  if (catgirlskinsOn) return;
  catgirlskinsOn = true;
  World.getAllPlayers()
    .filter((p) => {
      const skin = p.getPlayer().func_110306_p();
      if (!skin) return;
      if (loadedSkins.includes(skin)) return false;

      return true;
    })
    .forEach((p) => {
      const skin = p.getPlayer().func_110306_p();
      skinMapping[p.getUUID().toString()] = skin;
      changePlayerSkin(
        p,
        loadedSkins[Math.floor(Math.random() * loadedSkins.length)]
      );
    });
  setTimeout(() => {
      World.getAllPlayers()
        .filter((p) => {
          const skin = p.getPlayer().func_110306_p();
          if (!skin) return;
          if (!(p.getUUID().toString() in skinMapping)) return false;

          return true;
        })
        .forEach((p) => {
          changePlayerSkin(p, skinMapping[p.getUUID().toString()]);
          delete skinMapping[p.getUUID().toString()];
        });
      catgirlskinsOn = false;
    }, timeout);
}

register('step', () => {
    catgirlskin();
}).setFps(60);


const getRandomSound = () => {
      var soundToUse = soundeffects[Math.floor(Math.random() * soundeffects.length)];
      return soundToUse;
}

let sound = soundeffects[1];

register('step', () => {
  sound = getRandomSound();
}).setFps(1);

function playsound(volume) {
  sound.setVolume(volume)
  sound.play();
}

register('soundPlay', (pos, name, vol, pitch, cat, event) => {
  if (!settings.catgirlsoundeffects) return;
  if (!name) return;
  if (vol == 0) return;
  if (name.toString().includes("step")) return;
  cancel(event);
  playsound(vol);
})
