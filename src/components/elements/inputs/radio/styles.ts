import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    content: {
        paddingVertical: 10,
    },
    option: {
        fontSize: theme.FONT_SIZE_SMALL,
        color: theme.PRIMARY_COLOR,
    },
});
