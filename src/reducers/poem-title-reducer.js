import * as c from './../actions/ActionTypes';

const initialState = {
  error: null,
  isLoaded: false,
  poemTitles: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_POEM_TITLES:
      return Object.assign({}, state, {
        isLoaded: true
      });
      default:
        return state;
    }
};
