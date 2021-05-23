import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { StatusBar } from "expo-status-bar";

export function Routes() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <StackRoutes />
    </NavigationContainer>
  );
}
