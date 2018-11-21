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
import CircularIndeterminate from "./Progress/CircularIndeterminate";
import Interactive from "./Progress/Interactive";
import CircularDeterminate from "./Progress/CircularDeterminate";
import CircularStatic from "./Progress/CircularStatic";
import LinearIndeterminate from "./Progress/LinearIndeterminate";
import LinearDeterminate from "./Progress/LinearDeterminate";
import LinearBuffer from "./Progress/LinearBuffer";
import LinearQuery from "./Progress/LinearQuery";

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

class Progress extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Progress"
          subtitle="Progress indicators express an unspecified wait time or display the length of a process."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Progress indicators inform users about the status of ongoing
          processes, such as loading an app, submitting a form, or saving
          updates. They communicate an app’s state and indicate available
          actions, such as whether users can navigate away from the current
          screen. Learn more about Material UI Progress{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/progress/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Circular Indeterminate" />
              <CardContent>
                <CircularIndeterminate />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Circular Determinate" />
              <CardContent>
                <CircularDeterminate />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Circular Static" />
              <CardContent>
                <CircularStatic />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Linear Indeterminate" />
              <CardContent>
                <LinearIndeterminate />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Linear Determinate" />
              <CardContent>
                <LinearDeterminate />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Linear Buffer" />
              <CardContent>
                <LinearBuffer />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Linear Query" />
              <CardContent>
                <LinearQuery />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Interactive" />
              <CardContent>
                <Interactive />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Progress.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Progress);
