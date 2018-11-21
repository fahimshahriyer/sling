import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Icon
} from "@material-ui/core";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";
import { PageTitle } from "components";
import UserAvatar from "assets/img/avatar.svg";

const styles = theme => ({
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  },
  pinkAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: pink[500]
  },
  greenAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: green[500]
  }
});

class Avatars extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Avatars"
          subtitle="Avatars are found throughout material design with uses in everything from tables to dialog menus."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Learn more about Material UI Avatars{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/avatars/"
          >
            here.
          </a>
        </Typography>
        <Card className={classes.marginBottom}>
          <CardHeader title="Image avatars" />
          <CardContent>
            <div className={classes.row}>
              <Avatar
                alt="Remy Sharp"
                src={UserAvatar}
                className={classes.avatar}
              />
              <Avatar
                alt="Adelle Charles"
                src={UserAvatar}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            </div>
          </CardContent>
        </Card>
        <Card className={classes.marginBottom}>
          <CardHeader title="Icon Avatars" />
          <CardContent>
            <div className={classes.row}>
              <Avatar className={classes.avatar}>
                <Icon>folder</Icon>
              </Avatar>
              <Avatar className={classes.pinkAvatar}>
                <Icon>pageview</Icon>
              </Avatar>
              <Avatar className={classes.greenAvatar}>
                <Icon>assignment</Icon>
              </Avatar>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Letter Avatars" />
          <CardContent>
            <div className={classes.row}>
              <Avatar className={classes.avatar}>A</Avatar>
              <Avatar className={classes.pinkAvatar}>H</Avatar>
              <Avatar className={classes.greenAvatar}>Z</Avatar>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Avatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Avatars);
