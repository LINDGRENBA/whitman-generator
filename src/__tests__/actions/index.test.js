import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('poem title reducer actions', () => {

  it('requestPoemTitles should create REQUEST_POEM_TITLES action', () => {
    expect(actions.requestPoemTitles()).toEqual({
      type: c.REQUEST_POEM_TITLES
    });
  });

  it('getPoemTitlesSuccess should create a GET_POEM_TITLES_SUCCESS action', () => {
    const poemTitles = "Poem titles here";
    expect(actions.getPoemTitlesSuccess(poemTitles)).toEqual({
      type: c.GET_POEM_TITLES_SUCCESS,
      poemTitles
    });
  });

  it('getPoemTitlesFailure should create a GET_POEM_TITLES_FAILURE action', () => {
    const error = "Some errors";
    expect(actions.getPoemTitlesFailure(error)).toEqual({
      type: c.GET_POEM_TITLES_FAILURE,
      error
    });
  });


});

// GET_POEM_TITLES_FAILURE
// GET_POEM_TITLES_SUCCESS