import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import sprite from "./sprite.svg";

const styles = theme => ({
  root: {
    display: "inline"
  }
});
class Icon extends Component {
  render() {
    const { classes, name, size, color } = this.props;
    return (
      <svg className={classes.root} width={size} height={size} fill={color}>
        <use xlinkHref={`${sprite}#${name}`} />
      </svg>
    );
  }
}
Icon.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
};
Icon.defaultProps = {
  size: 24,
  color: "#303880"
};
export default withStyles(styles)(Icon);
