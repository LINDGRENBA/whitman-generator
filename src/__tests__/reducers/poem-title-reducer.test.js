import poemTitleReducer from '../../reducers/poem-title-reducer';

describe('poemTitleReducer', () => {

  const defaultState = {
    error: null,
      isLoaded: false,
      poemTitles: []
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(poemTitleReducer(defaultState, {type: null})).toEqual({
      error: null,
      isLoaded: false,
      poemTitles: []
    });
  });

});