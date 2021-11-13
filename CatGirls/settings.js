import {
    @SwitchProperty,
    @Vigilant,
} from '../Vigilance/index';

@Vigilant("CatGirls")
class Settings {

        constructor() {
            this.initialize(this);
            this.setCategoryDescription("General", "&3Catgirls are great!")
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


}

export default new Settings
