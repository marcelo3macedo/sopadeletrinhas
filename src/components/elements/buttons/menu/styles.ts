import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.LIGHT_COLOR,
        marginVertical: 2,
    },
    shadow: {
        shadowColor: theme.BORDER_COLOR,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    textArea: {
        padding: 5,
    },
});
