import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screen/settings.screen";
import { FavouritesScreen } from "../../features/settings/screen/favourites.screen";

const Stack = createStackNavigator();

const createScreenOptions = () => {
  return {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerMode: "screen",
  };
};
export const SettingsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={createScreenOptions}>
      <Stack.Screen
        name="Settings.Screen"
        options={{ title: "Settings" }}
        component={SettingsScreen}
      />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
    </Stack.Navigator>
  );
};
