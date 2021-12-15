import React from "react";
import ShowReview from "../components/showReview";
import SampleReview from "./sampleShowReview";
import { MemoryRouter } from "react-router";
import ShowsContextProvider from "../contexts/moviesContext";

export default {
  title: "Show Details Page/ShowReview",
  component: ShowReview,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => <ShowReview review={SampleReview} />;

Basic.storyName = "Default";
