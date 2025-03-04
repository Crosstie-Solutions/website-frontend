
const PHOTOS = {
   
    logo: new URL("./logo.png", import.meta.url).href,
    logo_w: new URL("./logo_w.png", import.meta.url).href,
    hero_bg: new URL("./hero_bg.png", import.meta.url).href,
    hero_1: new URL("./hero_1.png", import.meta.url).href,
    about: new URL("./about.jpeg", import.meta.url).href,
    

    cl1: new URL("./client1.png", import.meta.url).href,
    cl2: new URL("./client2.jpg", import.meta.url).href,
    cl3: new URL("./client3.jpg", import.meta.url).href,
    cl4: new URL("./client4.png", import.meta.url).href,
    cl5: new URL("./client5.jpg", import.meta.url).href,
    man: new URL("./man.jpg", import.meta.url).href,
    

   
    noPage: new URL("./404.png", import.meta.url).href,
    
};




//shop banner images
const shopBannerImages = [
    new URL("./model_4.jpeg", import.meta.url).href,
    new URL("./model_1.jpeg", import.meta.url).href,
    new URL("./model_2.jpeg", import.meta.url).href,
    new URL("./model_3.jpeg", import.meta.url).href,
];



const heroImages = [
    new URL("./hero_1.jpg", import.meta.url).href,
    new URL("./hero_2.jpg", import.meta.url).href,
    new URL("./hero_3.jpg", import.meta.url).href,
    new URL("./hero_4.jpg", import.meta.url).href,
    new URL("./hero_5.jpg", import.meta.url).href,
];


export {PHOTOS, shopBannerImages, heroImages};