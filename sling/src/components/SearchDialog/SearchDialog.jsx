import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Dialog,
  AppBar,
  Toolbar,
  Icon,
  IconButton,
  Fade
} from "@material-ui/core";
import Container from "components/Container/Container";
import Searchform from "./SearchForm";

const styles = theme => ({});

class SearchDialog extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <Dialog
        fullScreen
        open={this.props.SearchDialog.open}
        onClose={this.props.closeSearchDialog}
        TransitionComponent={Fade}
      >
        <AppBar color="inherit">
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.closeSearchDialog}
              aria-label="Close"
            >
              <Icon>arrow_back</Icon>
            </IconButton>
            <Container width="560px">
              <Searchform />
            </Container>
          </Toolbar>
        </AppBar>
      </Dialog>
    );
  }
}
SearchDialog.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  SearchDialog: state.SearchDialog
});

const mapDispatchToProps = dispatch => ({
  closeSearchDialog: () => dispatch({ type: "CLOSE_SEARCH_DIALOG" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SearchDialog));
