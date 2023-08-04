import { PictureProps } from '@interfaces/components/pictures/PictureProps';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Content, Picture, Wrapper } from './styles';

export function AnimalImage({ source, action }:PictureProps) {
    return (
        <TouchableOpacity onPress={action}>
            <Wrapper>
                <Content>
                    <Picture source={source} />
                </Content>
            </Wrapper>
        </TouchableOpacity>
    );
}
