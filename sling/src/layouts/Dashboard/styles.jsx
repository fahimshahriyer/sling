import { drawerWidth } from "assets/jss/variables";

const styles = theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: `${drawerWidth}px 1fr`,
    gridTemplateRows: "auto 1fr auto",
    gridTemplateAreas: "'sidebar header' 'sidebar content' 'sidebar footer'",
    [theme.breakpoints.down("md")]: {
      gridTemplateAreas: "'header header' 'content content' 'footer footer'"
    },
    minHeight: "100vh"
  },
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginTop: "70px",
    gridArea: "content",
    minWidth: 0,
    overflow: "hidden"
  }
});

export default styles;
