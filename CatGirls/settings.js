import {
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
} from '../Vigilance/index';

@Vigilant("CatGirls")
class Settings {

        constructor() {
            this.initialize(this);
            this.setCategoryDescription("General", "&c /ct load if you ever run into any problems, that usually fixes them.\n&c If the problem is still not fixed dm me @Euphoria#6818.\n&3\n&3 Catgirls are great!")
            this.setCategoryDescription("Custom CatGirls", "&3You know what's better than Cat Girls? Cat Girls that you specifically choose to your liking!")
        }



        @SwitchProperty({
            name: "&a&lNSFW Mode",
            description: "Use NSFW CatGirl images.\n&cNOTE: NSFW means Not Safe For Work/View. Do not use this option if you are under 13.",
            category: "General",
            subcategory: "Mode"
        })
        nsfwMode = false;

        @SwitchProperty({
            name: "Cat Boy",
            description: "Use Cat Boy images.",
            category: "General",
            subcategory: "Mode"
        })
        catboyMode = false;

        @TextProperty({
            name: "Custom CatGirl image 1 address",
            description: "This is the image address for your custom catgirl image 1.",
            category: "Custom CatGirls",
            subcategory: "Cutomize Images",
            placeholder: "https://i.imgur.com/hGJEqWs.png",
        })
        image1address = "https://i.imgur.com/hGJEqWs.png";

        @TextProperty({
            name: "Custom CatGirl image 2 address",
            description: "This is the image address for your custom catgirl image 2.",
            category: "Custom CatGirls",
            subcategory: "Cutomize Images",
            placeholder: "https://i.imgur.com/zEjvcyX.png",
        })
        image2address = "https://i.imgur.com/zEjvcyX.png";

        @TextProperty({
            name: "Custom CatGirl image 3 address",
            description: "This is the image address for your custom catgirl image 3.",
            category: "Custom CatGirls",
            subcategory: "Cutomize Images",
            placeholder: "https://i.imgur.com/S9cIM1h.png",
        })
        image3address = "https://i.imgur.com/S9cIM1h.png";

        @TextProperty({
            name: "Custom CatGirl image 4 address",
            description: "This is the image address for your custom catgirl image 4.",
            category: "Custom CatGirls",
            subcategory: "Cutomize Images",
            placeholder: "https://i.imgur.com/by4hljL.png",
        })
        image4address = "https://i.imgur.com/by4hljL.png";

        @TextProperty({
            name: "Custom CatGirl image 5 address",
            description: "This is the image address for your custom catgirl image 5.",
            category: "Custom CatGirls",
            subcategory: "Cutomize Images",
            placeholder: "https://i.imgur.com/BFSv5kB.png",
        })
        image5address = "https://i.imgur.com/BFSv5kB.png";

        @SwitchProperty({
            name: "Use own custom CatGirls",
            description: "Use your own custom CatGirl images. Run /ct load after setting all the image addresses to activate them.",
            category: "Custom CatGirls",
            subcategory: "Customize"
        })
        customCatGirls = false;

        @SwitchProperty({
            name: "Use CatGirl skins.",
            description: "Changes everyone's skin to CatGirls.",
            category: "General",
            subcategory: "Skins"
        })
        usecatgirlSkins = false;

        @SwitchProperty({
            name: "Use CatGirl sounds.",
            description: "Changes most sound effects into CatGirl sound!",
            category: "General",
            subcategory: "Sounds"
        })
        catgirlsoundeffects = false;
}

export default new Settings
