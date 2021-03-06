import { combineReducers, createStore } from "redux";
import { Map, fromJS } from "immutable";
import uuid from 'uuid';

import { actionType } from "./actions";
import { reducer } from "./reducers";
const {recipes, activeRecipe, isEditing, setFocusId } = reducer;

const initState = localStorage.getItem("reduxState") ?
  JSON.parse(localStorage.getItem("reduxState"))
  : require("./initial-state").store;


const App = combineReducers({
  recipes,
  isEditing,
  activeRecipe,
  focusId: setFocusId
});

const Reducer = (state = Map({}), action) => {
  switch (action.type) {
    case actionType.COPY_ACTIVE_RECIPE: {
      let newActive = state.recipes.get(action.id);
      let id = state.activeRecipe.get("id");

      if (!newActive) {
        newActive = state.recipes.first();
        id = state.recipes.keys[0];
      }
      return {
        isEditing: state.isEditing,
        focusId: state.focusId,
        recipes: state.recipes,
        activeRecipe: fromJS({ id: id, recipe: newActive })
      };
    }
    case actionType.EDIT_RECIPE: {
      const newRecipe = state.activeRecipe.get("recipe");
      const title = newRecipe.get("title");
      if (title == "") return state;

      return {
        isEditing: false,
        focusId: state.focusId,
        recipes: state.recipes.merge(fromJS({ [action.id]: state.activeRecipe.get("recipe") })),
        activeRecipe: state.activeRecipe
      };
    }
    case actionType.ADD_RECIPE: {
      const id = uuid.v4();
      const activeRecipe = {
        title: "",
        img: "",
        workflow: "",
        ingredients: []
      };
      return {
        isEditing: true,
        focusId: state.focusId,
        recipes: state.recipes,
        activeRecipe: fromJS({ id: id, recipe: activeRecipe })
      };
    }
    default: return App(state, action);
  }
};



const store = createStore(Reducer,
  {
    recipes: fromJS(initState.recipes),
    activeRecipe: fromJS(initState.activeRecipe),
    isEditing: fromJS(initState.isEditing),
    focusId: "#"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(fromJS(store.getState()).toJS()));
});

export default store;