import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { TitleText } from '@components/elements/texts/title';
import { CONFIGMODAL_FONT } from '@constants/configModal';
import { updateAction } from '@store/modules/config/actions';
import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Item, ModalArea, style } from './styles';

export function FontSizeModal({ modal, closeAction }:any) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { fontAvailable } = useSelector((state:RootState) => state.config);

    if (!fontAvailable) {return <></>;}

    function getName(value:string) {
        return t(`font.${value}`);
    }

    function changeFont(value: string) {
        dispatch(updateAction({ target: 'fontSize', value }));
        closeAction();
    }

    return (
        <Modal visible={modal === CONFIGMODAL_FONT} style={style.container} onDismiss={closeAction}>
            <ModalArea>
                <Header>
                    <TitleText value={t('modal.fontSize')} />
                </Header>

                {fontAvailable.map((s:any) => (
                    <Item key={s}>
                        <ButtonSecondary title={getName(s)} action={() => { changeFont(s); }} />
                    </Item>
                ))}
            </ModalArea>
        </Modal>
    );
}
