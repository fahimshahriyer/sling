import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ResponsiveSunburst } from "@nivo/sunburst";
import data from "./sunburstdata.js";
const styles = theme => ({
  container: {
    height: "100%"
  }
});

class Sunburst extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <ResponsiveSunburst
          data={data}
          margin={{
            top: 40,
            right: 20,
            bottom: 20,
            left: 20
          }}
          identity="name"
          value="loc"
          cornerRadius={2}
          borderWidth={1}
          borderColor="white"
          colors="nivo"
          colorBy="id"
          childColor="inherit"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          isInteractive={true}
          theme={{
            tooltip: {
              container: {
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                background: "rgba(34, 47, 62,1.0)",
                borderRadius: "4px",
                color: "#ffffff"
              }
            },
            labels: {
              textColor: "#ffffff"
            }
          }}
        />
      </div>
    );
  }
}

Sunburst.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sunburst);
