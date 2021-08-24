import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import styled from "styled-components/native";
import { Avatar, Button } from "react-native-paper";

import { SafeArea } from "../../../components/utilities/SafeArea";
import { Spacer } from "../../../components/spacer/Spacer";

const ParticipantsContainer = styled(ScrollView)`
    padding: ${(props) => props.theme.space[3]}
    background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const ParticipantImageContainer = styled(View)`
    align-items: center
`;

const SigninButtun = styled(Button)`
    background-color: ${(props) => props.theme.colors.ui.secondary};
    padding: ${(props) => props.theme.space[2]};
    border-radius: 0px;
    margin: ${(props) => props.theme.space[3]}
`;

const Participant = () => {
    return (
        <SafeArea>
            <ParticipantsContainer>
                <Text style={styles.Title}>GentleMen Of Accra</Text>
                <Text style={styles.Caption}>Candidate</Text>
                <Spacer position="top" size="large"/>

                <ParticipantImageContainer style={{ alignItems: "center" }}>
                    <Avatar.Image size={150} source={require('../../../../assets/icon.png')} /> 
                    <Spacer position="top" size="medium"/>
                    <Text style={styles.NameTitle}>Nana Kweku AduMatta</Text>
                    <Text style={styles.Votes}>30 Votes</Text>
                </ParticipantImageContainer>

                <Spacer size="large" position="bottom"/> 

                <Text style={styles.Bio}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    an unknown printer took a galley of type and scrambled it to make a type specimen 
                    book.
                </Text>
            </ParticipantsContainer>
            <SigninButtun mode="contained">Evict</SigninButtun> 
        </SafeArea>
    )
}

export default Participant

const styles = StyleSheet.create({
    Bio: {
        fontFamily: 'Nexa_Bold', 
        fontSize: 14,
        
    },
    Caption: {
        fontFamily: 'Nexa_Light', 
        fontSize: 16
    },
    NameTitle: {
        fontFamily: 'Nexa_Bold', 
        fontSize: 16,
    },
    Title: {
        fontFamily: 'Nexa_Bold', 
        fontSize: 20
    },
    Votes: {
        fontFamily: 'Nexa_Light', 
        fontSize: 14,
        color: "#808080"
    },
})
