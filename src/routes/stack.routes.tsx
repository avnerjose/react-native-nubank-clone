import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home";
import { SettingsPage } from "../pages/SettingsPage";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode="card" >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="settings" component={SettingsPage} />
    </Stack.Navigator>
  );
}
