import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import Notifications from "@material-ui/icons/NotificationsTwoTone";
import SearchIcon from "@material-ui/icons/SearchTwoTone";
import UserAvatar from "assets/img/avatar.svg";
import ButtonBase from "@material-ui/core/ButtonBase";
import { drawerWidth, headerHeight } from "assets/jss/variables.jsx";

const styles = theme => ({
  root: {
    display: "grid",
    justifyContent: "center",
    gridArea: "header",
    backgroundColor: "#fff",
    flexGrow: 1
  },
  appBar: {
    height: headerHeight,
    justifyContent: "center",
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  flex: {
    flexGrow: 1
  },
  navIconHide: {
    visibility: "hidden",
    [theme.breakpoints.down("md")]: {
      visibility: "visible"
    }
  },
  avatar: {
    marginLeft: theme.spacing.unit * 2,
    width: 40,
    height: 40
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          color="inherit"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              className={classes.navIconHide}
              color="inherit"
              aria-label="open drawer"
              onClick={this.props.toggleSidebar}
            >
              <Menu />
            </IconButton>
            <div className={classes.flex} />
            <IconButton color="inherit" onClick={this.props.openSearchDialog}>
              <SearchIcon />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={this.props.openNotificationsDialog}
            >
              <Badge badgeContent={10} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <ButtonBase className={classes.avatar}>
              <Avatar
                alt="John Doespa"
                src={UserAvatar}
                onClick={this.props.openUserDrawer}
              />
            </ButtonBase>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  sidebar: state.sidebar
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch({ type: "TOGGLE_SIDEBAR" }),
  openSearchDialog: () => dispatch({ type: "OPEN_SEARCH_DIALOG" }),
  openNotificationsDialog: () =>
    dispatch({ type: "OPEN_NOTIFICATIONS_DIALOG" }),
  openUserDrawer: () => dispatch({ type: "OPEN_USER_DRAWER" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
