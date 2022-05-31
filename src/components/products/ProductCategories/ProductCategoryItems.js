// Helpers
import { RoutingPath } from "../../../helpers/RoutingPath";

export const ProductCategoryItems = [
  {
    id: 1,
    title: "Dice",
    description:
      "We have all kinds of dice: d4, d6, d8, d10, d12, d20 and d10 procentile dice.",
    url: RoutingPath.DiceCategory,
    image: "images/product_bubblegum_dice_d20.jpg",
  },
  {
    id: 2,
    title: "Dicesets",
    description:
      "All our dice sets contain one of each of these types of dice: d4, d6, d8, d10, d12, d20 and a d10 procentile dice.",
    url: RoutingPath.DicesetCategory,
    image: "images/product_rainbow_dice.jpg",
  },
  {
    id: 3,
    title: "Dicebags",
    description:
      "Get a nice bag to store all your precious childr... we mean dice.",
    url: RoutingPath.DiceBagCategory,
    image: "images/product_raspberryliquorice_dice.jpg",
  },
];
