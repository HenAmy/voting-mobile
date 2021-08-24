import React from 'react'
import styled from 'styled-components/native';
import { View, Text, StyleSheet } from 'react-native'
import { ActivityIndicator, Colors } from "react-native-paper";

import { Spacer } from '../../../components/spacer/Spacer';

export const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: center
  padding: ${(props) => props.theme.space[2]};
`;

const LoaderComponent = () => {
    return (
        <View style={{ flex: 1 ,backgroundColor: '#1a357a' }}>
            <Wrapper>
                <ActivityIndicator animating={true} size={100} color={Colors.white} />
                <Spacer position="top" size="large"/>
                <View style={{ alignItems: "center" }}>
                    <Text style={ styles.loadingText }>Creating your election, please wait</Text>
                </View>
            </Wrapper>
        </View>
    )
}

export default LoaderComponent

const styles = StyleSheet.create({
    loadingText: {
        fontSize: 14,
        color: "white",
        fontFamily: "Nexa_Bold",
    }
})