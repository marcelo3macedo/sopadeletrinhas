import { PageWrapperProps } from '@interfaces/layouts/PageWrapperProps';
import React from 'react';
import { StatusBar } from 'react-native';

import { MenuHeader } from '@components/headers/Menu';
import { useTheme } from 'styled-components';
import { Container, Content } from './styles';

export function MainTheme({ children }: PageWrapperProps) {
  const theme = useTheme();
  return (
    <Container>
        <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor={theme?.PALLETE02_COLOR}
        />
        <Content>
          <MenuHeader />
          {children}
        </Content>
    </Container>
  );
}
