import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { PageTitle } from "components";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

function SimpleBadge(props) {
  const { classes } = props;
  return (
    <div>
      <PageTitle
        title="Badge"
        subtitle="Badge generates a small badge to the top-right of its child(ren)."
      />
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.marginBottom}
      >
        Learn more about Material UI Badges{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/demos/badges/"
        >
          here.
        </a>
      </Typography>
      <Card>
        <CardHeader title="Simple Badge" />
        <CardContent>
          <div>
            <Badge className={classes.margin} badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
            <Badge
              className={classes.margin}
              badgeContent={10}
              color="secondary"
            >
              <MailIcon />
            </Badge>
            <IconButton
              aria-label="4 pending messages"
              className={classes.margin}
            >
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
            </IconButton>
          </div>
          <AppBar position="static" className={classes.margin}>
            <Tabs value={0}>
              <Tab
                label={
                  <Badge
                    className={classes.padding}
                    color="secondary"
                    badgeContent={4}
                  >
                    Item One
                  </Badge>
                }
              />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          <Badge color="primary" badgeContent={4} className={classes.margin}>
            <Typography className={classes.padding}>Typography</Typography>
          </Badge>
          <Badge color="primary" badgeContent={4} className={classes.margin}>
            <Button variant="contained">Button</Button>
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleBadge.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBadge);
