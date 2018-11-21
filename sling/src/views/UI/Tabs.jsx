import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";
import { PageTitle, Container } from "components";
import SimpleTabs from "./Tabs/SimpleTabs";
import WrappedLabels from "./Tabs/WrappedLabels";
import DisabledTabs from "./Tabs/DisabledTabs";
import Centered from "./Tabs/Centered";
import Scrollable from "./Tabs/Scrollable";
import ForcedScroll from "./Tabs/ForcedScroll";
import PreventedScroll from "./Tabs/PreventedScroll";
import IconTabs from "./Tabs/IconTabs";

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});
class Tabs extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Tabs"
          subtitle="Tabs make it easy to explore and switch between different views."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Tabs organize and allow navigation between groups of content that are
          related and at the same level of hierarchy. Learn more about Material
          UI Tabs{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/tabs/"
          >
            here.
          </a>
        </Typography>
        <Container>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Simple Tabs" />
                <CardContent>
                  <SimpleTabs />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Wrappes Labels" />
                <CardContent>
                  <WrappedLabels />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Disabled Tab" />
                <CardContent>
                  <DisabledTabs />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Centered Tabs" />
                <CardContent>
                  <Centered />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Scrollable Tabs" />
                <CardContent>
                  <Scrollable />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Forced Scroll Buttons" />
                <CardContent>
                  <ForcedScroll />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Prevent Scroll Buttons" />
                <CardContent>
                  <PreventedScroll />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Icon Tabs" />
                <CardContent>
                  <IconTabs />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
Tabs.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Tabs);
