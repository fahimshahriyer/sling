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
    id: "lisp",
    label: "lisp",
    value: 360,
    color: "hsl(304, 70%, 50%)"
  },
  {
    id: "ruby",
    label: "ruby",
    value: 291,
    color: "hsl(267, 70%, 50%)"
  },
  {
    id: "scala",
    label: "scala",
    value: 363,
    color: "hsl(92, 70%, 50%)"
  },
  {
    id: "hack",
    label: "hack",
    value: 456,
    color: "hsl(279, 70%, 50%)"
  },
  {
    id: "sass",
    label: "sass",
    value: 376,
    color: "hsl(336, 70%, 50%)"
  }
];

class BarChart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <ResponsivePie
          data={data}
          margin={{
            top: 40,
            right: 80,
            bottom: 80,
            left: 80
          }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors="nivo"
          colorBy="id"
          borderWidth={1}
          borderColor="inherit:darker(0.2)"
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor="inherit"
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#ffffff"
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
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: "ruby"
              },
              id: "dots"
            },
            {
              match: {
                id: "c"
              },
              id: "dots"
            },
            {
              match: {
                id: "go"
              },
              id: "dots"
            },
            {
              match: {
                id: "python"
              },
              id: "dots"
            },
            {
              match: {
                id: "scala"
              },
              id: "lines"
            },
            {
              match: {
                id: "lisp"
              },
              id: "lines"
            },
            {
              match: {
                id: "elixir"
              },
              id: "lines"
            },
            {
              match: {
                id: "javascript"
              },
              id: "lines"
            }
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              symbolSize: 18,
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
        />
      </div>
    );
  }
}

BarChart.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BarChart);
