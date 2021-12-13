import React, { useState } from "react";

export const ShowsContext = React.createContext(null);

const ShowsContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )

  const addToFavorites = (show) => {
    let newFavorites = [];
    if (!favorites.includes(show.id)){
      newFavorites = [...favorites, show.id];
    }
    setFavorites(newFavorites)
  };

  // We will use this function in a later section
  const removeFromFavorites = (show) => {
    setFavorites( favorites.filter(
      (mId) => mId !== show.id
    ) )
  };

  return (
    <ShowsContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;