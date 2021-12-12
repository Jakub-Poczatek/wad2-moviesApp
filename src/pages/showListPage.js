import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateShowListPage'
import { getShows } from "../api/tmdb-api";

const ShowListPage = (props) => {
  const [shows, setShows] = useState([]);
  const favorites = shows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const addToFavorites = (showId) => {
    const updatedShows = shows.map((m) =>
      m.id === showId ? { ...m, favorite: true } : m
    );
    setShows(updatedShows);
  };

  useEffect(() => {
    getShows().then(shows => {
      setShows(shows);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Discover Shows'
      shows={shows}
      selectFavorite={addToFavorites}
    />
  );
};
export default ShowListPage;