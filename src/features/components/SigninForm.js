import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from "styled-components/native";
import { TextInput, Button } from "react-native-paper";

const Space = styled(View)`
    height: ${(props) => props.theme.space[4]}
`;

const SigninText = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.caption}
    color: ${(props) => props.theme.colors.ui.primary}
`;

const SigninButtun = styled(Button)`
    background-color: ${(props) => props.theme.colors.ui.primary};
    padding: ${(props) => props.theme.space[2]};
    

`;

const Textinput = styled(TextInput)`
    background-color: ${(props) => props.theme.colors.bg.secondary}
`;


export const SigninForm = () => {
    return (
        <>
            <Space />
            <Textinput label="Password" mode="flat" selectionColor="#000" underlineColor="#000" outlineColor="#000"/>
            <Space />
            <TouchableOpacity>
                <SigninText>Forgot Password?</SigninText>
            </TouchableOpacity>
            <SigninButtun mode="contained">Login</SigninButtun> 
        </>
    )
}
