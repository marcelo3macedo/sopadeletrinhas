import { Styles } from '@interfaces/elements/inputs/ValueProps';
import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    default: {
        padding: 0,
        margin: 0,
        textAlignVertical: 'top',
        color: theme.PRIMARY_COLOR,
    },
    darkBordered: {
        borderColor: theme.PALLETE01_COLOR,
        borderWidth: 2,
        backgroundColor: theme.LIGHT_COLOR,
        paddingHorizontal: 20,
        color: theme.PRIMARY_COLOR,
    },
    darkSmallBordered: {
        borderColor: theme.PALLETE01_COLOR,
        borderWidth: 2,
        backgroundColor: theme.LIGHT_COLOR,
        padding: 20,
        textAlignVertical: 'top',
        color: theme.PRIMARY_COLOR,
    },
});

export const getStyle = (type:Styles) => {
    if (type === Styles.DarkBorder) {return style.darkBordered;}
    if (type === Styles.DarkSmallBorder) {return style.darkSmallBordered;}

    return style.default;
};
