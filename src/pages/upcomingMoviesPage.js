import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getUpcomingMovies} from '../api/tmdb-api'
import AddToWishlistIcon from "../components/cardIcons/addToWishlist";

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const wishlist = movies.filter(m => m.favorite)
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
  const addToWishlist = (movieId) => true 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToWishlistIcon movie={movie}/>
      }}
    />    
  );
};

export default UpcomingMoviesPage;