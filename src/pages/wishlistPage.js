import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromWishlist from "../components/cardIcons/removeFromWishlist";
import WriteReview from "../components/cardIcons/writeReview";

const WishlistPage = () => {
  const {wishlist: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const wishlistQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie, 
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = wishlistQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const movies = wishlistQueries.map((q) => q.data);

  return (
    <PageTemplate
      title="Wishlist"
      movies={movies}
      action={(movie) => {
        return(
          <>
          <RemoveFromWishlist movie = {movie}/>
          </>
        );
      }}
    />
  );
};

export default WishlistPage;