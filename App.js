import React from 'react';
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Signin from "./src/features/screens/Signin";
import Signup from "./src/features/screens/Signup";
import { theme } from "./src/infrasctructure/theme";

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
        <Signin/>
        {/* <Signup/> */}
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
