import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from "styled-components/native";
import { TextInput, Button } from "react-native-paper";

const LittleSpace = styled(View)`
    height: ${(props) => props.theme.space[2]}
`;

const SignupButtun = styled(Button)`
    background-color: ${(props) => props.theme.colors.ui.primary};
    padding: ${(props) => props.theme.space[2]};
`;

const Space = styled(View)`
    height: ${(props) => props.theme.space[4]}
`;

const SignupText = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.body}
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.text.secondary};
`;

const SignupTextContainer = styled(View)`
    flex-direction: row;
`;

const Textinput = styled(TextInput)`
    background-color: ${(props) => props.theme.colors.bg.secondary}
`;

const SignupTouchableOpacityText = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.body}
    color: ${(props) => props.theme.colors.ui.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const SignupForm = () => {
    return (
        <>
            <Space />
            <Textinput label="Enter your name" mode="flat" selectionColor="#000" underlineColor="#000" outlineColor="#000"/>
            <Space />
            <Textinput label="Email Address" mode="flat" selectionColor="#000" underlineColor="#000" outlineColor="#000"/>
            <Space />
            <Textinput label="Phone Number" mode="flat" selectionColor="#000" underlineColor="#000" outlineColor="#000"/>
            <Space />
            <Textinput label="Organisation" mode="flat" selectionColor="#000" underlineColor="#000" outlineColor="#000"/>
            <Space />
            <Textinput label="Password You Can Remeber" mode="flat" selectionColor="#000" underlineColor="#000" outlineColor="#000"/>
            <Space />
            <SignupTextContainer>
                <SignupText>Have an account?</SignupText>
                <TouchableOpacity>
                    <SignupTouchableOpacityText> Sign in</SignupTouchableOpacityText>
                </TouchableOpacity>
            </SignupTextContainer>
            <LittleSpace/>
            <SignupButtun mode="contained">Let's Get Started!</SignupButtun> 
        </>
    )
}
