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
      default:
        return state;
    }
};
