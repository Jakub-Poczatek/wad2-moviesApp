import React from "react";
import ReviewForm from "../components/showReviewForm";
import { MemoryRouter } from "react-router";
import ShowContextProvider from "../contexts/moviesContext";

export default {
  title: "Show Details Page/ShowReviewForm",
  component: ReviewForm,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowContextProvider>{Story()}</ShowContextProvider>,
  ],
};

export const Basic = () => <ReviewForm />;

Basic.storyName = "Default";
