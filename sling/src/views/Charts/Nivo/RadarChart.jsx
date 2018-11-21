import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ResponsiveRadar } from "@nivo/radar";

const styles = theme => ({
  container: {
    height: "100%"
  }
});

// Graph Data
const data = [
  {
    taste: "fruity",
    chardonay: 113,
    carmenere: 42,
    syrah: 98
  },
  {
    taste: "bitter",
    chardonay: 112,
    carmenere: 85,
    syrah: 80
  },
  {
    taste: "heavy",
    chardonay: 81,
    carmenere: 116,
    syrah: 69
  },
  {
    taste: "strong",
    chardonay: 97,
    carmenere: 89,
    syrah: 83
  },
  {
    taste: "sunny",
    chardonay: 60,
    carmenere: 56,
    syrah: 54
  }
];

class BarChart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <ResponsiveRadar
          data={data}
          keys={["chardonay", "carmenere", "syrah"]}
          indexBy="taste"
          maxValue="auto"
          margin={{
            top: 70,
            right: 80,
            bottom: 40,
            left: 80
          }}
          curve="catmullRomClosed"
          borderWidth={2}
          borderColor="inherit"
          gridLevels={5}
          gridShape="circular"
          gridLabelOffset={36}
          enableDots={true}
          dotSize={8}
          dotColor="inherit"
          dotBorderWidth={0}
          dotBorderColor="#ffffff"
          enableDotLabel={false}
          colors="nivo"
          colorBy="key"
          fillOpacity={0.1}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          isInteractive={true}
          legends={[
            {
              anchor: "top-left",
              direction: "column",
              translateX: -50,
              translateY: -40,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: "#999",
              symbolSize: 12,
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

BarChart.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BarChart);
