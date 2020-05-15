import { PlaneDetectionTypes } from "expo/build/AR";

const categories = [
  {
    id: "plants",
    name: "Plants",
    tags: ["products", "inspirations", "shop"],
    count: 137,
    image: require("../assets/icons/plants.png"),
  },
  {
    id: "seeds",
    name: "Seeds",
    tags: ["products", "inspirations", "shop"],
    count: 14,
    image: require("../assets/icons/seeds.png"),
  },
  {
    id: "flowers",
    name: "Flowers",
    tags: ["products", "inspirations", "shop"],
    count: 23,
    image: require("../assets/icons/flowers.png"),
  },
  {
    id: "sprayers",
    name: "Sprayers",
    tags: ["products", "inspirations", "shop"],
    count: 32,
    image: require("../assets/icons/sprayers.png"),
  },
  {
    id: "pots",
    name: "Pots",
    tags: ["products", "inspirations", "shop"],
    count: 137,
    image: require("../assets/icons/pots.png"),
  },
  {
    id: "fertilizers",
    name: "Fertilizers",
    tags: ["products", "inspirations", "shop"],
    count: 137,
    image: require("../assets/icons/fertilizers.png"),
  },
];

const products = [
  {
    id: 1,
    name: "16 best plants",
    description:
      "fsdadsfsd fdsfasd fads fdasfads fdsa as fgds g dasg a gh ahg fdhg af dh adh  dagdgafgad fhgahfadg adsfgad",
    tags: ["Interior", "24", "Ideas"],
    gallery: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
    ],
  },
];

const profile = {
  username: "Cristian",
  location: "Europe",
  email: "cristi_clas@yahoo.com",
  budget: 233,
  monthly_cap: 1000,
  notifications: true,
  newsletter: false,
};
const explore = [
  //images

  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png"),
];

export { categories, explore, products, profile };
