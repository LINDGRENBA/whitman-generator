import * as c from './../actions/ActionTypes';

const initialState = {
  error: null,
  isLoading: false,
  poemTitles: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_POEM_TITLES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_POEM_TITLES_SUCCESS:
      return Object.assign({}, state, {
        isLoaded: null,
        poemTitles: "not right"
      });
      default:
        return state;
    }
};
