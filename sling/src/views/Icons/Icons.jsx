import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { PageTitle, Icon } from "components";
import IconNames from "./IconsNames";
import { ButtonBase, Tooltip } from "@material-ui/core";

const styles = theme => ({
  item: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit,
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius
  }
});

class Icons extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <PageTitle
          title="Custom Icons"
          subtitle="Sling comes loaded with 265 beautiful custom SVG uniquely designed for this app only."
        />
        {IconNames.map((icon, key) => {
          return (
            <Tooltip title={icon} placement="top" key={key}>
              <ButtonBase className={classes.item}>
                <Icon name={icon} size={36} />
              </ButtonBase>
            </Tooltip>
          );
        })}
      </div>
    );
  }
}
Icons.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Icons);
