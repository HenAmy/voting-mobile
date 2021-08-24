import React from 'react'
import styled from "styled-components/native";
import { View, Text, FlatList} from 'react-native'

import { SafeArea } from "../../../components/utilities/SafeArea";
import { ListItem } from "../../components/ListItem";

const elections = [
    {
        id: 1,
        title: 'Ghana Surf Club Elite',
        organisation: 'GHSCE-2021'
    },
    {
        id: 2,
        title: 'VGMA Awards',
        organisation: 'VGMA Inc'
    },
    {
        id: 3,
        title: 'Can You Eat Accra',
        organisation: 'Maggie Group of Companies'
    },
    {
        id: 4,
        title: 'Entreprenuer of the Year',
        organisation: 'Accra Mega'
    },
    {
        id: 5,
        title: 'University Awards',
        organisation: 'University of Ghana'
    },
    {
        id: 6,
        title: 'Law Elections',
        organisation: 'Ghana Bar Association'
    },
    {
        id: 7,
        title: 'Power to YOU',
        organisation: 'Vodafone Ghana'
    },
    {
        id: 8,
        title: 'Busy Games Award',
        organisation: 'Busy Internet'
    },
]

const Caption = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.body}
`;

const ListContainer = styled(FlatList)`
    margin: ${(props) => props.theme.space[3]}
`;

const TitleContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]}
    background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const Title = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.title}
    font-weight: ${(props) => props.theme.fontWeights.bold}
`;

const Elections = () => {
    return (
        <SafeArea>
            <TitleContainer>
                <Title>All Elections</Title>
                <Caption>Choose an election and proceed to vote for your favourite contestant</Caption>
            </TitleContainer>
            <ListContainer
                data={elections}
                renderItem={({item}) => {
                    return (
                        <ListItem title={item.title} organisation={item.organisation}/>
                    )
                } }
                keyExtractor={(item) => item.title}
            />
        </SafeArea>
    )
}

export default Elections
