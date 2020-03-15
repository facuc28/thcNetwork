import React from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    background: "#3f51b5"
  },
  media: {
    height: 250
  },
  buttonShare: {}
});

export default function VPNCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.redeszone.net/app/uploads-redeszone.net/2020/01/vpn-no-ser-vpn-930x487.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {_.get(props, "card.title", "Free VPN Service")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {_.get(
              props,
              "card.description",
              "Free, Secure and Scalable private network"
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          className={classes.buttonShare}
          color="secondary"
        >
          Claim
        </Button>
        <Button
          size="small"
          variant="contained"
          className={classes.buttonShare}
          color="secondary"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
