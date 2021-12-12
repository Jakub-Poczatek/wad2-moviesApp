import React from "react";
import PageTemplate from "../components/templateShowListPage";

const FavoriteShowsPage = (props) => {
  const toDo = () => true;
  // Get shows from local storage.
  const shows = JSON.parse(localStorage.getItem("favorites")); 

  return (
    <PageTemplate
      title="Favourite Shows"
      shows={shows}
      selectFavorite={toDo}
    />
  );
};

export default FavoriteShowsPage;