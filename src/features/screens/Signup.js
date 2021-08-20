import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styled from "styled-components/native";

import { SafeArea } from "../../components/utilities/SafeArea";
import { SignupForm } from "../components/SignupForm";

const Caption = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.body}
`;

const SignUpContainer = styled(ScrollView)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.secondary}
`;

const Space = styled(View)`
    height: ${(props) => props.theme.space[4]}
`;

const Title = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.title}
    font-weight: ${(props) => props.theme.fontWeights.bold}
`;

const Signup = () => {
    return (
        <SafeArea>
            <SignUpContainer>
                <Space />
                <Title>Lets Sign You Up</Title>
                <SignupForm/>
                <Space />
            </SignUpContainer>
        </SafeArea>
    )
}

export default Signup
