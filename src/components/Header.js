import React from "react";
import _ from "lodash";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import ServicesConfig from "../settings/ServicesConfig";
import LoginModal from "./LoginModal";
import "../styles.css";

class Header extends React.Component {
  constructor() {
    super();

    if (_.get(this.state, "isLoggedIn", true)) {
      this.state = {
        isLoggedIn: false,
        user: {
          name: "Anonimous",
          lastName: "User"
        }
      };
    }
  }

  componentDidMount() {
    const url = ServicesConfig["profile"].url;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoggedIn: true,
          user: {
            name: data.name,
            lastName: data.lastName,
            profilePic: data.profilePictureUrl
          }
        });
      })
      .catch(console.log);
  }

  render() {
    return this.renderHeader();
  }

  renderHeader() {
    let user = this.state.user;

    return (
      <div className="header">
        <AppBar className="navBar" position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="title">
              Welcome {user.name.concat(" ", user.lastName)}
            </Typography>
            <LoginModal
              className="loginModal"
              isLoggedIn={this.state.isLoggedIn}
            />
            <Avatar className="avatar" src={user.profilePic} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
