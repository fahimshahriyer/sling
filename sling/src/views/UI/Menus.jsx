import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { PageTitle } from "components";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core";
import SimpleMenu from "./Menus/SimpleMenu";
import SelectedMenus from "./Menus/SelectedMenus";
import MaxHeightMenu from "./Menus/MaxHeightMenu";
import CustomizedMenuItem from "./Menus/CustomizedMenuItem";
import ChangeTransition from "./Menus/ChangeTransition";
const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});
class Menus extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Menus"
          subtitle="Menus display a list of choices on temporary surfaces."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          A Menu displays a list of choices on a temporary surface. They appear
          when users interact with a button, action, or other control. Learn
          more about Material UI Menus{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/menus/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Simple Menu" />
              <CardContent>
                <SimpleMenu />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Selected Menus" />
              <CardContent>
                <SelectedMenus />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Max Height Menus" />
              <CardContent>
                <MaxHeightMenu />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Customized MenuItem" />
              <CardContent>
                <CustomizedMenuItem />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Changed Transtions" />
              <CardContent>
                <ChangeTransition />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Menus.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Menus);
