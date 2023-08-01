import styled from 'styled-components/native';

export const Text = styled.Text`
  fontFamily: ${({ theme }) => theme.FONT_FAMILY_BOLD};
  fontSize: ${({ theme }) => theme.FONT_SIZE_MEDIUM};
  color: ${({ theme }) => theme.SECONDARY_COLOR};
  lineHeight: 25px;
  paddingTop: 20px;
`;
