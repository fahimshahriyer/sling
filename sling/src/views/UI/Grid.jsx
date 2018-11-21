import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { PageTitle } from "components";
import { Grid, Typography } from "@material-ui/core";
import Spacing from "./Grids/Spacing";
import BasicGrid from "./Grids/BasicGrid";
import FullWidthGrid from "./Grids/FullWidthGrid";

const styles = theme => ({});
class Grids extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Grid"
          subtitle="The Material Design responsive layout grid adapts to screen size and
          orientation, ensuring consistency across layouts."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Learn more about Material UI Grids{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/layout/grid/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Spacing />
          </Grid>
          <Grid item xs={12}>
            <BasicGrid />
          </Grid>
          <Grid item xs={12}>
            <FullWidthGrid />
          </Grid>
        </Grid>
      </div>
    );
  }
}
Grids.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Grids);
