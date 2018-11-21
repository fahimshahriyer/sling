import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { PageTitle } from "components";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  CardActions
} from "@material-ui/core";
import contacts from "data/users";

const styles = theme => ({
  flexWrapper: {
    display: "flex",
    alignItems: "flex-start",
    justifyItems: "center",
    overflow: "hidden"
  },
  itemWrapper: {
    textAlign: "center"
  },
  flex: {
    flexGrow: 1
  },
  avatar: {
    width: "56px",
    height: "56px",
    margin: `${theme.spacing.unit * 2}px auto`
  },
  marginTop: {
    marginTop: "16px"
  },
  marginBottom: {
    marginBottom: "16px"
  },
  filterFab: {
    position: "absolute",
    right: "32px",
    botttom: "32px"
  }
});
class Contacts extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.flexWrapper}>
          <PageTitle title="Contacts" subtitle="Your most recent contacts." />
          <div className={classes.flex} />

          <Button variant="contained" size="large" color="primary">
            New
          </Button>
        </div>
        <Grid container spacing={16} direction="row">
          {contacts.map(contact => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={contact.id}>
                <Card>
                  <CardContent>
                    <div className={classes.itemWrapper}>
                      <Avatar className={classes.avatar} src={contact.image} />
                      <Typography
                        variant="title"
                        className={classes.marginBottom}
                      >
                        {contact.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.marginBottom}
                        color="textSecondary"
                      >
                        {contact.job}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {contact.phone}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {contact.email}
                      </Typography>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Profile
                    </Button>
                    <div className={classes.flex} />
                    <Button
                      color="primary"
                      size="small"
                      className={classes.button}
                    >
                      Send Message
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
Contacts.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contacts);
