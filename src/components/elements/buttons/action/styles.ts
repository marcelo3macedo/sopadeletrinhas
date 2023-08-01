import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 30,
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.PALLETE01_COLOR,
        borderBottomColor: theme.DARK_COLOR,
        borderRadius: 60,
        borderBottomWidth: 5,
    },
    textArea: {
        paddingTop: 10,
    },
});
