import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToShowFavoritesIcon = ({ show }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToShowFavorites(show);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites} size="large">
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToShowFavoritesIcon;