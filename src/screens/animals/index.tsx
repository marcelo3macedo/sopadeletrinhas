import Question from '@assets/animations/question.json';
import { TitleText } from '@components/elements/texts/title';
import { getAnimalByName } from '@helpers/AnimationHelper';
import { RootState } from '@store/modules/rootReducer';
import LottieView from 'lottie-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Styles } from '@interfaces/texts/FontProps';
import { style } from './styles';

export function Animals() {
    const { t } = useTranslation();
    const { animals }:any = useSelector((state:RootState) => state.animals);
    const data = Object.keys(animals);

    return (
        <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            style={style.list}
            renderItem={({ item, index }) => (
                <View style={style.box}>
                    { animals[item] ? (
                        <>
                            <LottieView
                                key={index}
                                source={getAnimalByName(item)}
                                style={style.animations}
                                autoPlay
                                loop
                            />
                            <TitleText value={t(`activities.animals.${item}`)} styled={Styles.Medium} />
                        </>
                    ) : (
                        <>
                            <LottieView
                                key={index}
                                source={Question}
                                style={style.animations}
                                autoPlay
                                loop
                            />
                            <TitleText value={t('activities.animals.lock')} styled={Styles.Medium} />
                        </>
                    ) }
                </View>
            )}
        />
    );
}
