import { Styles } from '@interfaces/images/IconProps';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    small: {
        width: 20,
        height: 20,
    },
    medium: {
        width: 25,
        height: 25,
    },
    large: {
        width: 35,
        height: 35,
    },
});

export const getStyle = (type:Styles) => {
    if (type === Styles.Small) {return style.small;}
    if (type === Styles.Medium) {return style.medium;}
    if (type === Styles.Large) {return style.large;}

    return style.small;
};
