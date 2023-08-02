import { Styles } from '@interfaces/texts/FontProps';
import { styled } from 'styled-components/native';

export const Text = styled.Text<any>`
  ${({ theme, styleName }:any) => {
    switch (styleName) {
      case Styles.Huge:
        return `
          fontFamily: ${theme.FONT_FAMILY};
          fontSize: ${theme.FONT_SIZE_VENTI};
          color: ${theme.LIGHT_COLOR};
        `;
      case Styles.HugeCentered:
        return `
          fontFamily: ${theme.FONT_FAMILY};
          fontSize: ${theme.FONT_SIZE_VENTI};
          color: ${theme.LIGHT_COLOR};
          textAlign: center;
        `;
      case Styles.LargeCentered:
        return `
          fontFamily: ${theme.FONT_FAMILY};
          fontSize: ${theme.FONT_SIZE_LARGE};
          color: ${theme.LIGHT_COLOR};
          textAlign: center;
        `;
      default:
        return `
        fontFamily: ${theme.FONT_FAMILY};
        fontSize: ${theme.FONT_SIZE_LARGE};
        color: ${theme.LIGHT_COLOR};
      `;
    }
  }}
`;
