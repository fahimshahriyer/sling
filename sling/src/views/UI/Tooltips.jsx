import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";
import { PageTitle } from "components";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3
  },
  container: {
    width: 500,
    margin: "0 auto"
  }
});

const Tooltips = props => {
  const { classes } = props;
  return (
    <div>
      <PageTitle
        title="Tooltips"
        subtitle="Tooltips display informative text when users hover over, focus on, or tap an element."
      />
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.marginBottom}
      >
        When activated, Tooltips display a text label identifying an element,
        such as a description of its function. Learn more about Material UI
        tooltips{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/demos/tooltips/"
        >
          here.
        </a>
      </Typography>
      <Card className={classes.marginBottom}>
        <CardHeader title="Simple Tooltips" />
        <CardContent>
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add">
            <Button
              variant="fab"
              color="primary"
              aria-label="Add"
              className={classes.fab}
            >
              <AddIcon />
            </Button>
          </Tooltip>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Positioned Tooltips" />
        <CardContent>
          <div className={classes.container}>
            <Grid container justify="center">
              <Grid item>
                <Tooltip title="Add" placement="top-start">
                  <Button>top-start</Button>
                </Tooltip>
                <Tooltip title="Add" placement="top">
                  <Button>top</Button>
                </Tooltip>
                <Tooltip title="Add" placement="top-end">
                  <Button>top-end</Button>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={6}>
                <Tooltip title="Add" placement="left-start">
                  <Button>left-start</Button>
                </Tooltip>
                <br />
                <Tooltip title="Add" placement="left">
                  <Button>left</Button>
                </Tooltip>
                <br />
                <Tooltip title="Add" placement="left-end">
                  <Button>left-end</Button>
                </Tooltip>
              </Grid>
              <Grid
                item
                container
                xs={6}
                alignItems="flex-end"
                direction="column"
                spacing={0}
              >
                <Grid item>
                  <Tooltip title="Add" placement="right-start">
                    <Button>right-start</Button>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Add" placement="right">
                    <Button>right</Button>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Add" placement="right-end">
                    <Button>right-end</Button>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item>
                <Tooltip title="Add" placement="bottom-start">
                  <Button>bottom-start</Button>
                </Tooltip>
                <Tooltip title="Add" placement="bottom">
                  <Button>bottom</Button>
                </Tooltip>
                <Tooltip title="Add" placement="bottom-end">
                  <Button>bottom-end</Button>
                </Tooltip>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

Tooltips.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tooltips);
