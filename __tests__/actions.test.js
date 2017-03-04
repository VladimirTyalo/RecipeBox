import { create, actionType } from '../src/actions';

describe('create', () => {
  let recipe = {};
  let id = 1;

  beforeEach(() => {
    recipe = {};
    let id = 1;
  });

  test('action create object should exist', () => {
    expect(create).not.toBe(undefined);
  });

  test('addRecipe should return proper action', () => {

    expect(create.addRecipe(recipe)).toEqual({ type: actionType.ADD_RECIPE, recipe });
  });

  test('editRecipe', () => {

    expect(create.editRecipe(id, recipe)).toEqual({ type: actionType.EDIT_RECIPE, id: id, newRecipe: recipe });
  });

  test('deleteRecipe', () => {
    expect(create.deleteRecipe(id)).toEqual({ type: actionType.DELETE_RECIPE, id });
  });

  test('addIngredients', () => {
    const ingredient = { meat: '2', unit: 'kg' };
    expect(create.addIngredient(id, ingredient)).toEqual({ type: actionType.ADD_INGREDIENT, id, ingredient });
  });

  test('deleteIngredient', () => {
    const ingredient = { meat: '2', unit: 'kg' };
    expect(create.deleteIngredient(id, ingredient)).toEqual({ type: actionType.DELETE_INGREDIENT, id, ingredient });
  });

  test('setActiveRecipe', () => {
    expect(create.setActiveRecipe(id)).toEqual({ type: actionType.SET_ACTIVE_RECIPE, id });
  });

});
