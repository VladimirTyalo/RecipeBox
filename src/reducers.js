import { create, actionType } from "./actions";
import uuid from "uuid";
import { Map, List, fromJS } from "immutable";

const initialState = Map({});

export const reducer = {

  recipes: (state = initialState, action) => {
    switch (action.type) {
      case actionType.ADD_RECIPE: {
        const id = uuid.v4();

        return state.merge(fromJS({ [id]: action.recipe }));
      }
      case actionType.DELETE_RECIPE: {
        return state.delete(action.id);
      }

      case actionType.EDIT_RECIPE: {
        const recipe = state.get(action.id);
        if (!recipe) return state;

        return state.merge(fromJS({ [action.id]: action.newRecipe }));
      }
      default: return state;
    }
  },

  activeRecipe: (state = initialState, action) => {
    switch (action.type) {
      case actionType.SET_ACTIVE_RECIPE: {
        return fromJS({ id: action.id, recipe: action.recipe });
      }
      case actionType.DISABLE_ACTIVE: {
        return fromJS({id: -111, recipe: {...state.get("recipe")}});
      }
      case actionType.ADD_INGREDIENT: {
        const newIngredients = state.get("recipe").get("ingredients").push(action.ingredient);;
        return state.setIn(["recipe", "ingredients"], newIngredients);
      }

      case actionType.DELETE_INGREDIENT: {
        const newIngredients = state.get("recipe").get("ingredients").filter(el => JSON.stringify(el) !== JSON.stringify(action.ingredient));
        return state.setIn(["recipe", "ingredients"], newIngredients);
      }
      default: return state;
    }
  },
};