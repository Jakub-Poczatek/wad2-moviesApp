import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToWishlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    context.addToWishlist(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToWishlist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWishlistIcon;