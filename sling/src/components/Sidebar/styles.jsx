import { drawerWidth, defaultFont } from "assets/jss/variables";

const styles = theme => ({
  root: {
    gridArea: "sidebar",
    position: "fixed"
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      position: "relative"
    },
    minHeight: "100vh",
    height: "100vh"
  },
  navWrapper: {
    padding: "16px 16px 16px 0"
  },
  subheader: {
    textTransform: "uppercase",
    fontSize: "11px",
    letterSpacing: "1.4px",
    color: theme.palette.text.disabled
  },
  itemLink: {
    textDecoration: "none",
    ...defaultFont,
    fontWeight: 500
  },
  item: {
    color: theme.palette.text.disabled,
    cursor: "pointer",
    marginBottom: "4px",
    borderBottomRightRadius: "20px 50%",
    borderTopRightRadius: "20px 50%",
    "&:hover": {
      backgroundColor: theme.palette.primary.lighter,
      "& $itemText": {
        color: theme.palette.primary.main
      },
      "& $itemIcon": {
        color: theme.palette.primary.main
      }
    }
  },
  itemIcon: {
    fontSize: "18px",
    marginRight: 0,
    color: theme.palette.text.secondary
  },
  itemText: {
    color: theme.palette.text.secondary,
    fontWeight: 500
  },
  children: {
    paddingLeft: theme.spacing.unit * 7.2,
    "& $itemText": {
      fontWeight: "400"
    }
  },
  active: {
    "& $item": {
      backgroundColor: theme.palette.primary.lighter
    },
    "& $itemText": {
      color: theme.palette.primary.main,
      fontWeight: 500
    },
    "& $itemIcon": {
      color: theme.palette.primary.main
    }
  }
});

export default styles;
