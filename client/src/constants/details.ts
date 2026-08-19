//Video Path
import f1 from "../assets/videos/f1.mp4"
import f2 from "../assets/videos/f2.mp4"
import f3 from "../assets/videos/f3.mp4"
import f4 from "../assets/videos/f4.mp4"
import f5 from "../assets/videos/f5.mp4"
import f6 from "../assets/videos/f6.mp4"

// Define types
interface Flavor {
    name: string;
    color: string;
    imageName: string;
    elementsName: string;
    rotation: string;
}

interface Nutrient {
    label: string;
    amount: string;
}

interface Card {
    src: any;
    rotation: string;
    name: string;
    img: string;
    translation?: string; // optional since some cards don’t have it
}

// Bouquet lists
const flavorlists: Flavor[] = [
    {
        name: "Chocolate Foil Cake",
        color: "red",
        imageName: "foil-cake.png",
        elementsName: "red-elements.webp",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "Red Velvet Parfait",
        color: "black",
        imageName: "cake-parfait.png",
        elementsName: "black-elements.webp",
        rotation: "md:rotate-[8deg] rotate-0",
    },
    {
        name: "Golden Banana Bread",
        color: "blue",
        imageName: "banana-bread.png",
        elementsName: "blue-elements.webp",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "Creamy Standard Cake",
        color: "brown",
        imageName: "standard-cake.png",
        elementsName: "brown-elements.webp",
        rotation: "md:rotate-[8deg] rotate-0",
    },
    {
        name: "Festive Birthday Cake",
        color: "orange",
        imageName: "birthday-cake.png",
        elementsName: "orange-elements.webp",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "Bespoke Custom Cake",
        color: "white",
        imageName: "custom-cake.png",
        elementsName: "white-elements.webp",
        rotation: "md:rotate-[8deg] rotate-0",
    },
];

// Curation features list
const nutrientLists: Nutrient[] = [
    { label: "Baking Method", amount: "100% Handcrafted" },
    { label: "Ingredients", amount: "Premium & Fresh" },
    { label: "Custom Msg", amount: "Piped Fondant" },
    { label: "Flavor Profile", amount: "Rich & Moist" },
    { label: "Delivery", amount: "Same-Day Hand-Delivery" },
];

// Cards list
const cards: Card[] = [
    {
        src: f1,
        rotation: "rotate-z-[-10deg]",
        name: "Madison",
        img: "../assets/images/p1.png",
        translation: "translate-y-[-5%]",
    },
    {
        src: f2,
        rotation: "rotate-z-[4deg]",
        name: "Alexander",
        img: "../assets/images/p2.png",
    },
    {
        src: f3,
        rotation: "rotate-z-[-4deg]",
        name: "Andrew",
        img: "../assets/images/p3.png",
        translation: "translate-y-[-5%]",
    },
    {
        src: f4,
        rotation: "rotate-z-[4deg]",
        name: "Bryan",
        img: "../assets/images/p4.png",
        translation: "translate-y-[5%]",
    },
    {
        src: f5,
        rotation: "rotate-z-[-10deg]",
        name: "Chris",
        img: "../assets/images/p5.png",
    },
    {
        src: f6,
        rotation: "rotate-z-[4deg]",
        name: "Devante",
        img: "../assets/images/p6.png",
        translation: "translate-y-[5%]",
    },
];

export { flavorlists, nutrientLists, cards };