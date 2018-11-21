const OPEN_SEARCH_DIALOG = "OPEN_SEARCH_DIALOG";
const CLOSE_SEARCH_DIALOG = "CLOSE_SEARCH_DIALOG";

const initialState = {
  open: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SEARCH_DIALOG:
      return Object.assign({}, state, {
        open: true
      });
    case CLOSE_SEARCH_DIALOG:
      return Object.assign({}, state, {
        open: false
      });
    default:
      return state;
  }
};
