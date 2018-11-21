import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Icon,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden
} from "@material-ui/core/";
import Scrollbar from "react-smooth-scrollbar";
import Brand from "./Brand";
import SubMenu from "./SubMenu";
import styles from "./styles";

class Sidebar extends React.Component {
  render() {
    const { classes, items } = this.props;
    const drawer = (
      <div>
        <List component="nav" dense>
          {items.map((item, key) => {
            if (item.subheader) {
              return (
                <ListSubheader
                  key={key}
                  disableSticky
                  className={classes.subheader}
                >
                  {item.name}
                </ListSubheader>
              );
            }
            if (item.childrens && item.childrens.length > 0) {
              return (
                <SubMenu parent={item} key={key} childrens={item.childrens} />
              );
            }
            return (
              <NavLink
                to={item.path}
                key={item.name}
                onClick={this.props.closeSidebar}
                className={classes.itemLink}
                activeClassName={classes.active}
              >
                <ListItem className={classes.item}>
                  <ListItemIcon className={classes.itemIcon}>
                    {typeof item.icon === "string" ? (
                      <Icon>{item.icon}</Icon>
                    ) : (
                      <item.icon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    disableTypography
                    className={classes.itemText}
                  />
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <Hidden lgUp>
          <Drawer
            variant="temporary"
            anchor="left"
            classes={{
              paper: classNames(classes.drawerPaper)
            }}
            open={this.props.sidebar.mobileOpen}
            onClose={this.props.toggleSidebar}
            ModalProps={{ keepMounted: true }}
          >
            <Brand />
            <Scrollbar continuousScrolling={false}>
              <div className={classes.navWrapper}>{drawer}</div>
            </Scrollbar>
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper)
            }}
            open={this.props.sidebar.mobileOpen}
            onClose={this.props.toggleSidebar}
            ModalProps={{ keepMounted: true }}
          >
            <Brand />
            <Scrollbar continuousScrolling={false} damping={0.2}>
              <div className={classes.navWrapper}>{drawer}</div>
            </Scrollbar>
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  sidebar: state.Sidebar
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch({ type: "TOGGLE_SIDEBAR" }),
  closeSidebar: () => dispatch({ type: "CLOSE_SIDEBAR" })
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Sidebar))
);
