import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Divider,
  ExpansionPanelActions
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PageTitle } from "components";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div>
      <PageTitle
        title="Expansion Panel"
        subtitle="Expansion panels contain creation flows and allow lightweight editing of an element."
      />
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.marginBottom}
      >
        Learn more about Material UI Expansion Panels{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/demos/expansion-panels/"
        >
          here.
        </a>
      </Typography>
      <Card className={classes.marginBottom}>
        <CardHeader title="Simple Expansion Panels" />
        <CardContent>
          <div className={classes.root}>
            <ExpansionPanel elevation={1}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Expansion Panel 1
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Expansion Panel 2
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel disabled>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Disabled Expansion Panel
                </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Secondary heading and Columns" />
        <CardContent>
          <div className={classes.root}>
            <ExpansionPanel defaultExpanded>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Location</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}>
                    Select trip destination
                  </Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={classes.column}>
                  <Chip
                    label="Barbados"
                    className={classes.chip}
                    onDelete={() => {}}
                  />
                </div>
                <div className={classNames(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    Select your destination of choice
                    <br />
                    <a href="#sub-labels-and-columns" className={classes.link}>
                      Learn more
                    </a>
                  </Typography>
                </div>
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small">Cancel</Button>
                <Button size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleExpansionPanel);
