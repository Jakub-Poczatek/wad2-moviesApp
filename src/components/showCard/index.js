import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import img from '../../images/film-poster-placeholder.png';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  card: {maxWidth: 345},
  media: {height: 500},
  avatar: {
      backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function ShowCard(props) {
  const classes = useStyles();
  const show = props.show;

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    props.selectFavorite(show.id);
  };

  return (
    <Card className={classes.card}>
      <CardHeader 
      className={classes.header}
      avatar={
        show.favorite ? (
          <Avatar className = {classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      } 
      title={
        <Typography variant="h5" component="p">
          {show.name}{""}
        </Typography>
      } 
      />
      <CardMedia
        className={classes.media}
        image={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {show.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {show.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleAddToFavorite}>
          <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
        <Link to = {`/tv/popular/${show.id}`}>
        <Button variant="outlined" size="medium" color="primary">
          More Info ...
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}