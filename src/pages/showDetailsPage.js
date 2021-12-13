import React from "react";
import { withRouter } from "react-router-dom";
import ShowDetails from "../components/showDetails";
import PageTemplate from "../components/templateShowPage";
import { getShow } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const ShowDetailsPage = (props) => {
  const { id } = props.match.params;

  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show}>
            <ShowDetails show={show} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default withRouter(ShowDetailsPage);