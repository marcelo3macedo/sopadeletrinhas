import Abelha from '@assets/animals/abelha.png';
import Baleia from '@assets/animals/baleia.png';
import Cachorro from '@assets/animals/cachorro.png';
import Pato from '@assets/animals/pato.png';
import { AnimalMap } from '@interfaces/animal/AnimalMap';

const animalMap : AnimalMap = {
    pato: Pato,
    abelha: Abelha,
    baleia: Baleia,
    cachorro: Cachorro,
};

function getImageFromSlug(slug: string) {
    if (!slug) {return;}

    return animalMap[slug];
}

export {
    getImageFromSlug
};

