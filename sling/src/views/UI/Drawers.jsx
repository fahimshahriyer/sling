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

import TemporaryDrawer from "./Drawers/TemporaryDrawer";
import PermanentDrawer from "./Drawers/PermanentDrawer";
import ClippedDrawer from "./Drawers/ClippedDrawer";
import PersistentDrawer from "./Drawers/PersistentDrawer";
import MiniDrawer from "./Drawers/MiniDrawer";
import ResponsiveDrawer from "./Drawers/ResponsiveDrawer";

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

class Drawers extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Drawers"
          subtitle="Navigation drawers provide access to destinations in your app. Side sheets
           are surfaces containing supplementary content that are anchored to the left or right
           edge of the screen."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Learn more about Material UI Selects{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/drawers/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card className={classes.marginBottom}>
              <CardHeader title="Temporary Drawers" />
              <CardContent>
                <TemporaryDrawer />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="headline" className={classes.marginBottom}>
              Permanent drawer
            </Typography>
            <Card className={classes.marginBottom}>
              <PermanentDrawer />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="headline" className={classes.marginBottom}>
              Clipped drawer
            </Typography>
            <Card className={classes.marginBottom}>
              <ClippedDrawer />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="headline" className={classes.marginBottom}>
              Persistent drawer
            </Typography>
            <Card className={classes.marginBottom}>
              <PersistentDrawer />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="headline" className={classes.marginBottom}>
              Mini variant drawer
            </Typography>
            <Card className={classes.marginBottom}>
              <MiniDrawer />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="headline" className={classes.marginBottom}>
              Responsive drawer
            </Typography>
            <Card>
              <ResponsiveDrawer />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Drawers.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Drawers);
