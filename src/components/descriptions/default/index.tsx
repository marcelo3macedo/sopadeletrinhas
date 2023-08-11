import { ParagraphText } from '@components/elements/texts/paragraph';
import React from 'react';
import { View } from 'react-native';

export function DefaultDescription({ content }:any) {
    const lines = content ? content.split('|') : null;

    if (!lines) {return <></>;}

    return (
        <View>
            {lines.map((s:string, i:number) => (<ParagraphText key={i} value={s} />))}
        </View>
    );
}
