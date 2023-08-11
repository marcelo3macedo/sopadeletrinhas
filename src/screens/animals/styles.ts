import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animations: {
      aspectRatio: 1,
      width: 140,
    },
    box: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20,
    },
    list: {
      width: '100%',
      flex: 1,
    },
});
