export const store = {
  isEditing: false,
  focusId: "#",
  recipes: {
    111: {
      title: "Cake",
      ingredients: [
        { name: "powder", amount: 1, units: "glass" },
        { name: "milk", amount: 2, units: "l" },
        { name: "sugar", amount: 1, units: "mg" }
      ],
      workflow: "Mix all ingredients together smash and boil and fry for 2 hours then enjoy",
      img: "http://www.homepreservingbible.com/wp-content/uploads/2012/10/Apples-C.Cancler.jpg"
    },
    222: {
      title: "Soup",
      ingredients: [
        { name: "water", amount: 3, units: "l" },
        { name: "meet", amount: 3, units: "kg" },
        { name: "potato", amount: 3, units: "kg" },
        { name: "salt", amount: 3, units: "mg" }],
      workflow: "Boil meat and potato, add salt and try to eat it ",
      img: "https://www.puregelato.com.au/images/cake/Choc-Drip-Gelato-Cake.jpg"
    },

    333: {
      title: "Bacon",
      ingredients: [
        { name: "meet", amount: 2, units: "kg" },
        { name: "oil", amount: 1, units: "spoon" },
        { name: "paper", amount: 1, units: "mg" }
      ],
      workflow: "Mix all ingredients together smash and boil and fry for 2 hours then enjoy",
      img: "https://bacontoday.com/wp-content/uploads/2016/09/dry-cured-back-bacon.jpg"
    },
  },
  activeRecipe: {
    id: 111,
    recipe: {
      title: "Cake",
      ingredients: [
        { name: "powder", amount: 1, units: "glass" },
        { name: "milk", amount: 2, units: "l" },
        { name: "sugar", amount: 1, units: "mg" }
      ],
      workflow: "Mix all ingredients together smash and boil and fry for 2 hours then enjoy",
      img: "http://www.homepreservingbible.com/wp-content/uploads/2012/10/Apples-C.Cancler.jpg"
    },
  }
};