import {fromJS} from 'immutable';

export const actionType = {
  ADD_RECIPE: "ADD_RECIPE",
  EDIT_RECIPE: "EDIT_RECIPE",
  DELETE_RECIPE: "DELETE_RECIPE",

  ADD_INGREDIENT: "ADD_INGREDIENT",
  DELETE_INGREDIENT: "DELETE_INGREDIENT",

  SET_ACTIVE_RECIPE: "SET_ACTIVE_RECIPE",
  DISABLE_ACTIVE: "DISABLE_ACTIVE",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_NAME: "SET_NAME",
  SET_AMOUNT: "SET_AMOUNT",
  SET_UNITS: "SET_UNITS",
  SET_FOCUS_ID: "SET_FOCUS_ID",
  SET_IMG: "SET_IMG",
  SET_WORKFLOW: "SET_WORKFLOW",
  SET_TITLE: "SET_TITLE",
  COPY_ACTIVE_RECIPE: "COPY_ACTIVE_RECIPE"
};

// action creators
export const create = {
  addRecipe: () => ({
    type: actionType.ADD_RECIPE
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
    ingredient: fromJS({name: "", amount: 0, units: ""})
  }),

  deleteIngredient: (id) => ({
    type: actionType.DELETE_INGREDIENT,
    id
  }),
  
  setActiveRecipe: (id, recipe) => ({
    type: actionType.SET_ACTIVE_RECIPE,
    id,
    recipe
  }),

  disableActive: (id) => ({
    type: actionType.DISABLE_ACTIVE,
    id
  }),

  openModal: () => ({
    type: actionType.OPEN_MODAL
  }),

  closeModal: () => ({
    type: actionType.CLOSE_MODAL
  }),

  setName: (index, name) => ({
    type: actionType.SET_NAME,
    name,
    index
  }),

  setAmount: (index, amount) => ({
    type:actionType.SET_AMOUNT,
    amount,
    index
  }),

  setUnits: (index, units) => ({
    type: actionType.SET_UNITS,
    units,
    index
  }),

  setFocusId: (id) => ({
    type: actionType.SET_FOCUS_ID,
    id
  }),

  setImg: (img) => ({
    type: actionType.SET_IMG,
    img
  }),

  setWorkflow: (workflow) => ({
    type: actionType.SET_WORKFLOW,
    workflow
  }),

  setTitle: (title) => ({
    type: actionType.SET_TITLE,
    title
  }),

  copyActiveRecipe: (id) => ({
    type: actionType.COPY_ACTIVE_RECIPE,
    id
  })
};


