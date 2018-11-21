import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { DatePicker } from "material-ui-pickers";

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

class DatePickers extends Component {
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
        <DatePicker
          className={classes.textField}
          label="Basic example"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          animateYearScrolling
        />
        <DatePicker
          className={classes.textField}
          autoOk
          label="Clearable"
          clearable
          disableFuture
          maxDateMessage="Date must be less than today"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
        />
        <DatePicker
          className={classes.textField}
          label="With today button"
          showTodayButton
          maxDateMessage="Date must be less than today"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
        />
      </form>
    );
  }
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DatePickers);
