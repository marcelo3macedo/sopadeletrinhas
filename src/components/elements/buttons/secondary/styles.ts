import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: theme.GRAY_COLOR,
        borderRadius: 10,
    },
    textArea: {
        paddingHorizontal: 10,
    },
});
