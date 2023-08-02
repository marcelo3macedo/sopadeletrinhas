import { Styles } from '@interfaces/texts/TextProps';
import styled from 'styled-components/native';

export const Text = styled.Text<any>`
  ${({ theme, styledName }:any) => {
    if (styledName === Styles.DarkH3) {
      return `
        fontSize: ${theme.FONT_SIZE_MEDIUM};
        fontFamily: ${theme.FONT_FAMILY};
        color: ${theme.PRIMARY_COLOR};
      `;
    }

    return `
      fontSize: ${theme.FONT_SIZE_SMALL};
      fontFamily: ${theme.FONT_FAMILY};
      color: ${theme.PRIMARY_COLOR};
    `;
  }}
`;

