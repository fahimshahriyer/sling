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
import HorizontalLinearStepper from "./Steppers/HorizontalLinearStepper";
import VerticalLinearStepper from "./Steppers/VerticalLinearStepper";
import HorizontalNonLinearStepper from "./Steppers/HorizontalNonLinearStepper";
import HorizontalLinearAlternativeLabelStepper from "./Steppers/HorizontalLinearAlternativeLabelStepper";
import HorizontalNonLinearAlternativeLabelStepper from "./Steppers/HorizontalNonLinearAlternativeLabelStepper";
import HorizontalNonLinearStepperWithError from "./Steppers/HorizontalNonLinearStepperWithError";
import DotsMobileStepper from "./Steppers/DotsMobileStepper";
import ProgressMobileStepper from "./Steppers/ProgressMobileStepper";

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

class Steppers extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Steppers"
          subtitle="Steppers convey progress through numbered steps."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Steppers display progress through a sequence of logical and numbered
          steps. They may also be used for navigation. Steppers may display a
          transient feedback message after a step is saved. Learn more about
          Material UI Steppers{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/steppers/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Horizontal Linear" />
              <CardContent>
                <HorizontalLinearStepper />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Vertical Linear Stepper" />
              <CardContent>
                <VerticalLinearStepper />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Horizontal Non Linear" />
              <CardContent>
                <HorizontalNonLinearStepper />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Horizontal Linear - Alternative Label" />
              <CardContent>
                <HorizontalLinearAlternativeLabelStepper />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Horizontal Non Linear - Alternative Label" />
              <CardContent>
                <HorizontalNonLinearAlternativeLabelStepper />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Horizontal Non Linear - Error Step" />
              <CardContent>
                <HorizontalNonLinearStepperWithError />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Mobile Stepper - Dot" />
              <CardContent>
                <DotsMobileStepper />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Mobile Stepper - Progress" />
              <CardContent>
                <ProgressMobileStepper />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Steppers.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Steppers);
