import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  title: {
    marginBottom: "2.5rem"
  },
  subtitle: {
    marginTop: theme.spacing.unit,
    marginLeft: "2px"
  }
});
class PageTitle extends Component {
  render() {
    const { classes, title, subtitle } = this.props;
    return (
      <Typography
        variant="display1"
        color="textPrimary"
        className={classes.title}
      >
        {title}
        <Typography
          variant="subheading"
          color="textSecondary"
          component="span"
          className={classes.subtitle}
        >
          {subtitle}
        </Typography>
      </Typography>
    );
  }
}
PageTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};
export default withStyles(styles)(PageTitle);
