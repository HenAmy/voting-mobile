import React from 'react'
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const ListIcon = styled(Ionicons)`
    margin-top: ${(props) => props.theme.space[3]}
`;

const Listitem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space[3]}
`;

export const ListItemDelete = ({ title, role }) => {
  
    return (
        <Listitem
            title={title}
            description={role}
            left={(props) => <Avatar.Image size={70} source={require('../../../assets/icon.png')} />}
            right={(props) => <ListIcon name="trash-outline" size={35} color="black" />}
        />
    )
}
