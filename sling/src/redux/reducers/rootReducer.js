import { combineReducers } from "redux";
import Sidebar from "./sidebarReducer";
import SearchDialog from "./searchDialogReducer";
import NotificationsDialog from "./notificationsDialogReducer";
import UserDrawer from "./userDrawerReducer";

export default combineReducers({
  Sidebar,
  SearchDialog,
  NotificationsDialog,
  UserDrawer
});
