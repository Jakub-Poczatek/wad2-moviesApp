import React from "react";
import ShowDetails from "../components/showDetails";
import SampleShow from "./sampleShowData";
import { MemoryRouter } from "react-router";
import ShowsContextProvider from "../contexts/moviesContext";

export default {
  title: "Show Details Page/ShowDetails",
  component: ShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => <ShowDetails show={SampleShow} />;

Basic.storyName = "Default";
