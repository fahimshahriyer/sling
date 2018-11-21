import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { PageTitle } from "components";
import { Grid, Typography } from "@material-ui/core";
import SimpleCard from "./Cards/SimpleCard";
import CardWithMedia from "./Cards/CardWithMedia";
import CardWithInteraction from "./Cards/CardWithInteraction";
import MediaControlCard from "./Cards/MediaControlCard";

const styles = theme => ({
  card: {
    marginBottom: theme.spacing.unit * 3
  },
  margin: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 3
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover"
  }
});
class Cards extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Cards"
          subtitle="Cards contain content and actions about a single subject."
        />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.marginBottom}
        >
          Cards are surfaces that display content and actions on a single topic.
          They should be easy to scan for relevant and actionable information.
          Elements, like text and images, should be placed on them in a way that
          clearly indicates hierarchy. Learn more about Material UI Cards{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/demos/cards/"
          >
            here.
          </a>
        </Typography>
        <Typography variant="headline" className={classes.margin}>
          Basic Cards
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} lg={4}>
            <SimpleCard />
            <MediaControlCard />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CardWithMedia />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CardWithInteraction />
          </Grid>
        </Grid>
      </div>
    );
  }
}
Cards.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Cards);
