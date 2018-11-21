import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ResponsiveStream } from "@nivo/stream";

const styles = theme => ({
  container: {
    height: "100%"
  }
});

// Graph Data
const data = [
  {
    Raoul: 33,
    Josiane: 55,
    Marcel: 122,
    René: 151,
    Paul: 190,
    Jacques: 43
  },
  {
    Raoul: 34,
    Josiane: 126,
    Marcel: 95,
    René: 118,
    Paul: 94,
    Jacques: 140
  },
  {
    Raoul: 180,
    Josiane: 130,
    Marcel: 190,
    René: 180,
    Paul: 182,
    Jacques: 36
  },
  {
    Raoul: 116,
    Josiane: 172,
    Marcel: 171,
    René: 132,
    Paul: 145,
    Jacques: 157
  }
];

class BarChart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <ResponsiveStream
          data={data}
          keys={["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]}
          margin={{
            top: 24,
            right: 8,
            bottom: 24,
            left: 24
          }}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 36
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: -40
          }}
          offsetType="none"
          fillOpacity={0.85}
          borderColor="#000"
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
