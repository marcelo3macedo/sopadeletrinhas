import { SESSIONTYPE_CORRECTANSWER, SESSIONTYPE_DRAGNDROP, SESSIONTYPE_PAINT } from '@constants/sessionTypes';
import { getRandomValue } from './NumberHelper';
import { addRandomElements, getAnimalOptions, getAnimalWithImageOptions, getElementsToAdd } from './WordHelper';

function getType(configs: any) {
    let randomNumber = Math.random();
    let chooseType = configs[0].type;

    for (let j = 0; j < configs.length; j++) {
        const type = configs[j];
        if (randomNumber < type.possibility) {
            chooseType = type.type;
            break;
        }
        randomNumber -= type.possibility;
    }

    return chooseType;
}

function getTypeOptions(type:string, configs:any, selected: any) {
    if (type === SESSIONTYPE_DRAGNDROP) {
        const alreadySelected = selected.filter((x: any) => x.type === SESSIONTYPE_DRAGNDROP).map((y:any) => y.details.slug);
        const filteredData = configs.elements.filter((item:any) => !alreadySelected.includes(item.slug));
        const target = filteredData.length === 0 ? configs.elements : filteredData;

        const pos = getRandomValue(target.length - 1);
        const { word, slug, syllables } = target[pos];
        const elementsToAdd = getElementsToAdd(syllables);
        const options = addRandomElements(syllables, configs.possibleOptions, elementsToAdd);

        return {
            word,
            slug,
            syllables,
            options,
        };
    }

    if (type === SESSIONTYPE_PAINT) {
        const alreadySelected = selected.filter((x: any) => x.type === SESSIONTYPE_PAINT).map((y:any) => y.details.slug);
        const filteredData = configs.elements.filter((item:any) => !alreadySelected.includes(item.slug));
        const target = filteredData.length === 0 ? configs.elements : filteredData;

        const pos = getRandomValue(target.length - 1);
        const { word, slug } = target[pos];
        const options = getAnimalOptions(target[pos], configs.elements, 3);

        return {
            word,
            slug,
            correctAnswer: word,
            options,
        };
    }

    if (type === SESSIONTYPE_CORRECTANSWER) {
        const alreadySelected = selected.filter((x: any) => x.type === SESSIONTYPE_PAINT).map((y:any) => y.details.slug);
        const filteredData = configs.elements.filter((item:any) => !alreadySelected.includes(item.slug));
        const target = filteredData.length === 0 ? configs.elements : filteredData;

        const pos = getRandomValue(target.length - 1);
        const { word, slug } = target[pos];
        const options = getAnimalWithImageOptions(target[pos], configs.elements, 3);

        return {
            word,
            slug,
            correctAnswer: word,
            options,
        };

    }
}



export {
    getType,
    getTypeOptions
};

