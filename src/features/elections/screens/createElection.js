import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styled from "styled-components/native";
import { Button } from "react-native-paper";

import { SafeArea } from "../../../components/utilities/SafeArea";
import { CreateElectionForm } from "../../components/CreateElectionForm";

const CreateElectionContainer = styled(ScrollView)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.secondary}
`;

const CreateElectionButtun = styled(Button)`
    background-color: ${(props) => props.theme.colors.ui.primary};
    padding: ${(props) => props.theme.space[2]};
    border-radius: 0px;
    margin: ${(props) => props.theme.space[3]}
`;

const Title = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.title}
    font-weight: ${(props) => props.theme.fontWeights.bold}
`;

const TitleContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]}
    background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const CreateElection = () => {
    return (
        <SafeArea>
            <TitleContainer>
                <Title>Create An Election</Title>
            </TitleContainer>
            <CreateElectionContainer>
                <CreateElectionForm/>
            </CreateElectionContainer>
            <CreateElectionButtun mode="contained">Add Participants</CreateElectionButtun> 
        </SafeArea>
    )
}

export default CreateElection
