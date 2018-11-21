import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import Footer from "components/Footer/Footer";
import SearchDialog from "components/SearchDialog/SearchDialog";
import NotificationsDialog from "components/NotificationsDialog/NotificationsDialog";
import UserDrawer from "components/UserDrawer/UserDrawer";

import dashboardRoutes from "routes/dashboard";
import Items from "config/_nav";
import styles from "./styles";

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((route, idx) => {
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

class Dashboard extends Component {
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <Sidebar items={Items} {...rest} />
        <Header />
        <NotificationsDialog />
        <UserDrawer />
        <SearchDialog />
        <main className={classes.content}>{switchRoutes}</main>
        <Footer />
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  sidebar: state.sidebar
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Dashboard));
