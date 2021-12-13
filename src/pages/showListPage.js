import React from "react";
import PageTemplate from "../components/templateShowListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getShows} from '../api/tmdb-api'

const ShowListPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('shows', getShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = shows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (showId) => true 

  return (
    <PageTemplate
      title="Popular Tv Shows"
      shows={shows}
      selectFavorite={addToFavorites}
    />    
  );
};

export default ShowListPage;