import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Avatar,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Tooltip
} from "@material-ui/core";
import Check from "@material-ui/icons/Check";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import DeleteIcon from "@material-ui/icons/Delete";

const variantIcon = {
  success: Check,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing.unit
  },
  default: {
    backgroundColor: "inherit"
  },
  success: {
    backgroundColor: theme.status.success
  },
  warning: {
    backgroundColor: theme.status.warning
  },
  error: {
    backgroundColor: theme.status.error
  },
  info: {
    backgroundColor: theme.status.info
  }
});

class Notification extends Component {
  render() {
    const { classes, variant, title, timestamp } = this.props;
    const Icon = variantIcon[variant];
    return (
      <ListItem button className={classes.root}>
        <Avatar className={classes[variant]}>
          <Icon />
        </Avatar>
        <ListItemText primary={title} secondary={timestamp} />
        <ListItemSecondaryAction>
          <Tooltip title="Dismiss" placement="top">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
};

export default withStyles(styles)(Notification);
