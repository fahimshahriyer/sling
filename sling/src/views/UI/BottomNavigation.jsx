import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Icon from "@material-ui/core/Icon";
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  Grid
} from "@material-ui/core";
import { PageTitle } from "components";

const styles = theme => ({
  root: {
    width: "100%"
  },
  container: {
    height: "200px"
  },
  row: {
    display: "flex",
    justifyContent: "center"
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <PageTitle
          title="Bottom Navigation"
          subtitle="Bottom navigation bars allow movement between primary destinations in an app."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Bottom navigation bars display three to five destinations at the
          bottom of a screen. Each destination is represented by an icon and an
          optional text label. When a bottom navigation icon is tapped, the user
          is taken to the top-level navigation destination associated with that
          icon. Learn more about Material UI Bottom navigation{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/bottom-navigation/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} lg={6}>
            <Card className={classes.root}>
              <CardHeader title="Title" />
              <CardContent className={classes.container}>
                <Typography variant="body1">
                  Bottom Navigation example in a card with label.
                </Typography>
              </CardContent>
              <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
              >
                <BottomNavigationAction
                  label="Recents"
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  label="Favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Nearby"
                  icon={<LocationOnIcon />}
                />
              </BottomNavigation>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card className={classes.root}>
              <CardHeader title="Title" />
              <CardContent className={classes.container}>
                <Typography variant="body1">
                  Bottom Navigation example in a card without label.
                </Typography>
              </CardContent>
              <BottomNavigation
                value={value}
                onChange={this.handleChange}
                className={classes.root}
              >
                <BottomNavigationAction
                  label="Recents"
                  value="recents"
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  label="Favorites"
                  value="favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Nearby"
                  value="nearby"
                  icon={<LocationOnIcon />}
                />
                <BottomNavigationAction
                  label="Folder"
                  value="folder"
                  icon={<Icon>folder</Icon>}
                />
              </BottomNavigation>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
