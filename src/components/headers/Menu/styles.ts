import { styled } from 'styled-components/native';

export const Container = styled.View`
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.PALLETE02_COLOR};
`;

export const Header = styled.View`
    padding-bottom: 5px;
`;

export const Image = styled.View`
    display: flex;
    align-items: center;
`;
export const Animals = styled.TouchableOpacity`
    padding-bottom: 5px;
`;
