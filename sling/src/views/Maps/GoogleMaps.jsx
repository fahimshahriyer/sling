import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { PageTitle } from "components";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import GoogleMapReact from "google-map-react";

const styles = theme => ({
  mapContainer: {
    height: "500px"
  }
});
class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 40.748817,
      lng: -73.985428
    },
    zoom: 11
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle title="Google Map" />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Simple Map" />
              <CardContent className={classes.mapContainer}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: //"your google map api key"
                  }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
GoogleMaps.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(GoogleMaps);
