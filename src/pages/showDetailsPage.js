import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ShowDetails from "../components/showDetails";
import PageTemplate from "../components/templateShowPage";
import { getShow } from "../api/tmdb-api";

const ShowDetailsPage = (props) => {
  const { id } = props.match.params;
  const [show, setShow] = useState(null);

  useEffect(() => {
    getShow(id).then((show) => {
      setShow(show);
    });
  }, [id]);

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