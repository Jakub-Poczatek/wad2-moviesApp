import React from "react";
import ShowsHeader from "../components/headerShowList";
import { MemoryRouter } from "react-router";
import ShowsContextProvider from "../contexts/moviesContext";

export default {
  title: "Show List Page/ShowPageHeader",
  component: ShowsHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => <ShowsHeader title="Popular Tv Shows" />;

Basic.storyName = "Default";
