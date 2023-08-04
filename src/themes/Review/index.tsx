import { PageWrapperProps } from '@interfaces/layouts/PageWrapperProps';
import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Content } from './styles';

export function ReviewTheme({ children }: PageWrapperProps) {
  return (
    <Container>
        <StatusBar
            barStyle="light-content"
            translucent
        />
        <Content>
          {children}
        </Content>
    </Container>
  );
}
