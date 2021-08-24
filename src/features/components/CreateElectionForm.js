import React from 'react'
import { View, Text } from 'react-native'
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

const Space = styled(View)`
    height: ${(props) => props.theme.space[4]}
`;

const Textinput = styled(TextInput)`
    background-color: ${(props) => props.theme.colors.bg.secondary}
`;

export const CreateElectionForm = () => {
    return (
        <>
            {/* <Space/> */}
            <Textinput label="Election Name" mode="flat" selectionColor="#000" underlineColor="#000" outlineColor="#000"/>
            <Space/>
            <Textinput label="Start Date" mode="flat" selectionColor="#000" underlineColor="#000" outlineColor="#000"/>
            <Space/>
            <Textinput label="Phone Number" mode="flat" selectionColor="#000" underlineColor="#000" outlineColor="#000"/>
            <Space/>
            <Textinput label="Organisation" mode="flat" selectionColor="#000" underlineColor="#000" outlineColor="#000"/>
        </>
    )
}
