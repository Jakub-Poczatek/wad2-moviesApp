import React from "react";
import ShowCard from "../components/showCard";
import SampleShow from "./sampleShowData";
import { MemoryRouter } from "react-router";
import ShowsContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Show List Page/ShowCard",
  component: ShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ShowCard
      show={SampleShow}
      action={(show) => <AddToFavoritesIcon show={show} />}
      taging={(show) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleShow, poster_path: undefined };
  return (
    <ShowCard
      show={sampleNoPoster}
      action={(show) => <AddToFavoritesIcon show={show} />}
      taging={(show) => null}
    />
  );
};
Exceptional.storyName = "exception";
