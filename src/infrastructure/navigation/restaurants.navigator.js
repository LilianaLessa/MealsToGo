import React from "react";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { createStackNavigator } from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants.Screen"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
