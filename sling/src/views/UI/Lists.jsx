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
import SimpleList from "./Lists/SimpleList";
import FolderList from "./Lists/FolderList";
import InsetList from "./Lists/InsetList";
import NestedList from "./Lists/NestedList";
import SelectedItem from "./Lists/SelectedItem";
import PinnedSubheaderList from "./Lists/PinnedSubheaderList";
import CheckboxList from "./Lists/CheckboxList";
import SwitchList from "./Lists/SwitchList";
import InteractiveList from "./Lists/InteractiveList";

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

class Lists extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Lists"
          subtitle="Lists are continuous, vertical indexes of text or images."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Lists are a continuous group of text or images. They are composed of
          items containing primary and supplemental actions, which are
          represented by icons and text. Learn more about Material UI List{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/lists/"
          >
            here.
          </a>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Simple List" />
              <CardContent>
                <SimpleList />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Folder List" />
              <CardContent>
                <FolderList />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Inset List" />
              <CardContent>
                <InsetList />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Nested List" />
              <CardContent>
                <NestedList />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Selected List Item" />
              <CardContent>
                <SelectedItem />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Pinned Subheader List" />
              <CardContent>
                <PinnedSubheaderList />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="List With Checkbox" />
              <CardContent>
                <CheckboxList />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="List With Switch" />
              <CardContent>
                <SwitchList />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Interactive" />
              <CardContent>
                <InteractiveList />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Lists.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Lists);
