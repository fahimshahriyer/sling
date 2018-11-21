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

import SimpleSelect from "./Selects/SimpleSelect";
import NativeSelect from "./Selects/NativeSelect";
import MultipleSelect from "./Selects/MultipleSelect";
import WithDialog from "./Selects/WithDialog";
import ControlledSelect from "./Selects/ControlledSelect";

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

class Selects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Selects"
          subtitle="Select components are used for collecting user provided information from a list of options."
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
            href="https://material-ui.com/demos/selects/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Simple Select" />
              <CardContent>
                <SimpleSelect />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Native Select" />
              <CardContent>
                <NativeSelect />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Multiple Select" />
              <CardContent>
                <MultipleSelect />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="With Select Dialog" />
              <CardContent>
                <WithDialog />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Controlled Select" />
              <CardContent>
                <ControlledSelect />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Selects.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Selects);
