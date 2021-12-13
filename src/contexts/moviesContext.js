import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [myShowReviews, setMyShowReviews] = useState( {} )
  const [favorites, setFavorites] = useState( [] )
  const [showFavorites, setShowFavorites] = useState( [] ) 
  const [wishlist, setWishlist] = useState([])
  
    const addToFavorites = (movie) => {
      setFavorites([...favorites,movie.id])
    };

    // We will use this function in a later section
    const removeFromFavorites = (movie) => {
      setFavorites( favorites.filter(
        (mId) => mId !== movie.id
      ) )
    };

    const addToShowFavorites = (show) => {
      setShowFavorites([...showFavorites,show.id])
    };
    
    // We will use this function in a later section
    const removeFromShowFavorites = (show) => {
      setShowFavorites( showFavorites.filter(
        (mId) => mId !== show.id
      ) )
    };

    const addToWishlist = (movie) => {
      setWishlist([...wishlist, movie.id])
      //console.log(wishlist)
    };

    const addReview = (movie, review) => {
      setMyReviews( {...myReviews, [movie.id]: review } )
    };

    const addShowReview = (show, review) => {
      setMyShowReviews({...myShowReviews, [show.id]: review})
    };
  
    return (
      <MoviesContext.Provider
        value={{
          favorites,
          addToFavorites,
          removeFromFavorites,
          addReview,
          addToWishlist,
          showFavorites,
          addToShowFavorites,
          removeFromShowFavorites,
          addShowReview
        }}
      >
        {props.children}
      </MoviesContext.Provider>
    );
  };
  
  export default MoviesContextProvider;