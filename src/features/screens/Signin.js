import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styled from "styled-components/native";
import { Avatar, Button } from "react-native-paper";

import { SigninForm } from "../components/SigninForm";
import { SafeArea } from "../../components/utilities/SafeArea";

const Caption = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.body}
`;

const LittleSpace = styled(View)`
    height: ${(props) => props.theme.space[3]}
`;

const NameText = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.caption}
    color: ${(props) => props.theme.colors.text.secondary}
`;

const NameTitle = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.button}
    font-weight: ${(props) => props.theme.fontWeights.bold}
    color: ${(props) => props.theme.colors.text.primary}
`;

const SigninContainer = styled(ScrollView)`
    padding: ${(props) => props.theme.space[3]}
    background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const SigninImageContainer = styled(View)`
    align-items: center
`;

const Space = styled(View)`
    height: ${(props) => props.theme.space[5]}
`;

const SigninButtun = styled(Button)`
    background-color: ${(props) => props.theme.colors.ui.primary};
    padding: ${(props) => props.theme.space[2]};
    border-radius: 0px;
    margin: ${(props) => props.theme.space[3]}
`;

const SigninText = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.body}
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.text.secondary};
`;

const SigninTextContainer = styled(View)`
    flex-direction: row;
    justify-content: center;
`;

const SigninTouchableOpacityText = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.body}
    color: ${(props) => props.theme.colors.ui.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const Title = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.title}
    font-weight: ${(props) => props.theme.fontWeights.bold}
`;

const Signin = () => {
    return (
        <SafeArea>
            <SigninContainer>
                <Title>Welcome Back</Title>
                <Caption>Get back to monitoring your elections</Caption>
                <Space/>
                <SigninImageContainer style={{ alignItems: "center" }}>
                   <Avatar.Image size={100} source={require('../../../assets/icon.png')} /> 
                   <LittleSpace/>
                   <NameTitle>NANA KWEKU ADUMATTA</NameTitle>
                   <NameText>mr.adumatta@gmail.com</NameText>
                </SigninImageContainer>
                <SigninForm/>
            </SigninContainer>
            <SigninTextContainer>
                <SigninText>Dont have an account?</SigninText>
                <TouchableOpacity>
                    <SigninTouchableOpacityText> Register</SigninTouchableOpacityText>
                </TouchableOpacity>
            </SigninTextContainer>
            <SigninButtun mode="contained">Login</SigninButtun> 
            <LittleSpace/>
        </SafeArea>
    )
}

export default Signin
