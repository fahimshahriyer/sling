import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import { defaultFont, headerHeight } from "assets/jss/variables";
import Logo from "assets/img/logo.svg";

const styles = theme => ({
  logo: {
    ...defaultFont,
    position: "relative",
    minHeight: headerHeight,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.unit * 2,
    letterSpacing: "2px",
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  logoImage: {
    width: "30px",
    display: "inline-block",
    maxHeight: "30px",
    marginLeft: "10px",
    marginRight: "15px"
  },
  logoText: {
    fontSize: "18px",
    textTransform: "uppercase",
    marginLeft: "8px",
    color: theme.palette.text.primary
  }
});

const Brand = props => {
  const { classes } = props;
  return (
    <ButtonBase className={classes.logo} component={Link} to="/dashboard">
      <img src={Logo} alt="Logo" className={classes.logoImage} />
      <span className={classes.logoText}>Sling Admin</span>
    </ButtonBase>
  );
};

Brand.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Brand);
