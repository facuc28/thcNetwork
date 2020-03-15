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
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "#485460",
    maxWidth: "700px",
    marginTop: "1vh"
  },
  media: {
    height: 250
  },
  cardButtons: {
    display: "flex",
    marginTop: "10vh"
  },
  cardContent: {
    color: "white"
  }
});

export default function MainCard(props) {
  const classes = useStyles();
  const history = useHistory();

  function handleDownloadClient() {
    history.push(_.get(props, "card.button.primary.link", "/"));
  }

  let card = {
    title: _.get(props, "card.title", "Section Title"),
    description: _.get(props, "card.description", "Section Description"),
    image: {
      url: _.get(
        props,
        "card.image.url",
        "https://www.as7erp.com/es/wp-content/uploads/2019/03/cloud-3406627_1920-600x350.jpg"
      ),
      title: _.get(props, "card.image.title", "Image Title")
    },
    button: {
      primary: {
        text: _.get(props, "card.button.primary.text", "Primary Button"),
        handleClick: handleDownloadClient
      },
      secondary: {
        text: _.get(props, "card.button.secondary.text", "Learn More")
      }
    }
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={card.image.url}
          title={card.image.title}
        />

        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h4" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body1" component="p">
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.cardButtons}>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={card.button.primary.handleClick}
        >
          {card.button.primary.text}
        </Button>
        <Button size="small" variant="contained" color="secondary">
          {card.button.secondary.text}
        </Button>
      </CardActions>
    </Card>
  );
}
