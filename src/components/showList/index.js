import React from "react";
import Show from "../showCard/";
import Grid from "@material-ui/core/Grid";

const ShowList = (props) => {
  let showCards = props.shows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Show key={m.id} show={m} />
    </Grid>
  ));
  return showCards;
};

export default ShowList;