export const actionType = {
  ADD_RECIPE: "ADD_RECIPE",
  EDIT_RECIPE: "EDIT_RECIPE",
  DELETE_RECIPE: "DELETE_RECIPE",

  ADD_INGREDIENT: "ADD_INGREDIENT",
  DELETE_INGREDIENT: "DELETE_INGREDIENT",

  SET_ACTIVE_RECIPE: "SET_ACTIVE_RECIPE",
  DISABLE_ACTIVE: "DISABLE_ACTIVE"
};

// action creators
export const create = {
  addRecipe: (recipe) => ({
    type: actionType.ADD_RECIPE,
    recipe
  }),

  editRecipe: (id, newRecipe) => ({
    type: actionType.EDIT_RECIPE,
    id,
    newRecipe
  }),

  deleteRecipe: (id) => ({
    type: actionType.DELETE_RECIPE,
    id
  }),

  addIngredient: (id, ingredient) => ({
    type: actionType.ADD_INGREDIENT,
    id,
    ingredient
  }),

  deleteIngredient: (id, ingredient) => ({
    type: actionType.DELETE_INGREDIENT,
    id,
    ingredient
  }),
  
  setActiveRecipe: (id, recipe) => ({
    type: actionType.SET_ACTIVE_RECIPE,
    id,
    recipe
  }),

  disableActive: (id) => ({
    type: actionType.DISABLE_ACTIVE,
    id
  })
};


