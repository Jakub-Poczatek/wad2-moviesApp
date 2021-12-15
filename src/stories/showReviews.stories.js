import React from "react";
import ShowReviews from "../components/showReviews";
import SampleShow from "./sampleShowData";
import { MemoryRouter } from "react-router";
import ShowsContextProvider from "../contexts/moviesContext";

export default {
  title: "Show Details Page/ShowReviews",
  component: ShowReviews,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => <ShowReviews show={SampleShow} />;

Basic.storyName = "Default";