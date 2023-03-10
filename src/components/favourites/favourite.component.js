import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;
export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  const handleOnPress = () => {
    (isFavourite ? removeFromFavourites : addToFavourites)(restaurant);
  };

  return (
    <FavouriteButton onPress={handleOnPress}>
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
