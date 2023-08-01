import * as React from 'react';

import Bee from '@assets/animals/abelha.png';
import BeeBlack from '@assets/animals/abelha_black.png';
import Whale from '@assets/animals/baleia.png';
import WhaleBlack from '@assets/animals/baleia_black.png';
import Butterfly from '@assets/animals/borboleta.png';
import ButterflyBlack from '@assets/animals/borboleta_black.png';
import Rabbit from '@assets/animals/coelho.png';
import RabbitBlack from '@assets/animals/coelho_black.png';

import { View } from 'react-native';
import { style } from './styles';

export function Review() {
    const elements = [
        { destiny: Bee, origin: BeeBlack },
        { destiny: Whale, origin: WhaleBlack },
        { destiny: Butterfly, origin: ButterflyBlack },
        { destiny: Rabbit, origin: RabbitBlack }
    ]

    return (
        <View style={style.container}>
        </View>
    )
}
