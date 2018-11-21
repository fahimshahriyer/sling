import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Icon,
  IconButton
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";
import { PageTitle } from "components";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  },
  input: {
    display: "none"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

function Buttons(props) {
  const { classes } = props;
  return (
    <div>
      <PageTitle
        title="Buttons"
        subtitle="Buttons allow users to take actions, and make choices, with a single tap."
      />
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.marginBottom}
      >
        Buttons communicate actions that users can take. They are typically
        placed throughout your UI, in places like: Dialogs, Modal, windows,
        Forms, Cards, Toolbars. Learn more about Material UI Buttons{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/demos/buttons/"
        >
          here.
        </a>
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Text Buttons" />
            <CardContent>
              <Button className={classes.button}>Default</Button>
              <Button color="primary" className={classes.button}>
                Primary
              </Button>
              <Button color="secondary" className={classes.button}>
                Secondary
              </Button>
              <Button disabled className={classes.button}>
                Disabled
              </Button>
              <Button href="#text-buttons" className={classes.button}>
                Link
              </Button>
              <input
                accept="image/*"
                className={classes.input}
                id="flat-button-file"
                multiple
                type="file"
              />
              <label htmlFor="flat-button-file">
                <Button component="span" className={classes.button}>
                  Upload
                </Button>
              </label>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Outlined" />
            <CardContent>
              <Button variant="outlined" className={classes.button}>
                Default
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Primary
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
              >
                Secondary
              </Button>
              <Button variant="outlined" disabled className={classes.button}>
                Disabled
              </Button>
              <Button
                variant="outlined"
                href="#outlined-buttons"
                className={classes.button}
              >
                Link
              </Button>
              <input
                accept="image/*"
                className={classes.input}
                id="outlined-button-file"
                multiple
                type="file"
              />
              <label htmlFor="outlined-button-file">
                <Button
                  variant="outlined"
                  component="span"
                  className={classes.button}
                >
                  Upload
                </Button>
              </label>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Contained" />
            <CardContent>
              <Button variant="contained" className={classes.button}>
                Default
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Primary
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Secondary
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disabled
                className={classes.button}
              >
                Disabled
              </Button>
              <Button
                variant="contained"
                href="#contained-buttons"
                className={classes.button}
              >
                Link
              </Button>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.button}
                >
                  Upload
                </Button>
              </label>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Floating Action Buttons" />
            <CardContent>
              <Button
                variant="fab"
                color="primary"
                aria-label="Add"
                className={classes.button}
              >
                <AddIcon />
              </Button>
              <Button
                variant="fab"
                color="secondary"
                aria-label="Edit"
                className={classes.button}
              >
                <Icon>edit_icon</Icon>
              </Button>
              <Button
                variant="extendedFab"
                aria-label="Delete"
                className={classes.button}
              >
                <NavigationIcon className={classes.extendedIcon} />
                Extended
              </Button>
              <Button
                variant="fab"
                disabled
                aria-label="Delete"
                className={classes.button}
              >
                <DeleteIcon />
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Sizes" />
            <CardContent>
              <div>
                <Button size="small" className={classes.button}>
                  Small
                </Button>
                <Button size="medium" className={classes.button}>
                  Medium
                </Button>
                <Button size="large" className={classes.button}>
                  Large
                </Button>
              </div>
              <div>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.button}
                >
                  Small
                </Button>
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  className={classes.button}
                >
                  Medium
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  className={classes.button}
                >
                  Large
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.button}
                >
                  Small
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className={classes.button}
                >
                  Medium
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.button}
                >
                  Large
                </Button>
              </div>
              <div>
                <Button
                  variant="fab"
                  mini
                  color="secondary"
                  aria-label="Add"
                  className={classes.button}
                >
                  <AddIcon />
                </Button>
                <Button
                  variant="fab"
                  color="secondary"
                  aria-label="Add"
                  className={classes.button}
                >
                  <AddIcon />
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Icon Buttons" />
            <CardContent>
              <IconButton className={classes.button} aria-label="Delete">
                <Icon>delete</Icon>
              </IconButton>
              <IconButton
                className={classes.button}
                aria-label="Delete"
                disabled
                color="primary"
              >
                <Icon>delete</Icon>
              </IconButton>
              <IconButton
                color="secondary"
                className={classes.button}
                aria-label="Add an alarm"
              >
                <Icon>alarm</Icon>
              </IconButton>
              <IconButton
                color="primary"
                className={classes.button}
                aria-label="Add to shopping cart"
              >
                <Icon>add_shopping_cart</Icon>
              </IconButton>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  className={classes.button}
                  component="span"
                >
                  <Icon>photo_camera</Icon>
                </IconButton>
              </label>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Buttons with Icons and Labels" />
            <CardContent>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Delete
                <DeleteIcon className={classes.rightIcon} />
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Send
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
              >
                Upload
                <Icon className={classes.rightIcon}>cloud_upload</Icon>
              </Button>
              <Button
                variant="contained"
                disabled
                color="secondary"
                className={classes.button}
              >
                <Icon className={classes.leftIcon}>keyboard_voice</Icon>
                Talk
              </Button>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
              >
                <Icon
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                >
                  save
                </Icon>
                Save
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Buttons);
