import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screen/settings.screen";
import { FavouritesScreen } from "../../features/settings/screen/favourites.screen";
import { CameraScreen } from "../../features/settings/screen/camera.screen";
import { UserProfileContextProvider } from "../../services/userProfile/user-profile.contex";

const Stack = createStackNavigator();

const createScreenOptions = () => {
  return {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerMode: "screen",
  };
};
export const SettingsNavigator = () => {
  return (
    <UserProfileContextProvider>
      <Stack.Navigator screenOptions={createScreenOptions}>
        <Stack.Screen
          name="Settings.Screen"
          options={{ title: "Settings" }}
          component={SettingsScreen}
        />
        <Stack.Screen name="Favourites" component={FavouritesScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </UserProfileContextProvider>
  );
};
