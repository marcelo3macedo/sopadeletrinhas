import { ItemButton } from '@components/config/itemButton';
import { ItemCheckboxConfig } from '@components/config/itemCheckbox';
import { TitleText } from '@components/elements/texts/title';
import { TopHeader } from '@components/headers/Top';
import { FontSizeModal } from '@components/modals/fontSize';
import { CONFIGMODAL_FONT } from '@constants/configModal';
import { updateAction } from '@store/modules/config/actions';
import { RootState } from '@store/modules/rootReducer';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Block, Container, Item, Items, Wrapper } from './styles';

export function ConfigScreen() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [ modal, setModal ] = useState('');
    const {
      fontSize,
      soundEffects,
    } = useSelector((state:RootState) => state.config);

    function getFontName(value:string) {
        return t(`font.${value}`);
    }

    function closeModal() {
      setModal('');
    }

    function changeConfig(target:string, value:any) {
      dispatch(updateAction({ target, value }));
    }

    return (
        <Wrapper>
            <Container>
                <TopHeader title={t('config.title')} description={t('config.subTitle')} />
                <Items>
                    <Item>
                        <TitleText value={t('config.notifications')} />

                        <Block>
                            <ItemCheckboxConfig title={t('config.soundEffects')} value={soundEffects} action={() => { changeConfig('soundEffects', !soundEffects); }} />
                        </Block>
                    </Item>
                    <Item>
                        <TitleText value={t('config.accessibility')} />

                        <Block>
                            <ItemButton title={t('config.fontSize')} value={getFontName(fontSize)} action={() => { setModal(CONFIGMODAL_FONT); }} />
                        </Block>
                    </Item>
                </Items>
            </Container>
            <FontSizeModal modal={modal} closeAction={closeModal} />
        </Wrapper>
    );
}
