import React from 'react'
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

const Listitem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space[3]}
`;

export const ListItem = ({ title, organisation }) => {
  
    return (
        <Listitem
            title={title}
            description={organisation}
            left={(props) => <Avatar.Image size={70} source={require('../../../assets/icon.png')} />}
        />
    )
}
