import { NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';

type Nav = {
navigate: (name: string, params:any) => void;
}

export const navigationRef = React.createRef<NavigationContainerRef<Nav>>();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name as never, params as never);
}
