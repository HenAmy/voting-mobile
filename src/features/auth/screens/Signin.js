import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ColorPropType } from 'react-native'
import styled from "styled-components/native";
import { Avatar, Button, TextInput } from "react-native-paper";

import { Spacer } from "../../../components/spacer/Spacer";
import { SafeArea } from "../../../components/utilities/SafeArea";

const SigninContainer = styled(ScrollView)`
    padding: ${(props) => props.theme.space[3]}
    background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const SigninImageContainer = styled(View)`
    align-items: center
`;

const SigninButtun = styled(Button)`
    background-color: ${(props) => props.theme.colors.ui.primary};
    padding: ${(props) => props.theme.space[2]};
    border-radius: 0px;
    margin: ${(props) => props.theme.space[3]}
`;

const SigninTextContainer = styled(View)`
    flex-direction: row;
    justify-content: center;
`;

const Signin = () => {
    return (
        <SafeArea>
            <SigninContainer>
                <Text style={styles.Title}>Welcome Back</Text>
                <Text style={styles.Caption}>Get back to monitoring your elections</Text>
                <Spacer position="top" size="large"/>

                <SigninImageContainer style={{ alignItems: "center" }}>
                   <Avatar.Image size={100} source={require('../../../../assets/icon.png')} /> 
                   <Spacer position="top" size="medium"/>
                   <Text style={styles.NameTitle}>NANA KWEKU ADUMATTA</Text>
                   <Text style={styles.Email}>mr.adumatta@gmail.com</Text>
                </SigninImageContainer>
            
                <Spacer position="top" size="large"/>
                {/* <TextInput style={styles.TextInput} label="Password" mode="flat" selectionColor="#000" underlineColor="#000" outlineColor="#000"/> */}
                <TextInput
                    style={styles.TextInput}
                    outlineColor= "#000"
                    label="Password"
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    right={<TextInput.Icon name="eye"/>}
                />
                <Spacer position="top" size="large"/>
                <TouchableOpacity>
                    <Text style={styles.ForgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
            </SigninContainer>
            <SigninTextContainer>
                <Text style={styles.SigninTextLeft}>Dont have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.SigninTextRight}> Register</Text>
                </TouchableOpacity>
            </SigninTextContainer>
            <SigninButtun mode="contained">Login</SigninButtun> 
        </SafeArea>
    )
}

export default Signin

const styles = StyleSheet.create({
    Caption: {
        fontFamily: 'Nexa_Light', 
        fontSize: 16
    },
    Email: {
        fontFamily: 'Nexa_Light', 
        fontSize: 12,
        color: "#808080"
    },
    ForgotPasswordText: {
        fontSize: 14,
        color: "#1a357a",
        fontFamily: "Nexa_Light"
    },
    NameTitle: {
        fontFamily: 'Nexa_Bold', 
        fontSize: 14,
    },
    SigninTextLeft: {
        fontFamily: 'Nexa_Bold', 
        fontSize: 16,
        color: "#808080",
    },
    SigninTextRight: {
        fontFamily: 'Nexa_Bold', 
        fontSize: 16,
        color: "#1a357a",
    },
    TextInput: {
        backgroundColor: "transparent"
    },
    Title: {
        fontFamily: 'Nexa_Bold', 
        fontSize: 20
    }
})