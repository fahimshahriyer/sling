import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

function InsetList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText inset primary="Chelsea Otakan" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="Eric Hoffman" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="David Stephens" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="Bernie Stinson" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="Joey Tribbiani" />
        </ListItem>
      </List>
    </div>
  );
}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InsetList);
