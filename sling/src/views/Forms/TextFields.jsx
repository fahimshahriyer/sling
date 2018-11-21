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
import RegularTextFields from "./TextFields/RegularTextFields";
import ComposedTextField from "./TextFields/ComposedTextField";
import Outlined from "./TextFields/Outlined";
import FormattedInputs from "./TextFields/FormattedInputs";
import InputAdornments from "./TextFields/InputAdornments";
import Inputs from "./TextFields/Inputs";
import InputWithIcon from "./TextFields/InputWithIcon";
import TextFieldMargins from "./TextFields/TextFieldMargins";

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

class TextFields extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Text Fields"
          subtitle="Text fields let users enter and edit text."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Text fields allow users to enter text into a UI. They typically appear
          in forms and dialogs. Learn more about Material UI Text Fields{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/text-fields/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Regular Textfields" />
              <CardContent>
                <RegularTextFields />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Outlined" />
              <CardContent>
                <Outlined />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Components" />
              <CardContent>
                <ComposedTextField />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Formatted Inputs" />
              <CardContent>
                <FormattedInputs />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Input Adornments" />
              <CardContent>
                <InputAdornments />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Inputs" />
              <CardContent>
                <Inputs />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Input with Icon" />
              <CardContent>
                <InputWithIcon />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Layout" />
              <CardContent>
                <TextFieldMargins />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(TextFields);
