import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Card,
  Toolbar,
  Typography,
  Icon,
  IconButton,
  CardContent,
  CardHeader
} from "@material-ui/core";
import { PageTitle } from "components";

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class AppBarExample extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="App Bar"
          subtitle="The App Bar displays information and actions relating to the current
          screen."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          The top App Bar provides content and actions related to the current
          screen. It’s used for branding, screen titles, navigation, and
          actions. It can transform into a contextual action bar or used as a
          navbar. Learn more about Material UI AppBar{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/app-bar/"
          >
            here.
          </a>
        </Typography>
        <Card className={classes.marginBottom}>
          <CardHeader title="Simple App Bar" />
          <CardContent>
            <AppBar position="static" color="inherit">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Title
                </Typography>
              </Toolbar>
            </AppBar>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Appbar with Buttons" />
          <CardContent>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <Icon>menu</Icon>
                </IconButton>
                <Typography
                  variant="title"
                  color="inherit"
                  className={classes.flex}
                >
                  News
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </CardContent>
        </Card>
      </div>
    );
  }
}
AppBarExample.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AppBarExample);
