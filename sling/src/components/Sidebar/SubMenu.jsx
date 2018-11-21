import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { NavLink, withRouter } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class SubMenu extends Component {
  state = {
    open: false
  };

  toggleMenu = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, childrens, parent } = this.props;
    return (
      <div>
        <ListItem
          onClick={this.toggleMenu}
          key={parent.name}
          className={classes.item}
        >
          <ListItemIcon className={classes.itemIcon}>
            {typeof parent.icon === "string" ? (
              <Icon>{parent.icon}</Icon>
            ) : (
              <parent.icon />
            )}
          </ListItemIcon>
          <ListItemText
            primary={parent.name}
            disableTypography
            className={classes.itemText}
          />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" dense disablePadding>
            {childrens.map((item, key) => {
              return (
                <NavLink
                  to={item.path}
                  key={item.name}
                  onClick={this.props.closeSidebar}
                  className={classes.itemLink}
                  activeClassName={classes.active}
                >
                  <ListItem
                    key={key}
                    className={classNames(classes.item, classes.children)}
                  >
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
        </Collapse>
      </div>
    );
  }
}

SubMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  childrens: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  sidebar: state.sidebar
});

const mapDispatchToProps = dispatch => ({
  closeSidebar: () => dispatch({ type: "CLOSE_SIDEBAR" })
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(SubMenu))
);
