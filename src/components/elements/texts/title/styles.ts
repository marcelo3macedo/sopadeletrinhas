import { Styles } from '@interfaces/texts/FontProps';
import { styled } from 'styled-components/native';

export const Text = styled.Text<any>`
  ${({ theme, styleName }:any) => {
    switch (styleName) {
      case Styles.VentiCentered:
        return `
          fontFamily: ${theme.FONT_FAMILY};
          fontSize: ${theme.FONT_SIZE_MAXVENTI};
          color: ${theme.PRIMARY_COLOR};
          textAlign: center;
        `;
      case Styles.Huge:
        return `
          fontFamily: ${theme.FONT_FAMILY};
          fontSize: ${theme.FONT_SIZE_VENTI};
          color: ${theme.PRIMARY_COLOR};
        `;
      case Styles.HugeCentered:
        return `
          fontFamily: ${theme.FONT_FAMILY};
          fontSize: ${theme.FONT_SIZE_VENTI};
          color: ${theme.PRIMARY_COLOR};
          textAlign: center;
        `;
      case Styles.LargeCentered:
        return `
          fontFamily: ${theme.FONT_FAMILY};
          fontSize: ${theme.FONT_SIZE_LARGE};
          color: ${theme.PRIMARY_COLOR};
          textAlign: center;
        `;
      case Styles.Medium:
        return `
          fontFamily: ${theme.FONT_FAMILY};
          fontSize: ${theme.FONT_SIZE_MEDIUM};
          color: ${theme.PRIMARY_COLOR};
          textAlign: center;
        `;
      default:
        return `
        fontFamily: ${theme.FONT_FAMILY};
        fontSize: ${theme.FONT_SIZE_LARGE};
        color: ${theme.PRIMARY_COLOR};
      `;
    }
  }}
`;
