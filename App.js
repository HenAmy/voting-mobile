import React from 'react';
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Signin from "./src/features/screens/Signin";
import Signup from "./src/features/screens/Signup";
import Elections from "./src/features/screens/Elections";
import CreateElection from "./src/features/screens/createElection";
import ElectionParticipants from "./src/features/screens/ElectionParticipants";
import { theme } from "./src/infrasctructure/theme";

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
        <ElectionParticipants/>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
