import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "components";
import {
  Typography,
  Grid,
  Card,
  CardActions,
  Button,
  CardContent
} from "@material-ui/core";

const styles = theme => ({
  plans: {
    marginTop: theme.spacing.unit * 4
  },
  media: {
    height: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  planTitle: {
    fontWeight: "500"
  },
  planSubtitle: {},
  pro: {
    "& $media": {
      backgroundColor: theme.palette.primary.main,
      height: "120px"
    },
    "& $planTitle": {
      color: "#ffffff !important"
    },
    "& $planSubtitle": {
      color: "#ffffff !important"
    }
  },
  planPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    margin: `${theme.spacing.unit * 3}px 0`
  }
});
const plans = [
  {
    title: "Starter",
    subheader: "Try all the good stuff",
    price: "0.00",
    features: [
      "Unlimited Publishing",
      "Custom domain",
      "Basic SSL",
      "Email support"
    ],
    buttonText: "Continue free",
    buttonVariant: "outlined"
  },
  {
    title: "Pro",
    subheader: "For the superheroes",
    price: "15.00",
    features: [
      "Unlimited projects",
      "Unlimited Publishing",
      "Custom domain",
      "Custom SSL",
      "Custom redirects",
      "Password protection",
      "24/7 support"
    ],
    buttonText: "Upgrade to Pro",
    buttonVariant: "contained"
  }
];

class Pricing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Container width="720px">
          <Typography
            variant="display1"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography
            variant="subheading"
            align="center"
            color="textSecondary"
            component="p"
          >
            Here is a demo of pricing plans table, we are planning on bringing
            more cool pricing plans layout in the next update so stay tuned.
          </Typography>
          <Grid
            container
            spacing={24}
            className={classes.plans}
            justify="center"
            alignItems="center"
          >
            {plans.map(plan => {
              return (
                <Grid
                  item
                  xs={12}
                  lg={6}
                  key={plan.title}
                  className={plan.title === "Pro" ? classes.pro : null}
                >
                  <Card>
                    <div className={classes.media}>
                      <Typography
                        variant="headline"
                        align="center"
                        className={classes.planTitle}
                      >
                        {plan.title}
                      </Typography>
                      <Typography
                        variant="subheading"
                        align="center"
                        className={classes.planSubtitle}
                      >
                        {plan.subheader}
                      </Typography>
                    </div>
                    <CardContent>
                      <CardContent>
                        <div className={classes.planPricing}>
                          <Typography variant="display2" color="textPrimary">
                            ${plan.price}
                          </Typography>
                          <Typography variant="title" color="textSecondary">
                            /mo
                          </Typography>
                        </div>
                        {plan.features.map(line => (
                          <Typography
                            variant="subheading"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </CardContent>
                      <CardActions className={classes.cardActions}>
                        <Button
                          fullWidth
                          variant={plan.buttonVariant}
                          color="primary"
                          size="large"
                        >
                          {plan.buttonText}
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}
Pricing.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Pricing);
