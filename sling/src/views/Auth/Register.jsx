import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  TextField,
  FormControl,
  FormGroup,
  Button,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "assets/img/logo.svg";

const styles = theme => ({
  container: {
    minHeight: "100vh",
    padding: "48px"
  },
  card: {
    maxWidth: "450px",
    margin: "0 auto",
    width: "100%",
    padding: "24px",
    boxShadow: "0px 0px 40px rgba(0,0,0,0.1)"
  },
  media: {
    padding: "15%",
    textAlign: "center"
  },
  marginTop: {
    marginTop: "24px"
  }
});

class RegisterPage extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardMedia className={classes.media}>
            <img src={Logo} alt="Logo" width="64" />
          </CardMedia>
          <CardContent>
            <Typography variant="headline" color="textPrimary" gutterBottom>
              Register
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <FormControl component="fieldset" fullWidth>
                <TextField
                  id="username"
                  label="Email Address"
                  placeholder="Enter email"
                  InputProps={{
                    disableUnderline: false
                  }}
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                />
                <TextField
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Enter password"
                  InputProps={{
                    disableUnderline: false
                  }}
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                />
                <TextField
                  id="confirm_password"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm password"
                  InputProps={{
                    disableUnderline: false
                  }}
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                />
                <FormGroup row className={classes.marginTop}>
                  <Link to="/dashboard">
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      Register
                    </Button>
                  </Link>
                </FormGroup>
              </FormControl>
            </form>
            <Typography color="textSecondary" className={classes.marginTop}>
              Already have an account?
              <Link to="/login"> Login</Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}
RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(RegisterPage);
