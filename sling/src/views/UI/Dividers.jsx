import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {
  Avatar,
  Icon,
  Card,
  CardContent,
  CardHeader,
  Grid
} from "@material-ui/core";
import { PageTitle } from "components";

const styles = theme => ({
  root: {
    width: "100%"
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

function ListDividers(props) {
  const { classes } = props;
  return (
    <div>
      <PageTitle
        title="Dividers"
        subtitle="A divider is a thin line that groups content in lists and layouts."
      />
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.marginBottom}
      >
        Dividers separate content into clear groups.. Learn more about Material
        UI Dividers{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/demos/dividers/"
        >
          here.
        </a>
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} lg={6}>
          <Card className={classes.marginBottom}>
            <CardHeader title="List Dividers" />
            <CardContent>
              <div className={classes.root}>
                <List component="nav">
                  <ListItem button>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Trash" />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary="Spam" />
                  </ListItem>
                </List>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title="Inset Dividers" />
            <CardContent>
              <div className={classes.root}>
                <List>
                  <ListItem>
                    <Avatar>
                      <Icon>image</Icon>
                    </Avatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                  </ListItem>
                  <li>
                    <Divider inset />
                  </li>
                  <ListItem>
                    <Avatar>
                      <Icon>work</Icon>
                    </Avatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                  </ListItem>
                  <Divider inset component="li" />
                  <ListItem>
                    <Avatar>
                      <Icon>beach_access</Icon>
                    </Avatar>
                    <ListItemText
                      primary="Vacation"
                      secondary="July 20, 2014"
                    />
                  </ListItem>
                </List>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListDividers);
