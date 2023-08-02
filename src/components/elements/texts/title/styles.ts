import { styled } from 'styled-components/native';

export const Text = styled.Text<any>`
  ${({ theme, styleName }:any) => {
    switch (styleName) {
      default:
        return `
        fontFamily: ${theme.FONT_FAMILY};
        fontSize: ${theme.FONT_SIZE_LARGE};
        color: ${theme.PRIMARY_COLOR};
      `;
    }
  }}
`;
