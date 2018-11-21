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
import SimpleDialog from "./Dialogs/SimpleDialog";
import AlertDialog from "./Dialogs/AlertDialog";
import ConfirmationDialog from "./Dialogs/ConfirmationDialog";
import FormDialog from "./Dialogs/FormDialog";
import FullScreenDialog from "./Dialogs/FullScreenDialog";
import ResponsiveDialog from "./Dialogs/ResponsiveDialog";
import ScrollDialog from "./Dialogs/ScrollDialog";

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

class Dialogs extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Dialogs"
          subtitle="Dialogs inform users about a task and can contain critical information,
          require decisions, or involve multiple tasks."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          A Dialog is a type of modal window that appears in front of app
          content to provide critical information or ask for a decision. Dialogs
          disable all app functionality when they appear, and remain on screen
          until confirmed, dismissed, or a required action has been taken. Learn
          more about Material UI Dialogs{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/dialogs/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Simple Dialog" />
              <CardContent>
                <SimpleDialog />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Alert Dialog" />
              <CardContent>
                <AlertDialog />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Confirmation Dialog" />
              <CardContent>
                <ConfirmationDialog />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Form Dialog" />
              <CardContent>
                <FormDialog />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Fullscreen Dialog" />
              <CardContent>
                <FullScreenDialog />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Responsive Fullscreen Dialog" />
              <CardContent>
                <ResponsiveDialog />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Scrollable Dialog" />
              <CardContent>
                <ScrollDialog />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Dialogs.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Dialogs);
