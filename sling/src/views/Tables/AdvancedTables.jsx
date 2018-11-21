import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SortableTable from "./SortableTable";
import CustomizedTable from "./CustomizedTable";
import CustomPaginationTable from "./CustomPaginationTable";

const styles = theme => ({
  root: {}
});
class AdvancedTables extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SortableTable />
        <CustomPaginationTable />
        <CustomizedTable />
      </div>
    );
  }
}
AdvancedTables.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AdvancedTables);
