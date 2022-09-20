import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    p: 5
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "30px",
    minHeight: "100px",
    margin: "10px",
    marginLeft: theme.spacing(20),
    "&:hover": {
    borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo} >
          STUDENT MANAGEMENT SYSTEM
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}  >
            SIGN OUT
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;