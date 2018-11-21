import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { PageTitle } from "components";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core";
import SimpleSnackbar from "./Snackbars/SimpleSnackbar";
import LongTextSnackbar from "./Snackbars/LongTextSnackbar";
import PositionedSnackbar from "./Snackbars/PositionedSnackbar";
import DirectionSnackbar from "./Snackbars/DirectionSnackbar";
import CustomizedSnackbar from "./Snackbars/CustomizedSnackbar";

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

class SnackBars extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Snackbars"
          subtitle="Snackbars provide brief messages about app processes through a
          message - typically at the bottom of the screen"
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Snackbars inform users of a process that an app has performed or will
          perform. They appear temporarily, towards the bottom of the screen.
          They shouldn’t interrupt the user experience, and they don’t require
          user input to disappear. Learn more about Material UI Snackbars{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/snackbars/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Simple Snackbar" />
              <CardContent>
                <SimpleSnackbar />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Snackbars with varying message length" />
              <CardContent>
                <LongTextSnackbar />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Positioned snackbars" />
              <CardContent>
                <PositionedSnackbar />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Different direction of the transition" />
              <CardContent>
                <DirectionSnackbar />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Customized snackbar" />
              <CardContent>
                <CustomizedSnackbar />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
SnackBars.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SnackBars);
