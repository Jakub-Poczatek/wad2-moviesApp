import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";

const WriteShowReviewIcon = ({ show }) => {
  return (
    <Link
      to={{
        pathname: `/tv/reviews/form`,
        state: {
          showId: show.id,
        },
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteShowReviewIcon;