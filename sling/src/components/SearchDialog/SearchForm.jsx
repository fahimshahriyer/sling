import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  searchInput: {
    width: "100%",
    border: "none",
    height: 40,
    padding: "0 16px",
    fontSize: "18px",
    outline: "none",
    fontWeight: "300"
  }
});

class SearchForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus
            className={classes.searchInput}
            type="text"
            placeholder="Search for..."
          />
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SearchForm);
