import { act } from 'react-dom/test-utils';
import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('poem title reducer actions', () => {

  it('requestPoemTitles should create REQUEST_POEM_TITLES action', () => {
    expect(actions.requestPoemTitles()).toEqual({
      type: c.REQUEST_POEM_TITLES
    });
  });

  it('getPoemTitlesSuccess should create a GET_POEM_TITLES_SUCCESS action', () => {
    expect(actions.getPoemTitlesSuccess()).toEqual({
      type: c.GET_POEM_TITLES_SUCCESS
    });
  });

  it('getPoemTitlesFailure should create a GET_POEM_TITLES_FAILURE action', () => {
    expect(actions.getPoemTitlesFailure()).toEqual({
      type: c.GET_POEM_TITLES_FAILURE
    });
  });


});

// GET_POEM_TITLES_FAILURE
// GET_POEM_TITLES_SUCCESS