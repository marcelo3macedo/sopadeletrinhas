
import { ButtonAction } from '@components/elements/buttons/action';
import { TitleText } from '@components/elements/texts/title';
import { getColorPallete } from '@helpers/DifficultyHelper';
import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modal } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { Styles } from '@interfaces/texts/FontProps';
import { style } from './styles';

export function DifficultyModal({ modal, dismissAction }:any) {
    const { t } = useTranslation();
    const { options } = useSelector((state:RootState) => state.difficulties);

    if (!options) {return <></>;}

    function getName(name:string) {
        return t(`difficulty.${name}`);
    }

    function selectOptionHandler() {
        dismissAction();
    }

    return (
        <Modal visible={modal} style={style.container} onDismiss={dismissAction}>
            <View style={style.modal}>
                <TitleText value={t('difficulty.title')} styled={Styles.HugeCentered} />

                <View style={style.action}>
                    {options.map((d, i) => (
                        <TouchableOpacity style={style.button} key={i} onPress={() => { selectOptionHandler(d); }}>
                            <ButtonAction title={getName(d)} pallete={getColorPallete(d)} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Modal>
    );
}
