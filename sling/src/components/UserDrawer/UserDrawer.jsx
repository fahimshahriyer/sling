import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Avatar,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Divider,
  Typography
} from "@material-ui/core";

import UserAvatar from "assets/img/avatar.svg";

const styles = theme => ({
  drawerPaper: {
    width: "264px",
    height: "100vh"
  },
  flex: {
    flex: 1
  },
  container: {
    padding: theme.spacing.unit * 3,
    paddingBottom: 0
  }
});
class UserDrawer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        variant="temporary"
        anchor="right"
        open={this.props.UserDrawer.open}
        onClose={this.props.closeUserDrawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
          <ListItem>
            <Avatar src={UserAvatar} />
            <ListItemText
              primary="Jonathon Morris"
              secondary="jonathon@gmail.com"
            />
          </ListItem>
        </List>
        <Divider />
        <div className={classes.container}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Your Balance
          </Typography>
          <Typography
            variant="display1"
            color="textPrimary"
            gutterBottom
            component="h1"
          >
            $ 158{" "}
          </Typography>
        </div>
        <List subheader={<ListSubheader>Account</ListSubheader>} dense>
          <ListItem button>
            <Icon color="action">account_circle</Icon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <Icon color="action">settings</Icon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <Icon color="action">help_outline</Icon>
            <ListItemText primary="Help" />
          </ListItem>
          <ListItem button>
            <Icon color="action">feedback</Icon>
            <ListItemText primary="Send Feedback" />
          </ListItem>

          <ListItem button>
            <Icon color="action">input</Icon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}
UserDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  UserDrawer: state.UserDrawer
});

const mapDispatchToProps = dispatch => ({
  closeUserDrawer: () =>
    dispatch({
      type: "CLOSE_USER_DRAWER"
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UserDrawer));
