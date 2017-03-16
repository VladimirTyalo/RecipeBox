export const store = {
  isEditing: false,
  focusId: "#",
  recipes: {
    111: {
      title: "Pizza",
      ingredients: [{
          name: "whole cherry tomatoes",
          amount: 250,
          units: "g"
        },
        {
          name: "garlic",
          amount: 2,
          units: "ml"
        },
        {
          name: "sugar",
          amount: 1,
          units: "pinch"
        },
      ],
      workflow: `01.Heat a large frying or sauté pan over a high heat until very hot, then tip in the tomatoes. Cook, tossing in the pan occasionally, for 3-4 minutes until the tomatoes are scorched, blackened and splitting their skins.
02.Remove the pan from the heat and pour in the extra-virgin olive oil, pressing the tomatoes up against the side of the pan to flatten them. Stir in 
the garlic, season with salt, pepper and the sugar, then leave to cool slightly.
03.Heat the oven to 240°C/220°C fan/gas 9. Spread the pizza bases with the sauce, then top with whatever you fancy. We used strips of parma ham and crumbled goat’s cheese. Bake in the oven on trays for 8-10 minutes until the bases are crisp, then remove.
04.Drizzle with a little more extra-virgin olive oil, scatter with fresh herbs and 
some chilli flakes, then slice to serve. `,
      img: "http://cdnwp.audiencemedia.com/wp-content/uploads/2016/06/685276-1-eng-GB_quick-parma-ham-and-goats-cheese-pizza-470x540.jpg"
    },
    222: {
      title: `Coffee cake`,
      "ingredients": [{
          name: "flour",
          amount: 1,
          units: "cups"
        },
        {
          name: "brown sugar",
          amount: 0.5,
          units: "cups"
        },
        {
          name: " cold butter",
          amount: 0.5,
          units: "cup"
        },
        {
          name: "chopped pecans",
          amount: 1,
          units: "cup"
        }, {
          name: "cream cheese",
          amount: 8,
          units: "oz"
        },
        {
          name: "egg",
          amount: 1,
          units: "unit"
        },
        {
          name: "vanilla",
          amount: 1,
          units: "teaspoon"
        },
      ],
      workflow: `1 Heat oven to 350°F. Spray 13x9-inch pan with cooking spray. In bowl, mix 1 1/3 cups flour and brown sugar. Cut in butter until crumbly. Stir in pecans; set aside. In separate bowl, beat cream cheese with electric mixer until smooth. Add granulated sugar and 1 table¬spoon flour; beat until blended. Add 1 egg and 1/2 teaspoon of vanilla; beat until blended.
2 Make cake mix as directed on box. Spoon batter into pan. Dollop cream cheese mixture over batter and swirl with knife. Sprinkle reserved pecan mixture over top. Bake 45 minutes or until set. Cool completely on cooling rack.
3 In small bowl, mix powdered sugar, milk and remaining 1/2 teaspoon vanilla with whisk. Drizzle over coffee cake.`,

      img: "http://images-gmi-pmc.edge-generalmills.com/dae048cb-9d71-4307-b414-ff04f63dd5e0.jpg"
    },

    333: {
      title: "Bacon",
      ingredients: [{
          name: "meet",
          amount: 2,
          units: "kg"
        },
        {
          name: "oil",
          amount: 1,
          units: "spoon"
        },
        {
          name: "paper",
          amount: 1,
          units: "mg"
        }
      ],
      workflow: "Mix all ingredients together smash and boil and fry for 2 hours then enjoy",
      img: "https://bacontoday.com/wp-content/uploads/2016/09/dry-cured-back-bacon.jpg"
    },
  },
  activeRecipe: {
    id: 111,
    recipe: {
      title: "Cake",
      ingredients: [{
          name: "powder",
          amount: 1,
          units: "glass"
        },
        {
          name: "milk",
          amount: 2,
          units: "l"
        },
        {
          name: "sugar",
          amount: 1,
          units: "mg"
        }
      ],
      workflow: "Mix all ingredients together smash and boil and fry for 2 hours then enjoy",
      img: "http://www.homepreservingbible.com/wp-content/uploads/2012/10/Apples-C.Cancler.jpg"
    },
  }
};