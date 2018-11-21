import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { PageTitle } from "components";
import UserAvatar from "assets/img/avatar.svg";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  },
  chip: {
    margin: theme.spacing.unit
  }
});

function handleDelete() {
  alert("You clicked the delete icon."); // eslint-disable-line no-alert
}

function handleClick() {
  alert("You clicked the Chip."); // eslint-disable-line no-alert
}

const Chips = props => {
  const { classes } = props;
  return (
    <div>
      <PageTitle
        title="Chips"
        subtitle="Chips are compact elements that represent an input, attribute, or action."
      />
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.marginBottom}
      >
        Learn more about Material UI Chips{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/demos/chips/"
        >
          here.
        </a>
      </Typography>
      <Card>
        <CardHeader title="Chip" />
        <CardContent>
          <div className={classes.root}>
            <Chip label="Basic Chip" className={classes.chip} />
            <Chip
              avatar={<Avatar>MB</Avatar>}
              label="Clickable Chip"
              onClick={handleClick}
              className={classes.chip}
            />
            <Chip
              avatar={<Avatar src={UserAvatar} />}
              label="Deletable Chip"
              onDelete={handleDelete}
              className={classes.chip}
            />
            <Chip
              avatar={
                <Avatar>
                  <FaceIcon />
                </Avatar>
              }
              label="Clickable Deletable Chip"
              onClick={handleClick}
              onDelete={handleDelete}
              className={classes.chip}
            />
            <Chip
              label="Custom delete icon Chip"
              onClick={handleClick}
              onDelete={handleDelete}
              className={classes.chip}
              deleteIcon={<DoneIcon />}
            />
            <Chip
              label="Clickable Link Chip"
              className={classes.chip}
              component="a"
              href="#chip"
              clickable
            />
            <Chip
              avatar={<Avatar>MB</Avatar>}
              label="Clickable Link Chip"
              clickable
              className={classes.chip}
              color="primary"
              onDelete={handleDelete}
              deleteIcon={<DoneIcon />}
            />
            <Chip
              label="Clickable Link Chip"
              onDelete={handleDelete}
              className={classes.chip}
              color="primary"
            />
            <Chip
              avatar={
                <Avatar>
                  <FaceIcon />
                </Avatar>
              }
              label="Clickable Link Chip"
              onDelete={handleDelete}
              className={classes.chip}
              color="secondary"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

Chips.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Chips);
