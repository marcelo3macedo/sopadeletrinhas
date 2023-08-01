import styled from 'styled-components/native';

export const Text = styled.Text`
  fontSize: ${({ theme }) => theme.FONT_SIZE_VENTI};
  fontFamily: ${({ theme }) => theme.FONT_FAMILY_BOLD};
  color: ${({ theme }) => theme.TITLE_COLOR};
`;
