import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  const getFavouritesKey = (uid) => `@favourites-${uid}`;

  const addToFavourites = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFromFavourites = (restaurant) => {
    setFavourites(favourites.filter((x) => x.placeId !== restaurant.placeId));
  };

  useEffect(() => {
    if (user) {
      (async (uid) => {
        try {
          const value = await AsyncStorage.getItem(getFavouritesKey(uid));
          if (value) {
            setFavourites(JSON.parse(value));
          }
        } catch (e) {
          console.log("error loading", e);
        }
      })(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      (async (value, uid) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(getFavouritesKey(uid), jsonValue);
        } catch (e) {
          console.log("error storing", e);
        }
      })(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
