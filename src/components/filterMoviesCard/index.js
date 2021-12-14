import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import {getMovieGenres, getLanguages} from "../../api/tmdb-api";
import {useQuery} from "react-query";
import Spinner from "../spinner";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)",
    },
    media: {height: 300},

    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        backgroundColor: "rgb(255, 255, 255)",
    },
}));

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  const {data: genreData, error: genreError, isLoading: genreIsLoading, isError: genreIsError} = useQuery("showGenres", getMovieGenres)
  const {data: languageData, error: languageError, isLoading: languageIsLoading, isError: languageIsError} = useQuery("languages", getLanguages)

  if (genreIsLoading) {
    return <Spinner />;
  }

  if (genreIsError) {
    return <h1>{genreError.message}</h1>;
  }

  const genres = genreData.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }

  if (languageIsLoading) {
    return <Spinner />;
  }

  if (languageIsError) {
    return <h1>{languageError.message}</h1>;
  }

  const languages = languageData;  
  if(languages[4].iso_639_1 !== " "){
    languages.unshift({iso_639_1: " ", english_name: " "});
  }
  if(languages[3].iso_639_1 !== "fr"){
    languages.unshift({iso_639_1: "fr", english_name: "French"});
  }
  if(languages[2].iso_639_1 !== "es"){
    languages.unshift({iso_639_1: "es", english_name: "Spanish"});
  }
  if(languages[1].iso_639_1 !== "en"){
    languages.unshift({iso_639_1: "en", english_name: "English "});
  }
  if(languages[0].iso_639_1 !== "Null"){
    languages.unshift({iso_639_1: "Null", english_name: "All"});
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleLanguageChange = (e) => {
    handleChange(e, "language", e.target.value);
  }

      return(
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Filter the movies.
          </Typography>
          <TextField
            className={classes.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            value={props.titleFilter}
            variant="filled"
            onChange={handleTextChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              value={props.genreFilter}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="language-label">Language</InputLabel>
            <Select
              labelId="language-label"
              id="language-select"
              value={props.originLanguageFilter}
              onChange={handleLanguageChange}
            >
              {languages.map((language) => {
                return (
                  <MenuItem key={language.iso_639_1} value={language.iso_639_1}>
                    {language.english_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={img}
          title="Filter"
        />
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Filter the movies.
            <br />
          </Typography>
        </CardContent>
      </Card>
    );
};