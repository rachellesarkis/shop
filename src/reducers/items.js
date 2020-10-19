export const array = [
  {
    id: 1,
    name: "Cat Collar",
    price: 5,
    description: "Red Dingo Cat Collar - Classic Purple",
    quantiySelected: 0,
    totalPriceSelected: 0,
    quantityAvailable: 22,
    image: require("../images/catcollar.jpg"),
  },
  {
    id: 2,
    name: "Cat Food",
    price: 60,
    description: "Nutrience - Infusion Kitten 2.27kg",
    quantiySelected: 0,
    totalPriceSelected: 0,
    quantityAvailable: 8,
    image: require("../images/catfood.jpg"),
  },
  {
    id: 3,
    name: "Dog Toy",
    price: 15,
    description: "Nerf - Dog Atomic Flyer Dog Toy, Large",
    quantiySelected: 0,
    totalPriceSelected: 0,
    quantityAvailable: 14,
    image: require("../images/dogtoy.jpg"),
  },
  {
    id: 4,
    name: "Cat Toy",
    price: 12,
    description: "Gimcat - cork with bell and feather cat toy",
    quantiySelected: 0,
    totalPriceSelected: 0,
    quantityAvailable: 25,
    image: require("../images/cattoy.jpg"),
  },
  {
    id: 5,
    name: "Cat Litter",
    price: 70,
    description: "Cat Litter Box 54x39x49H",
    quantiySelected: 0,
    totalPriceSelected: 0,
    quantityAvailable: 3,
    image: require("../images/catlitter.jpg"),
  },
  {
    id: 6,
    name: "Steel Bowl",
    price: 13,
    description: "Croci - Steel Bowl Silicone",
    quantiySelected: 0,
    totalPriceSelected: 0,
    quantityAvailable: 20,
    image: require("../images/steelbowl.jpg"),
  },
  {
    id: 7,
    name: "Dog Mattress",
    price: 24,
    description: "Chess Mattress Dog Bed (S,M)",
    quantiySelected: 0,
    totalPriceSelected: 0,
    quantityAvailable: 5,
    image: require("../images/dogmattress.jpg"),
  },
  {
    id: 8,
    name: "Cat Scratcher",
    price: 70,
    description: "Hagen - style scratcher with catnip S-Chaise",
    quantiySelected: 0,
    totalPriceSelected: 0,
    quantityAvailable: 9,
    image: require("../images/scractcher.jpg"),
  },
  {
    id: 9,
    name: "Dog Food",
    price: 75,
    description: "Carnilove - Salmon & Turkey for large breed puppy",
    quantiySelected: 0,
    totalPriceSelected: 0,
    quantityAvailable: 12,
    image: require("../images/dogfood.jpg"),
  },
  {
    id: 10,
    name: "Dog Spray",
    price: 12,
    description: "Duvo - Puppy Training Spray",
    quantiySelected: 0,
    totalPriceSelected: 0,
    quantityAvailable: 13,
    image: require("../images/dogspray.jpg"),
  },
];

const itemsReducer = (state = array, action) => {
  switch (action.type) {
    case "plus":
      return state.map((item) =>
        item.id === action.id && item.quantityAvailable > 0
          ? {
              ...item,
              quantiySelected: item.quantiySelected + 1,
              totalPriceSelected: item.totalPriceSelected + item.price,
              quantityAvailable: item.quantityAvailable - 1,
            }
          : item
      );
    case "minus":
      return state.map((item) =>
        item.id === action.id && item.quantiySelected > 0
          ? {
              ...item,
              quantiySelected: item.quantiySelected - 1,
              totalPriceSelected: item.totalPriceSelected - item.price,
              quantityAvailable: item.quantityAvailable + 1,
            }
          : item
      );
    default:
      return state;
  }
};

export default itemsReducer;
