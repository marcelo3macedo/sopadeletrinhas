import { FONTMODE_NORMAL } from '@constants/fontMode';
import { store } from '@store/index';
import { theme as colorStyle } from '@styles/colors/default.style';
import { theme as defaultStyle } from '@styles/default.style';
import { theme as bigStyle } from '@styles/fonts/big.style';
import { theme as normalStyle } from '@styles/fonts/normal.style';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';

let fontSizeStore = (store.getState() as any).config.fontSize;

export default function GlobalTheme({ children }:any) {
    const [ theme, setTheme ] = useState({
        ...defaultStyle,
        ...normalStyle,
        ...colorStyle,
    });

    function getTheme () {
        const state = store.getState() as any;
        const fontMode = state.config.fontSize;
        const fontSize = fontMode === FONTMODE_NORMAL ? normalStyle : bigStyle;
        const colors = colorStyle;

        return {
            ...defaultStyle,
            ...fontSize,
            ...colors,
        };
    }

    store.subscribe(() => {
        const fontSizeLive = (store.getState() as any).config.fontSize;

        if (fontSizeStore !== fontSizeLive) {
            const newTheme = getTheme();
            fontSizeStore = fontSizeLive;
            setTheme(newTheme);
        }
    });

    return (
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
    );
}
