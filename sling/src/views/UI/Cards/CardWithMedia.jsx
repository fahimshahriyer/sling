import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Berlin from "assets/img/berlin.jpeg";

const styles = theme => ({
  card: {
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

function CardWithMedia(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        height="200"
        image={Berlin}
        title="Contemplative Reptile"
      />
      <CardHeader title="Berlin" subheader="2 Sep, 2018" />
      <CardContent>
        <Typography component="p">
          View over the River Spree to Nikolaiviertel and Alexanderplatz. The
          Nikolaiviertel is the reconstructed historical heart of the German
          capital Berlin. The Nikolaikirche (Saint Nicholas Church) gives its
          name to the neighbourhood five minutes away from Alexanderplatz. The
          Alexanderplatz is a large public square and transport hub in the
          central Mitte district of Berlin.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

CardWithMedia.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardWithMedia);
