import { Styles } from '@interfaces/texts/TextProps';
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
        `;
      case Styles.DarkH1Centered:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_LARGE};
          color: ${theme.PRIMARY_COLOR};
          textAlign: center;
        `;
      case Styles.LightH1Centered:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_LARGE};
          color: ${theme.TITLE_COLOR};
          textAlign: center;
        `;
      case Styles.DarkH2Centered:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_MEDIUM};
          color: ${theme.PRIMARY_COLOR};
          textAlign: center;
        `;
      case Styles.DarkH3:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_MEDIUM};
          color: ${theme.PRIMARY_COLOR};
        `;
      case Styles.DarkH3Centered:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_MEDIUM};
          color: ${theme.PRIMARY_COLOR};
          textAlign: center;
        `;
      case Styles.DarkH4Centered:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_SMALL};
          color: ${theme.PRIMARY_COLOR};
          textAlign: center;
        `;
      case Styles.Pallete2H2Centered:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_LARGE};
          color: ${theme.PALLETE03_COLOR};
          textAlign: center;
        `;
      case Styles.Pallete2H3Centered:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_MEDIUM};
          color: ${theme.PALLETE03_COLOR};
          textAlign: center;
        `;
      case Styles.Pallete2H4Centered:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_SMALL};
          color: ${theme.PALLETE03_COLOR};
          textAlign: center;
        `;
      case Styles.DarkH3Enumerated:
        return `
          backgroundColor: ${theme.PALLETE01_COLOR};
          borderRadius: 80px;
          fontFamily: ${theme.FONT_FAMILY};
          fontSize: ${theme.FONT_SIZE_MEDIUM};
          color: ${theme.PRIMARY_COLOR};
          fontWeight: bold;
          marginHorizontal: 10px;
        `;
      case Styles.DarkH4:
        return `
          paddingBottom: 10px;
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_MEDIUM};
          color: ${theme.TITLE_COLOR};
        `;
      case Styles.DarkH5:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_SMALL};
          color: ${theme.TITLE_COLOR};
        `;
      case Styles.LightH3Centered:
        return `
          fontFamily: ${theme.FONT_FAMILY_BOLD};
          fontSize: ${theme.FONT_SIZE_MEDIUM};
          color: ${theme.LIGHT_COLOR};
          textAlign: center;
        `;
      default:
        return '';
    }
  }}
`;
