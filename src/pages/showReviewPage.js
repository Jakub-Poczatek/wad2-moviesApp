import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateShowPage";
import ShowReview from "../components/showReview";

const ShowReviewPage = (props) => {
  const {show, review} = props.location.state
  return (
    <PageTemplate show={show}>
      <ShowReview review={review} />
    </PageTemplate>
  );
};

export default withRouter(ShowReviewPage);