import { Styles } from '@interfaces/texts/LinkedTextProps';
import { styled } from 'styled-components/native';

export const Text = styled.Text<any>`
  ${({ theme, styleName }:any) => {
    switch (styleName) {
      case 'default':
        return `
          fontFamily: ${theme.FONT_FAMILY};
          fontSize: ${theme.FONT_SIZE_LARGE};
          color: ${theme.PRIMARY_COLOR};
        `;
      case Styles.Pallete03Centered:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_LARGE};
          color: ${theme.PALLETE03_COLOR};
          textAlign: center;
          paddingTop: 10px;
          paddingBottom: 10px;
        `;
      case Styles.DarkH2Centered:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_MEDIUM};
          color: ${theme.PRIMARY_COLOR};
          textAlign: center;
          paddingTop: 10px;
          paddingBottom: 10px;
        `;
      case Styles.DarkH3:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_SMALL};
          color: ${theme.PRIMARY_COLOR};
          fontStyle: italic;
          paddingTop: 10px;
          paddingBottom: 10px;
        `;
      case Styles.DarkH3Enumerated:
        return `
          backgroundColor: ${theme.PALLETE01_COLOR};
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_MEDIUM};
          color: ${theme.PRIMARY_COLOR};
          borderRadius: 80px;
          textAlign: center;
          paddingVertical: 5px;
          paddingHorizontal: 15px;
          marginHorizontal: 10px;
        `;
      case Styles.DarkH3Blue:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_SMALL};
          color: ${theme.PALLETE03_COLOR};
          textAlign: center;
          paddingTop: 10px;
          paddingBottom: 10px;
          fontStyle: italic;
        `;
      default:
        return '';
    }
  }}
`;
