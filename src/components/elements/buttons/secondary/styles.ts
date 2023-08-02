import { styled } from 'styled-components/native';

export const Container = styled.View<any>`
  ${({ theme, styleName }:any) => {
    if (styleName) {
      return `
        paddingHorizontal: 20px;
        paddingVertical: 10px;
        display: flex;
        alignItems: center;
        justifyContent: center;
        backgroundColor: ${theme.GRAY_COLOR};
        borderRadius: 5px;
      `;
    }

    return `
        paddingHorizontal: 40px;
        paddingVertical: 15px;
        display: flex;
        alignItems: center;
        justifyContent: center;
        backgroundColor: ${theme.GRAY_COLOR};
        borderRadius: 5px;
    `;
  }}
`;

