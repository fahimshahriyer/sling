import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListSubheader,
  Dialog,
  Icon,
  Slide,
  Button
} from "@material-ui/core";
import { Container } from "components";
import Notification from "./Notification";
import notifications from "data/notifications";

const styles = theme => ({
  root: {
    background: theme.palette.background.default
  },
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  notificationList: {
    marginBottom: theme.spacing.unit * 5
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 2
  }
});

const Transition = props => {
  return <Slide direction="down" {...props} />;
};

class NotificationsDialog extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Dialog
        fullScreen
        open={this.props.NotificationsDialog.open}
        onClose={this.props.closeNotificationsDialog}
        TransitionComponent={Transition}
      >
        {/* Top toolbar */}
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.closeNotificationsDialog}
              aria-label="Close"
            >
              <Icon>arrow_back</Icon>
            </IconButton>
            <Container width="700px">
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Notifications
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <Container width="700px" padding="8px">
            {/* List of notifications */}
            <List className={classes.notificationList}>
              {notifications.map((notification, key) => {
                if (notification.subheader) {
                  return (
                    <ListSubheader component="div" disableSticky key={key}>
                      {notification.title}
                    </ListSubheader>
                  );
                }
                return (
                  <Notification
                    key={key}
                    variant={notification.variant}
                    title={notification.title}
                    timestamp={notification.timestamp}
                  />
                );
              })}
            </List>
            {/* Load More Button */}
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.marginBottom}
            >
              Show More
            </Button>
          </Container>
        </div>
      </Dialog>
    );
  }
}
NotificationsDialog.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  NotificationsDialog: state.NotificationsDialog
});

const mapDispatchToProps = dispatch => ({
  closeNotificationsDialog: () =>
    dispatch({ type: "CLOSE_NOTIFICATIONS_DIALOG" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NotificationsDialog));
