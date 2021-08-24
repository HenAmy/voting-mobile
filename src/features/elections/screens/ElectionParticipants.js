import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styled from "styled-components/native";
import { Button } from "react-native-paper";

import { SafeArea } from "../../../components/utilities/SafeArea";
import { ListItemDelete } from "../../../features/components/ListItemDelete";

const Caption = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.body}
`;

const AddParticipantsButtun = styled(Button).attrs({
    labelStyle: {
        color: "#1a357a",
        fontWeight: 'bold',
        fontSize: 17,
        textTransform: 'capitalize'
    }
})`
    background-color: ${(props) => props.theme.colors.bg.primary};
    color: red
    padding: ${(props) => props.theme.space[1]};
    border-radius: 5px;
    margin-top: ${(props) => props.theme.space[3]}
`;

const EndElectionButtun = styled(Button)`
    background-color: ${(props) => props.theme.colors.ui.secondary};
    padding: ${(props) => props.theme.space[2]};
    border-radius: 0px;
    margin: ${(props) => props.theme.space[3]}
`;

const ListContainer = styled(ScrollView)`
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

const ElectionParticipants = () => {
    return (
        <SafeArea>
            <TitleContainer>
                <Title>GentleMen Of Accra</Title>
                <Caption>Add Participants</Caption>
                <AddParticipantsButtun mode="contained">Add a Participant</AddParticipantsButtun> 
            </TitleContainer>
            <ListContainer>
                <ListItemDelete title="Nana Kweku" role="Your Gentleman"/>
                <ListItemDelete title="Henry Amy" role="Your Gentleman"/>
            </ListContainer>
            <EndElectionButtun mode="contained">End Election</EndElectionButtun> 
        </SafeArea>
    )
}

export default ElectionParticipants
