import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.PALLETE01_COLOR,
        borderBottomColor: theme.PALLETE01_COLOR_DARK,
        borderRadius: 60,
        borderBottomWidth: 10,
    },
    textArea: {
        paddingTop: 10,
    },
});
