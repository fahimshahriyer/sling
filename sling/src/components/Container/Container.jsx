import React, { Component } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = {
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: props => props.width,
    padding: props => props.padding,
    width: "100%"
  }
};

class Container extends Component {
  render() {
    const { classes, children } = this.props;
    return <div className={classes.container}>{children}</div>;
  }
}

Container.defaultProps = {
  width: "100%"
};
Container.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};
export default injectSheet(styles)(Container);
