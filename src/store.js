import { combineReducers, createStore } from "redux";
import { Map, List, fromJS } from "immutable";
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';

import { actionType, create } from "./actions";
import { reducer } from "./reducers";
const {recipes, activeRecipe, isEditing, ingredients, setFocusId } = reducer;

const initState = require("./initial-state").store;


const App = combineReducers({
  recipes,
  isEditing,
  activeRecipe,
  focusId: setFocusId
});

const store = createStore(App,
  {
    recipes: fromJS(initState.recipes),
    activeRecipe: fromJS(initState.activeRecipe),
    isEditing: fromJS(initState.isEditing),
    focusId: "#"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;