import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import styled from "styled-components/native";
import { TextInput, Button } from "react-native-paper";

import { SafeArea } from "../../../components/utilities/SafeArea";
import { Spacer } from "../../../components/spacer/Spacer";

const SignUpContainer = styled(ScrollView)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.secondary}
`;

const TextRowContainer = styled(View)`
    flex-direction: row;
`;

const Signup = () => {
    return (
        <SafeArea>
            <SignUpContainer>
                <Text style={styles.Title}>Lets Sign You Up</Text>
                <Spacer position="top" size="large"/>

                <TextInput style={styles.TextInput} label="Enter your name" mode="flat" />
                <Spacer position="top" size="large"/>
                
                <TextInput style={styles.TextInput} placeholder="Email Address" mode="flat" />
                <Spacer position="top" size="large"/>

                <TextInput style={styles.TextInput} label="Phone Number" mode="flat" />
                <Spacer position="top" size="large"/>

                <TextInput style={styles.TextInput} label="Organisation" mode="flat" />
                <Spacer position="top" size="large"/>

                <TextInput style={styles.TextInput} label="Password You Can Remeber" mode="flat" />
                
                <Spacer position="top" size="large"/>
                <TextRowContainer>
                    <Text style={styles.SignupTextLeft}>Have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.SignupTextRight}> Sign in</Text>
                    </TouchableOpacity>
                </TextRowContainer>

                <Spacer position="top" size="small"/>
                <Button style={styles.Button} mode="contained">Let's Get Started!</Button> 
                <Spacer position="top" size="large"/>
            </SignUpContainer>
        </SafeArea>
    )
}

export default Signup

const styles = StyleSheet.create({
    Button: {
        backgroundColor: "#1a357a",
        padding: 8,
        fontFamily: 'Nexa_Bold',
        
    },
    SignupTextLeft: {
        fontFamily: 'Nexa_Bold', 
        fontSize: 16,
        color: "#808080",
    },
    SignupTextRight: {
        fontFamily: 'Nexa_Bold', 
        fontSize: 16,
        color: "#1a357a",
    },
    TextInput: {
        backgroundColor: "transparent",
        fontFamily: "Nexa_Light"
    },
    Title: {
        fontSize: 25,
        fontFamily: "Nexa_Bold",  
    },
})