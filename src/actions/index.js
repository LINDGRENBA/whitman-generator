import * as c from './ActionTypes';

export const requestPoemTitles = () => ({
  type: c.REQUEST_POEM_TITLES
});

export const getPoemTitlesSuccess = (poemTitles) => ({
  type: c.GET_POEM_TITLES_SUCCESS,
  poemTitles
});

export const getPoemTitlesFailure = (error) => ({
  type: c.GET_POEM_TITLES_FAILURE,
  error
});