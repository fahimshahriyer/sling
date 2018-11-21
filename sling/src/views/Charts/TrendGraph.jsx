import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { PageTitle, Trend } from "components";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";

const styles = theme => ({
  container: {
    height: "200px"
  }
});
class TrendGraph extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Trend Graphs"
          subtitle="Simple yet elegant trend graphs."
        />
        <Grid container spacing={24}>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Normal Trend" />
              <CardContent className={classes.container}>
                <Trend
                  data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 12]}
                  variant="normal"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Hot Trend" />
              <CardContent className={classes.container}>
                <Trend
                  data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 12]}
                  variant="hot"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
TrendGraph.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(TrendGraph);
