import { combineReducers, createStore } from "redux";
import { Map, List, fromJS} from "immutable";
import { composeWithDevTools, devToolsEnhancer} from 'redux-devtools-extension';


import {actionType, create} from "./actions";
import { reducer } from "./reducers";
const {recipes, activeRecipe, isEditing, ingredients } = reducer;

const initState = require("./initial-state").store;


const App = combineReducers({
  recipes,
  activeRecipe,
  isEditing,
  ingredients
});

const store = createStore(App,
 {recipes: fromJS(initState.recipes), activeRecipe: fromJS(initState.activeRecipe), isEditing: fromJS(initState.isEditing),
 ingredients: fromJS(initState.activeRecipe.recipe.ingredients)},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;