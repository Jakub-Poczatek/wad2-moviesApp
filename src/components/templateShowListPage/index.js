import React, { useState } from "react";
import Header from "../headerShowList";
import FilterCard from "../filterShowsCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ShowList from "../showList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function ShowListPageTemplate({ shows, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [originCountryFilter, setOriginCountryFilter] = useState("Null");
  const genreId = Number(genreFilter);
  const originCountryId = String(originCountryFilter);

  let displayedShows = shows
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      if(originCountryId !== "Null") return m.origin_country.includes(originCountryId)
      else return m
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if(type === "genre") setGenreFilter(value);
    else setOriginCountryFilter(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            originCountryFilter={originCountryFilter}
          />
        </Grid>
        <ShowList action={action} shows={displayedShows}></ShowList>
      </Grid>
    </Grid>
  );
}
export default ShowListPageTemplate;