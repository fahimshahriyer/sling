import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader
} from "@material-ui/core";
import { PageTitle, Trend } from "components";
import UniqueVisitorGraph from "./Charts/UniqueVisitorGraph";
import Issues from "./Charts/Issues";
import RecentSales from "./Tables/RecentSales";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  fullHeight: {
    height: "100%"
  },
  success: {
    color: theme.status.success
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  },
  margin: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 1
  },
  container: {
    height: "314px"
  }
});

export class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <PageTitle
          title="Dashboard"
          subtitle="Welcome Jonathon, here is an overview of your app"
        />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="caption" gutterBottom>
                  VIEW DEPTH
                </Typography>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <Typography variant="display1" color="textPrimary">
                      7.4
                    </Typography>
                    <Typography variant="caption" className={classes.success}>
                      +21%
                    </Typography>
                  </Grid>
                  <Grid item xs={8} className={classes.fullHeight}>
                    <Trend
                      data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 12]}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="caption" gutterBottom>
                  BOUNCE RATE
                </Typography>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <Typography variant="display1" color="textPrimary">
                      5.6
                    </Typography>
                    <Typography variant="caption" color="error">
                      -49%
                    </Typography>
                  </Grid>
                  <Grid item xs={8} className={classes.fullHeight}>
                    <Trend
                      variant="hot"
                      data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 10, 5.1]}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="caption" gutterBottom>
                  TIME ON SITE
                </Typography>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <Typography variant="display1" color="textPrimary">
                      6.9
                    </Typography>
                    <Typography variant="caption" className={classes.success}>
                      +17%
                    </Typography>
                  </Grid>
                  <Grid item xs={8} className={classes.fullHeight}>
                    <Trend
                      data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 5, 7]}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="caption" gutterBottom>
                  SALES RATE
                </Typography>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <Typography variant="display1" color="textPrimary">
                      12.5
                    </Typography>
                    <Typography variant="caption" className={classes.success}>
                      +35%
                    </Typography>
                  </Grid>
                  <Grid item xs={8} className={classes.fullHeight}>
                    <Trend
                      data={[5, 7, 4, 1, 8, 5, 10, 14, 1, 4, 1, 8, 2, 5, 14]}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card>
              <CardHeader title="Issues" />
              <div className={classes.container}>
                <Issues />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Card>
              <CardContent>
                <Typography variant="caption" color="textSecondary">
                  UNIQUE VISITORS
                </Typography>
                <Typography variant="display3" color="textPrimary">
                  1200
                </Typography>
                <UniqueVisitorGraph />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="headline" className={classes.margin}>
              Recent Sales
            </Typography>
            <RecentSales />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
