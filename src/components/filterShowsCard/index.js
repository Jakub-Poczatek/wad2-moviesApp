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
import { getShowGenres, getCountries } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgb(204, 204, 0)",
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterShowsCard(props) {
  const classes = useStyles();
  //const { data, error, isLoading, isError } = useQuery("showGenres", getShowGenres);
  const {data: genreData, error: genreError, isLoading: genreIsLoading, isError: genreIsError} = useQuery("showGenres", getShowGenres)
  const {data: countryData, error: countryError, isLoading: countryIsLoading, isError: countryIsError} = useQuery("countries", getCountries)

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

  if(countryIsLoading){
    return <Spinner />;
  }

  if (countryIsError) {
    return <h1>{countryError.message}</h1>;
  }

  const countries = countryData;  
  if(countries[4].iso_3166_1 !== " "){
    countries.unshift({iso_3166_1: " ", english_name: " "});
  }
  if(countries[3].iso_3166_1 !== "IE"){
    countries.unshift({iso_3166_1: "IE", english_name: "Ireland"});
  }
  if(countries[2].iso_3166_1 !== "UK"){
    countries.unshift({iso_3166_1: "UK", english_name: "United Kingdom"});
  }
  if(countries[1].iso_3166_1 !== "US"){
    countries.unshift({iso_3166_1: "US", english_name: "United Statest of America"});
  }
  if(countries[0].iso_3166_1 !== "Null"){
    countries.unshift({iso_3166_1: "Null", english_name: "All"});
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

  const handleCountryChange = (e) => {
    handleChange(e, "country", e.target.value);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the shows.
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
          <InputLabel id="country-label">Countries</InputLabel>
          <Select
            labelId="country-label"
            id="country-select"
            value={props.originCountryFilter}
            onChange={handleCountryChange}
          >
            {countries.map((country) => {
              return (
                <MenuItem key={country.iso_3166_1} value={country.iso_3166_1}>
                  {country.english_name}
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
          Filter the shows.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}