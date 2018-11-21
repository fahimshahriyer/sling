import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";

const styles = theme => ({
  card: {
    marginBottom: theme.spacing.unit * 3
  }
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardHeader title="New York" subheader="1 Sep, 2018" />
      <CardContent>
        <Typography component="p">
          New York City comprises 5 boroughs sitting where the Hudson River
          meets the Atlantic Ocean. At its core is Manhattan, a densely
          populated borough that’s among the world’s major commercial, financial
          and cultural centers. Its iconic sites include skyscrapers such as the
          Empire State Building and sprawling Central Park. Broadway theater is
          staged in neon-lit Times Square.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
