import { combineReducers, createStore } from "redux";
import { Map, List, fromJS} from "immutable";
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';


import {actionType, create} from "./actions";
import { reducer } from "./reducers";
const {recipes, activeRecipe} = reducer;

const initState = require("./initial-state").store;


const App = combineReducers({
  recipes,
  activeRecipe
});

const store = createStore(App,
 {recipes: fromJS(initState.recipes), activeRecipe: fromJS(initState.activeRecipe)},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;