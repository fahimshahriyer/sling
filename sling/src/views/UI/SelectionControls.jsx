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
import CheckBoxes from "./SelectionControls/Checkboxes";
import CheckBoxesWithFormGroup from "./SelectionControls/CheckBoxesWithFormGroup";
import RadioButtons from "./SelectionControls/RadioButtons";
import Switches from "./SelectionControls/Switches";

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

class SelectionControls extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Selection Controls"
          subtitle="Selection controls allow the user to select options."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Selection controls allow users to complete tasks that involve making
          choices such as selecting options, or switching settings on or off.
          Selection controls are found on screens that ask users to make
          decisions or declare preferences such as settings or dialogs. Learn
          more about Material UI Selection Controls{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/selection-controls/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Checkboxes" />
              <CardContent>
                <CheckBoxes />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Checkboxes with Form Control" />
              <CardContent>
                <CheckBoxesWithFormGroup />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Radio Buttons" />
              <CardContent>
                <RadioButtons />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Switches" />
              <CardContent>
                <Switches />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
SelectionControls.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SelectionControls);
