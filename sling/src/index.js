import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import createHistory from "history/createBrowserHistory";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import configureStore from "./redux/store";
import theme from "assets/jss/theme";
import "assets/css/base.css";
import indexRoutes from "routes/index.jsx";
// Time Management for material ui pickers
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import MomentUtils from "material-ui-pickers/utils/moment-utils";

const history = createHistory();

const switchRoutes = (
  <Switch>
    {indexRoutes.map((route, idx) => {
      if (route.redirect)
        return <Redirect from={route.path} to={route.to} key={idx} />;
      return route.component ? (
        <Route
          key={idx}
          path={route.path}
          exact={route.exact}
          name={route.name}
          component={route.component}
        />
      ) : null;
    })}
  </Switch>
);

ReactDOM.render(
  <Provider store={configureStore()}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Router history={history}>{switchRoutes}</Router>
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById("root")
);
