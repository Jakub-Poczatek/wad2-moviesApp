import React from "react";
import ShowHeader from "../components/showHeader";
import SampleShow from "./sampleShowData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Show Details Page/ShowHeader",
  component: ShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <ShowHeader show={SampleShow} />;

Basic.storyName = "Default";
