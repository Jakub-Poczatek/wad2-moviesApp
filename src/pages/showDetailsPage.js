import React from "react";
import { withRouter } from "react-router-dom";
import ShowDetails from "../components/showDetails";
import PageTemplate from "../components/templateShowPage";
import useShow from "../hooks/useShow";

const ShowDetailsPage = (props) => {
  const { id } = props.match.params;
  const [show] = useShow(id);

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