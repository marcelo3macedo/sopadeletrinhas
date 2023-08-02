import { StyleSheet } from 'react-native';
import { styled } from 'styled-components/native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
});

export const ModalArea = styled.View`
    minWidth: 350px;
    background-color: white;
    border-radius: 10px;
    padding-vertical: 10px;
`;

export const Header = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
`;

export const Item = styled.View`
    padding: 10px;
`;
