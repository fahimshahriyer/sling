import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ResponsivePie } from "@nivo/pie";

const styles = theme => ({
  container: {
    height: "100%"
  }
});

// Graph Data
const data = [
  {
    id: "Solved",
    label: "Solved",
    value: 70
  },
  {
    id: "Pending",
    label: "Pending",
    value: 30
  }
];

class Issues extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <ResponsivePie
          data={data}
          margin={{
            top: 24,
            right: 24,
            bottom: 96,
            left: 24
          }}
          innerRadius={0.7}
          padAngle={0.7}
          cornerRadius={0}
          colors={["#5b6dff", "#969bff"]}
          colorBy="id"
          borderWidth={0}
          borderColor="inherit:darker(0.2)"
          enableRadialLabels={true}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#303880"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={8}
          radialLabelsLinkHorizontalLength={8}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor="inherit"
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#ffffff"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              itemDirection: "top-to-bottom",
              translateY: 56,
              itemWidth: 70,
              itemHeight: 24,
              itemTextColor: "#999",
              symbolSize: 15,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000"
                  }
                }
              ]
            }
          ]}
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

Issues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Issues);
