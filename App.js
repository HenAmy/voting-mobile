import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "@use-expo/font";

import { theme } from "./src/infrasctructure/theme";
import Signin from "./src/features/auth/screens/Signin";
import Signup from "./src/features/auth/screens/Signup";
import Elections from "./src/features/elections/screens/Elections";
import Participant from './src/features/participants/screens/Participant';
import CreateElection from "./src/features/elections/screens/createElection";
import ElectionParticipants from "./src/features/elections/screens/ElectionParticipants";

const Drawer = createDrawerNavigator();

// require in the fonts
const nexaBoldFont = {
  Nexa_Bold: require("./assets/fonts/NexaBold.otf"),
};

const nexaLightFont = {
  Nexa_Light: require("./assets/fonts/NexaLight.otf"),
};

export default function App() {
  const [nexaBoldLoaded] = useFonts(nexaBoldFont);
  const [nexaLightLoaded] = useFonts(nexaLightFont);

  if(!nexaBoldLoaded || !nexaLightLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={ theme }>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="SignIn" component={Signin} />
          <Drawer.Screen name="SignUp" component={Signup} />
          <Drawer.Screen name="Elections" component={Elections} />
          <Drawer.Screen name="CreateElection" component={CreateElection} />
          <Drawer.Screen name="ElectionParticipants" component={ElectionParticipants} />
          <Drawer.Screen name="Participant" component={Participant} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
