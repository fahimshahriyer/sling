import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import LostInSpace from "assets/img/lostinspace.svg";

const styles = theme => ({
  container: {
    width: "100%",
    height: "100vh",
    padding: "32px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  artwork: {
    marginBottom: "48px",
    width: "150px"
  },
  marginBottom: {
    marginBottom: "36px"
  }
});
class Error500 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.artwork}>
            <img src={LostInSpace} alt="Lost In Space" />
          </div>
          <Typography variant="display3" color="textPrimary" gutterBottom>
            500
          </Typography>
          <Typography variant="headline" gutterBottom>
            Internal Server Error
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.marginBottom}
          >
            Something went wrong. Please try again later.
          </Typography>
          <Link to="/dashboard">
            <Button variant="contained" color="primary">
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
Error500.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Error500);
