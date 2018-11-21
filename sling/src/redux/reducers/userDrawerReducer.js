const OPEN_USER_DRAWER = "OPEN_USER_DRAWER";
const CLOSE_USER_DRAWER = "CLOSE_USER_DRAWER";

const initialState = {
  open: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_USER_DRAWER:
      return Object.assign({}, state, {
        open: true
      });
    case CLOSE_USER_DRAWER:
      return Object.assign({}, state, {
        open: false
      });
    default:
      return state;
  }
};
