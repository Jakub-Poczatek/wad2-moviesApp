import React, {useContext} from "react";
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
import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
  card: {maxWidth: 345},
  media: {height: 500},
  avatar: {
      backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function ShowCard({ show, action }) {
  const classes = useStyles();
  const { showFavorites, addToShowFavorites } = useContext(MoviesContext);

  if (showFavorites.find((id) => id === show.id)) {
    show.favorite = true;
  } else {
    show.favorite = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToShowFavorites(show);
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
        <Link
          to={{
            pathname: `/tv/popular/${show.id}`,
          }}
          style={{textDecoration: "none", color: "black"}}
        >
          <Typography variant="h5">
          {show.name}{""}
        </Typography>
      </Link>
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
          <Grid item xs = {1}/>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {show.first_air_date}{""}
            </Typography>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "}{show.vote_average}{" "}
            </Typography>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={4}>
            <CardActions disableSpacing>
              {action(show)}
            </CardActions>
          </Grid>
          <Grid item xs={1}/>
        </Grid>
      </CardContent>
    </Card>
  );
}