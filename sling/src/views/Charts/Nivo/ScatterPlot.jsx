import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import data from "./scatterdata.js";
const styles = theme => ({
  container: {
    height: "100%"
  }
});

class BarChart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <ResponsiveScatterPlot
          data={data}
          margin={{
            top: 24,
            right: 24,
            bottom: 60,
            left: 90
          }}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "weight",
            legendPosition: "center",
            legendOffset: 46
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "size",
            legendPosition: "center",
            legendOffset: -60
          }}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
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
            },
            grid: {
              stroke: "#ccc",
              strokeWidth: 1,
              strokeDasharray: "6 6"
            }
          }}
        />
      </div>
    );
  }
}

BarChart.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BarChart);
