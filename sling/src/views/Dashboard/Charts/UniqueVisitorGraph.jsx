import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ResponsiveLine } from "@nivo/line";

const styles = theme => ({
  container: {
    height: "250px"
  }
});

// Graph Data
const uniqueVisitors = [
  {
    id: "Unique Visitor",
    data: [
      { x: "SAT", y: 1100 },
      { x: "SUN", y: 1150 },
      { x: "MON", y: 1100 },
      { x: "TUE", y: 1200 },
      { x: "WED", y: 1100 },
      { x: "THU", y: 1150 },
      { x: "FRI", y: 1100 }
    ]
  }
];

class UniqueVisitorGraph extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <ResponsiveLine
          data={uniqueVisitors}
          margin={{
            top: 36,
            right: 12,
            bottom: 24,
            left: 16
          }}
          colors="#5b6dff"
          minY={1000}
          maxY={"auto"}
          stacked={true}
          curve="monotoneX"
          axisLeft={{ tickValues: [] }}
          enableGridY={false}
          lineWidth={3}
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          dotLabel="y"
          dotLabelYOffset={-12}
          enableArea={true}
          areaOpacity={0.08}
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

UniqueVisitorGraph.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UniqueVisitorGraph);
