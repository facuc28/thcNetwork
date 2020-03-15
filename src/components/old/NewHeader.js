import _ from "lodash";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  avatar: {
    color: "#121212",
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  navBar: {
    backgroundColor: "#1e272e"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  let user = {
    fullName:
      "Welcome " +
      _.get(props.user, "name", "User").concat(
        " ",
        _.get(props.user, "lastName", "")
      ),
    profilePic: _.get(
      props.user,
      "profilePic",
      "https://img.icons8.com/plasticine/2x/user.png"
    )
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12}>
        <Header user={user} />
        <div className={classes.root}>
          <AppBar className={classes.navBar} position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {user.fullName}
              </Typography>
              <Avatar className={classes.avatar} src={user.profilePic} />
            </Toolbar>
          </AppBar>
        </div>
      </Grid>
    </Grid>
  );
}
