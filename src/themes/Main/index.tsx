import { PageWrapperProps } from '@interfaces/layouts/PageWrapperProps';
import React from 'react';
import { StatusBar } from 'react-native';

import { MenuHeader } from '@components/headers/Menu';
import { Container, Content } from './styles';

export function MainTheme({ children }: PageWrapperProps) {
  return (
    <Container>
        <StatusBar
            barStyle="light-content"
            translucent
        />
        <Content>
          <MenuHeader />
          {children}
        </Content>
    </Container>
  );
}
