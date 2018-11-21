const OPEN_NOTIFICATIONS_DIALOG = "OPEN_NOTIFICATIONS_DIALOG";
const CLOSE_NOTIFICATIONS_DIALOG = "CLOSE_NOTIFICATIONS_DIALOG";

const initialState = {
  open: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NOTIFICATIONS_DIALOG:
      return Object.assign({}, state, {
        open: true
      });
    case CLOSE_NOTIFICATIONS_DIALOG:
      return Object.assign({}, state, {
        open: false
      });
    default:
      return state;
  }
};
