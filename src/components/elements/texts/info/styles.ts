import { styled } from 'styled-components/native';

export const Text = styled.Text<any>`
  ${({ theme, styleName }:any) => {
    if (styleName === 'dark') {
      return `
        fontFamily: ${theme.FONT_FAMILY};
        fontSize: ${theme.FONT_SIZE_SMALL};
        color: ${theme.OVERBACKGROUND_COLOR};
      `;
    }

    return `
      fontFamily: ${theme.FONT_FAMILY};
      fontSize: ${theme.FONT_SIZE_SMALL};
      color: ${theme.LIGHT_COLOR};
    `;
  }}
`;
