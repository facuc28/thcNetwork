import _ from "lodash";
import React from "react";
import Grid from "@material-ui/core/Grid";
import MainCard from "./MainCard";

class Application extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {}
    };
  }

  render() {
    let user = {};

    if (this.state.user) {
      user = this.state.user;
    }

    return (
      <Grid container spacing={1}>
        <Grid item xs={2} md={2} lg={2} />
        <Grid item xs={2} md={2} lg={2}>
          <MainCard card={this.getVPNCardProps()} />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <MainCard card={this.getThcNetworkCardProps()} />
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <Grid item xs={2} md={2} lg={2} />
          <MainCard card={this.getCloudCardProps()} />
        </Grid>
      </Grid>
    );
  }

  getVPNCardProps() {
    return {
      title: "Free VPN Service",
      description:
        "Try our free and fast VPN Service with maximum security garanted",
      image: {
        url:
          "https://www.redeszone.net/app/uploads-redeszone.net/2020/01/vpn-no-ser-vpn-930x487.jpg",
        title: "Free VPN Service"
      },
      button: {
        primary: {
          text: "Download Client",
          link: "/vpn/download"
        }
      }
    };
  }

  getThcNetworkCardProps() {
    return {
      title: "THC Network",
      description:
        "We are a free and secure private Network that aims for freedom and free internet usage. We dont track neither save any log from the network activity",
      image: {
        url:
          "https://previews.123rf.com/images/schlaumal/schlaumal1804/schlaumal180400135/99606013-network-flat-design-illustration.jpg",
        title: "THC Network"
      },
      button: {
        primary: {
          text: "Register Now"
        }
      }
    };
  }

  getCloudCardProps() {
    return {
      title: "Cloud Hosting",
      description:
        "We provide free scalable Cloud Hosting and other Cloud Services",
      image: {
        url:
          "https://image.freepik.com/free-vector/cloud-computing-service-illustration_18591-7371.jpg",
        title: "Cloud Hosting and Services"
      },
      button: {
        primary: {
          text: "Open Cloud"
        }
      }
    };
  }
}

export default Application;
