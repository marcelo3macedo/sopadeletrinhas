import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const tabletWidth = 600;

function isTablet() {
    return windowWidth >= tabletWidth;
}

export {
    isTablet
};

