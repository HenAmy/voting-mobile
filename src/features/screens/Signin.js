import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styled from "styled-components/native";
import { Avatar } from "react-native-paper";

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
    background-color: ${(props) => props.theme.colors.bg.secondary}
`;

const SigninImageContainer = styled(View)`
    align-items: center
`;

const Space = styled(View)`
    height: ${(props) => props.theme.space[5]}
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
        </SafeArea>
    )
}

export default Signin
