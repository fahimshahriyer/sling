import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { PageTitle } from "components";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3
  }
});

const PaperSheet = props => {
  const { classes } = props;

  return (
    <div>
      <PageTitle
        title="Paper"
        subtitle="In Material Design, the physical properties of paper are translated to the screen."
      />
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.marginBottom}
      >
        The background of an application resembles the flat, opaque texture of a
        sheet of paper, and an application’s behavior mimics paper’s ability to
        be re-sized, shuffled, and bound together in multiple sheets.. Learn
        more about Material UI Paper{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/demos/paper/"
        >
          here.
        </a>
      </Typography>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Paper>
    </div>
  );
};

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(PaperSheet);
