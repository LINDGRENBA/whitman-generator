import poemTitleReducer from '../../reducers/poem-title-reducer';
import * as c from './../../actions/ActionTypes';

describe('poemTitleReducer', () => {

  const defaultState = {
    error: null,
      isLoading: false,
      poemTitles: []
  };

  let action;

  test('should successfully return the default state if no action is passed into it', () => {
    expect(poemTitleReducer(defaultState, {type: null})).toEqual({
      error: null,
      isLoading: false,
      poemTitles: []
    });
  });

  test('requesting poem titles should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_POEM_TITLES
    };

    expect(poemTitleReducer(defaultState, action)).toEqual({
      error: null,
      isLoading: true,
      poemTitles: []
    });
  });

});