import React from "react";
import MovieReviews from "../components/movieReviews";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import ShowsContextProvider from "../contexts/moviesContext";

export default {
  title: "Movie Details Page/MovieReviews",
  component: MovieReviews,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => <MovieReviews movie={SampleMovie} />;

Basic.storyName = "Default";