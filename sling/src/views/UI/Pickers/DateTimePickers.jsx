import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { DateTimePicker } from "material-ui-pickers";

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

class DateAndTimePickers extends Component {
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
        <DateTimePicker
          className={classes.textField}
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          label="DateTimePicker"
        />
        <DateTimePicker
          className={classes.textField}
          autoOk
          ampm={false}
          disableFuture
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          label="24h clock"
        />
        <DateTimePicker
          className={classes.textField}
          value={this.state.selectedDate}
          disablePast
          onChange={this.handleDateChange}
          label="With today button"
          showTodayButton
        />
      </form>
    );
  }
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DateAndTimePickers);
