import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { PageTitle } from "components";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";
import BarChart from "./Nivo/BarChart";
import LineChart from "./Nivo/LineChart";
import PieChart from "./Nivo/PieChart";
import RadarChart from "./Nivo/RadarChart";
import StreamChart from "./Nivo/StreamChart";
import ScatterPlot from "./Nivo/ScatterPlot";
import Sunburst from "./Nivo/Sunburst";
const styles = theme => ({
  container: {
    height: "400px"
  }
});
class NivoCharts extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Charts"
          subtitle="Charts are often used to ease understanding of large quantities of data and the
          relationships between parts of the data. Charts can usually be read more quickly than the raw data.
          All these charts are genereted with the Awesome nivo chart library. Learn more about it here: http://nivo.rocks/"
        />
        <Grid container spacing={24}>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Bar Chart" />
              <CardContent className={classes.container}>
                <BarChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Line Chart" />
              <CardContent className={classes.container}>
                <LineChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Pie Chart" />
              <CardContent className={classes.container}>
                <PieChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Radar Chart" />
              <CardContent className={classes.container}>
                <RadarChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <CardHeader title="Scatter Plot" />
              <CardContent className={classes.container}>
                <ScatterPlot />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Stream Chart" />
              <CardContent className={classes.container}>
                <StreamChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Sunburst Chart" />
              <CardContent className={classes.container}>
                <Sunburst />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
NivoCharts.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NivoCharts);
