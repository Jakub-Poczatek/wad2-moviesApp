import React from "react";
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
  const shows = props.shows;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Popular Tv Shows"} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard />
        </Grid>
        <ShowList shows={shows}></ShowList>
      </Grid>
    </Grid>
  );
};
export default ShowListPage;