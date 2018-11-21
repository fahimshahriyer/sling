import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TimePicker } from "material-ui-pickers";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginRight: theme.spacing.unit * 4,
    width: 200
  }
});

class TimePickers extends Component {
  state = {
    selectedDate: new Date()
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate>
        <TimePicker
          className={classes.textField}
          autoOk
          label="12 hours"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
        />
        <TimePicker
          className={classes.textField}
          clearable
          ampm={false}
          label="24 hours"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
        />
        <TimePicker
          className={classes.textField}
          showTodayButton
          todayLabel="now"
          label="With now button"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
        />
      </form>
    );
  }
}

TimePickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimePickers);
