import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
    minWidth: 750,
    marginLeft: 0,
    marginTop: "50px",
  },
  media: {
    height: 350,
    paddingTop: 100,
  },
  detailsHeading: {
    color: "red",
    fontWeight: "bold",
  },
});

const MainCard = ({ strDrink, strDrinkThumb, strInstructions }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={strDrinkThumb}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {strDrink}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {strInstructions}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MainCard;
