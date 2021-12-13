import React from "react";
import PageTemplate from "../components/templateShowPage";
import ReviewForm from "../components/showReviewForm";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteReviewPage = (props) => {
  const { showId } = props.location.state;
  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: showId }],
    getShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate show={show}>
      <ReviewForm show={show} />
    </PageTemplate>
  );
};

export default withRouter(WriteReviewPage);