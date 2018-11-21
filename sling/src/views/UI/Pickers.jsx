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
import DatePickers from "./Pickers/DatePickers";
import TimePickers from "./Pickers/TimePickers";
import DateTimePickers from "./Pickers/DateTimePickers";
const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

class Pickers extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Pickers"
          subtitle="Pickers provide a simple way to select a single value from a pre-determined set."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Learn more about Material UI Pickers{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/pickers/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Date Picker" />
              <CardContent>
                <DatePickers />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Time Picker" />
              <CardContent>
                <TimePickers />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Date & Time Picker" />
              <CardContent>
                <DateTimePickers />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Pickers.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Pickers);
