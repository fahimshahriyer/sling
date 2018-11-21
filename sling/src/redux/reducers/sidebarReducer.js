const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";

const initialState = {
  mobileOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, {
        mobileOpen: !state.mobileOpen
      });
    case CLOSE_SIDEBAR:
      return Object.assign({}, state, {
        mobileOpen: false ? true : false
      });
    default:
      return state;
  }
};
