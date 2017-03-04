import { reducer } from "../src/reducers";
import { Map, List, fromJS } from "immutable";

import { create, actionType } from "../src/actions";

describe("reducers", () => {
  let store;

  beforeEach(() => {
    store = { 0: {}, 111: {} };
  });

  it("should exist", () => {
    expect(reducer).toBeDefined();
  });

  describe("recipes", () => {
    it("should add recipe to array", () => {
      const recipes = fromJS({ "1": { title: "cheese" } });
      const newRecipe = fromJS({ title: "bread" });

      const expected = fromJS({ "1": { title: "cheese" }, "2": { title: "bread" } });
      const actual = reducer.recipes(recipes, create.addRecipe("2", newRecipe));

      expect(actual.size).toEqual(2);
    });

    it("should remove recipe from array", () => {
      const recipes = fromJS({ "1": { title: "cheese" }, "2": { title: "bread" } });
      const expected = fromJS({ "1": { title: "cheese" } });
      const actual = reducer.recipes(recipes, create.deleteRecipe("2"));

      expect(actual.size).toEqual(1);
    });

    it("should update recipe in array", () => {
      const recipes = fromJS({ "1": { title: "cheese" }, "2": { title: "bread" } });
      const newRecipe = fromJS({ title: "bread" });
      const id = "1";

      const expected = fromJS({ "1": { title: "bread" } , "2": { title: "bread" } });
      const actual = reducer.recipes(recipes, create.editRecipe(id, newRecipe));

      expect(actual).toEqual(expected);
    });

  });


  describe("activeRecipe", ()=> {
     it("should set active recipe", () => {
          const activeRecipe = fromJS({id: "1", recipe: {title: "cheese"}});
          const newId = "3";
          const newRecipe = {title: "Cake"};

          const expected = fromJS({id: newId, recipe: newRecipe});
          const actual = reducer.activeRecipe(activeRecipe, create.setActiveRecipe(newId, newRecipe));
     });

     it("should add new ingredient", () => {
        const activeRecipe = fromJS({id: "1", recipe: {title: "cheese", ingredients: [{"milk":2, "units": "kg"}]}});
        const ingredient = {"powder": 2, "units": "ml"};

        const expected = fromJS({id: "1", recipe: {title: "cheese", ingredients: [{"milk":2, "units": "kg"}, {"powder": 2, "units": "ml"}]}});
        const actual = reducer.activeRecipe(activeRecipe, create.addIngredient("1", ingredient));

        expect(actual.toJS()).toEqual(expected.toJS());
     });

     it("should remove ingredient", () => {
        const activeRecipe = fromJS({id: "1", recipe: {title: "cheese", ingredients: [{"milk":2, "units": "kg"}]}});
        const ingredient = {"milk":2, "units": "kg"};

        const expected = fromJS({id: "1", recipe: {title: "cheese", ingredients: []}});
        const actual = reducer.activeRecipe(activeRecipe, create.deleteIngredient("1", ingredient));

        expect(actual).toEqual(expected);
     });

     
  });

  describe("setActiveRecipe", () => {
    it("should set current active recipe id", () => {
      store = fromJS({ recipes: { "99": { title: "cheese" } }, activeRecipe: { id: 2, recipe: { title: "sausage" } } });
      const expected = fromJS({ recipes: { "99": { title: "cheese" } }, activeRecipe: { id: "99", recipe: { title: "cheese" } } });
      const action = create.setActiveRecipe("99");
      const actual = reducer.setActiveRecipe(store, action);

      expect(actual).toEqual(expected);
    });

    it("should return previous state given invalid parameters", () => {
      expect(reducer.setActiveRecipe(22, create.setActiveRecipe(-23))).toEqual(22);
    });
  });

  describe("addRecipe", () => {
    it("should add recipe to a store and update activeRecipe parameter", () => {
      const oldStore = fromJS({ recipes: { 1: { title: "cheese" }, 2: { title: "meat" } }, activeRecipe: { id: 1, recipe: { title: "cheese" } } });
      const recipe = fromJS({ title: "Cake" });

      const recipes = oldStore.get("recipes").mergeDeep(Map({ "3": recipe }));
      const expected = fromJS({ recipes: recipes, activeRecipe: { id: 33, recipe: recipe } });
      const actual = reducer.addRecipe(oldStore, create.addRecipe(recipe));

      expect(actual.get("recipes").contains(recipe)).toBe(true);
      expect(actual.get("activeRecipe").get("recipe")).toEqual(recipe);
    });
  });

  describe("deleteRecipe", () => {
    it("should delete recipe with a given id ", () => {
      const oldStore = fromJS({ recipes: { "1": { title: "cheese" } }, activeRecipe: { id: 1, recipe: { title: "cheese" } } });
      const newStore = reducer.deleteRecipe(oldStore, create.deleteRecipe("1"));
      expect(newStore.get("recipes").size).toEqual(0);
    });

    it("should do nothing  given invalid recipe id/key", () => {
      const oldStore = fromJS({ recipes: { "1": { title: "cheese" } }, activeRecipe: { id: "1", recipe: { title: "cheese" } } });

      const newStore = reducer.deleteRecipe(oldStore, create.deleteRecipe("non existing id"));

      expect(newStore).toEqual(oldStore);
    });
  });


  describe("editRecipe", () => {
    it("should edit existing recipe", () => {
      const oldStore = fromJS({
        recipes: { "1": { title: "cheese", ingredients: [{ "meat": "2", "units": "kg" }] } },
        activeRecipe: { id: "1", recipe: { title: "cheese", ingredients: [{ "meat": "2", "units": "kg" }] } }
      });

      const newRecipe = fromJS({ title: "cheese", ingredients: [{ "salt": "2", "units": "mg" }], workflow: "add some milk" });

      const expected = fromJS({
        recipes: { "1": { title: "cheese", ingredients: [{ "salt": "2", "units": "mg" }], workflow: "add some milk" } },
        activeRecipe: { id: "1", recipe: { title: "cheese", ingredients: [{ "salt": "2", "units": "mg" }], workflow: "add some milk" } }
      });

      expect(reducer.editRecipe(oldStore, create.editRecipe("1", newRecipe))).toEqual(expected);
    });
  });

  describe("addIngredient", () => {
    it("should update activeRecipe ingredients", () => {
      const activeRecipe = fromJS({ id: 2, recipe: { title: "bread", ingredients: [{ "milk": 2, units: "ml" }, { suger: 1, units: "spoon" }] } });
      const ingredient = { powder: 3, units: "kg" };

      const expected = fromJS({
        id: 2,
        recipe: {
          title: "bread",
          ingredients: [{ "milk": 2, units: "ml" }, { suger: 1, units: "spoon" }, { powder: 3, units: "kg" }]
        }
      });

      const actual = reducer.addIngredient(activeRecipe, create.addIngredient("2", ingredient));

      expect(actual.toJS()).toEqual(expected.toJS());
    });
  });

  describe("deleteIngredient", () => {
    it("should delete ingredient from activeRecipe", () => {
      const ingredient = fromJS({ "milk": 2, units: "ml" });
      const activeRecipe = fromJS({ id: 2, recipe: { title: "bread", ingredients: [{ "milk": 2, units: "ml" }, { suger: 1, units: "spoon" }] } });

      const expected = fromJS({ id: 2, recipe: { title: "bread", ingredients: [{ suger: 1, units: "spoon" }] } });
      const actual = reducer.deleteIngredient(activeRecipe, create.deleteIngredient("2", ingredient));

      expect(actual).toEqual(expected);
    });
  });

});