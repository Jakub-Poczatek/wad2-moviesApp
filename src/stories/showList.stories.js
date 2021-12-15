import React from "react";
import ShowList from "../components/showList";
import SampleShow from "./sampleShowData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import ShowsContextProvider from "../contexts/moviesContext";

export default {
  title: "Show List Page/ShowList",
  component: ShowList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => {
  const shows = [
    { ...SampleShow, id: 1 },
    { ...SampleShow, id: 2 },
    { ...SampleShow, id: 3 },
    { ...SampleShow, id: 4 },
    { ...SampleShow, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <ShowList
        shows={shows}
        action={(show) => <AddToFavoritesIcon show={show} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
