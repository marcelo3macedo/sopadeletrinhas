import Abelha from '@assets/animals/abelha.png';
import AbelhaBlack from '@assets/animals/abelha_black.png';
import Baleia from '@assets/animals/baleia.png';
import BaleiaBlack from '@assets/animals/baleia_black.png';
import Cachorro from '@assets/animals/cachorro.png';
import CachorroBlack from '@assets/animals/cachorro_black.png';
import Pato from '@assets/animals/pato.png';
import PatoBlack from '@assets/animals/pato_black.png';
import { AnimalMap } from '@interfaces/animal/AnimalMap';

const animalMap : AnimalMap = {
    pato: Pato,
    pato_black: PatoBlack,
    abelha: Abelha,
    abelha_black: AbelhaBlack,
    baleia: Baleia,
    baleia_black: BaleiaBlack,
    cachorro: Cachorro,
    cachorro_black: CachorroBlack,
};

function getImageFromSlug(slug: string) {
    if (!slug) {return;}

    return animalMap[slug];
}

export {
    getImageFromSlug
};

