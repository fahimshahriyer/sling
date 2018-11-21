import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Chip
} from "@material-ui/core";
import {
  avatar_1,
  avatar_2,
  avatar_4,
  avatar_5,
  avatar_6,
  avatar_7,
  avatar_8,
  avatar_9
} from "assets/img/avatars/avatars";

const styles = theme => ({
  root: {},
  listContainer: {
    width: "100%",
    height: "500px",
    position: "relative",
    padding: "0 8px"
  },
  table: {
    minWidth: "100%",
    transition: "all 0.1s ease"
  },
  alignRight: {
    textAlign: "right",
    paddingRight: 0
  },
  rowHeader: {
    padding: "16px"
  },
  row: {
    padding: "16px",
    marginBottom: "8px",
    transition: "all 0.1s ease",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 2px 5px rgba(69,101,173,0.1)",
      transform: "translateY(-1px) scale(1.01)"
    }
  },
  nameWithAvatar: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    width: 35,
    height: 35,
    marginRight: theme.spacing.unit
  },
  alignEnd: {
    display: "flex",
    justifyContent: "flex-end"
  }
});

let id = 0;
function createData(avatar, name, country, referral, total) {
  id += 1;
  return { id, avatar, name, country, referral, total };
}

const data = [
  createData(avatar_4, "Leonard Hofstadter", "USA", "Organic", 340),
  createData(avatar_5, "Sheldon Cooper", "USA", "Organic", 375),
  createData(avatar_6, "Raj Koothrapali", "INDIA", "Organic", 450),
  createData(avatar_1, "Penny", "HEAVEN", "Adwards", 400),
  createData(avatar_7, "Howard Wolowitz", "SPACE", "Organic", 230),
  createData(avatar_8, "Joey Tribbiani", "USA", "Organic", 375),
  createData(avatar_9, "Chandler Bing", "USA", "Organic", 450),
  createData(avatar_2, "Rachel Green", "HEAVEN", "Organic", 300)
];

function RecentSales(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.rowHeader}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="caption" color="textSecondary">
                Name
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="caption" color="textSecondary">
                Country
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="caption" color="textSecondary">
                Referral
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="caption" color="textSecondary" align="right">
                Total (USD)
              </Typography>
            </Grid>
            <Grid item />
          </Grid>
        </div>
        {data.map(n => {
          return (
            <Paper elevation={0} className={classes.row} key={n.name}>
              <Grid container spacing={8} alignItems="center">
                <Grid item xs={4}>
                  <div className={classes.nameWithAvatar}>
                    <Avatar src={n.avatar} className={classes.avatar} />
                    <Typography variant="body2" component="span">
                      {n.name}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="caption">{n.country}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Chip variant="default" label={n.referral} color="primary" />
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2" align="right">
                    $ {n.total}
                  </Typography>
                </Grid>
                <Grid item xs={2} className={classes.alignEnd}>
                  <Button variant="text" size="small" color="primary">
                    Details
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}

RecentSales.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecentSales);
