import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Trend from "react-trend";

const styles = theme => ({
  root: {
    padding: `0 ${theme.spacing.unit}px`
  }
});
const gradients = {
  normal: ["#21D4FD", "#B721FF"],
  hot: ["#FEE140", "#FA709A"]
};

class TrendGraph extends Component {
  render() {
    const { classes, data, variant } = this.props;
    return (
      <div className={classes.root}>
        <Trend
          smooth
          autoDraw
          autoDrawDuration={3000}
          autoDrawEasing="ease-out"
          data={data}
          gradient={gradients[variant]}
          radius={13.3}
          strokeWidth={4}
          strokeLinecap={"round"}
        />
      </div>
    );
  }
}
TrendGraph.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(["normal", "hot"]).isRequired
};
TrendGraph.defaultProps = {
  variant: "normal"
};
export default withStyles(styles)(TrendGraph);
