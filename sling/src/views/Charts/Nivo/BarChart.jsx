import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ResponsiveBar } from "@nivo/bar";

const styles = theme => ({
  container: {
    height: "100%"
  }
});

// Graph Data
const data = [
  { country: "AD", visitor: 30 },
  { country: "AE", visitor: 26 },
  { country: "AF", visitor: 177 },
  { country: "AG", visitor: 147 },
  { country: "AI", visitor: 49 },
  { country: "AL", visitor: 73 },
  { country: "AM", visitor: 145 }
];

class BarChart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <ResponsiveBar
          data={data}
          keys={["visitor"]}
          indexBy="country"
          margin={{
            top: 0,
            right: 24,
            bottom: 60,
            left: 60
          }}
          padding={0.3}
          colors="#5b6dff"
          borderColor="inherit:darker(1.6)"
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "center",
            legendOffset: 36
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "visitor",
            legendPosition: "center",
            legendOffset: -40
          }}
          enableLabel={false}
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
