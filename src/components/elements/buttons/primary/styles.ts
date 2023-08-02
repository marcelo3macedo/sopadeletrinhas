import { StyleSheet } from 'react-native';
import { styled } from 'styled-components/native';

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        borderBottomWidth: 5,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
});

export const TextArea = styled.View`
    padding-top: 0px;
`;
