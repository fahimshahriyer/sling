import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    display: "grid",
    gridArea: "footer",
    height: 64,
    padding: `0 ${theme.spacing.unit * 2}px`,
    alignItems: "center",
    textAlign: "center",
    borderTop: `1px solid ${theme.palette.divider}`,
    background: "#ffffff"
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="caption">
        <span>
          &copy; {1900 + new Date().getYear()} <a href="/dashboard">Sling</a>,
          made with love for a better web
        </span>
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
