import React, {useState, useEffect} from "react";
import Header from "../components/headerShowList";
import FilterCard from "../components/filterShowsCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ShowList from "../components/showList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const ShowListPage = (props) => {
  const classes = useStyles();
  const [shows, setShows] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");

  const genreId = Number(genreFilter);

  let displayedShows = shows 
  .filter((m) => {
    return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  })
  .filter((m) => {
    return genreId > 0 ? m.genre_ids.includes(genreId) : true;
  });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  }

  const addToFavorites = (showId) => {
    const updatedShows = shows.map((m) =>
    m.id === showId ? {...m, favorite: true} : m
    );
    setShows(updatedShows);
  };
  

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
    .then((res) => res.json())
    .then((json) => {
      return json.results;
    })
    .then((shows) => {
      setShows(shows);
    });
  }, [])

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Popular Tv Shows"} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard 
          onUserInput={handleChange}
          nameFilter={nameFilter}
          genreFilter={genreFilter}
          />
        </Grid>
        <ShowList shows={displayedShows} selectFavorite={addToFavorites}/>
      </Grid>
    </Grid>
  );
};
export default ShowListPage;