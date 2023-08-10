function getRandomElement(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function addRandomElements(syllables: string[], possibleOptions: string[], count: number): string[] {
    const uniqueOptions = possibleOptions.filter(option => !syllables.includes(option));
    const newElements = [];

    for (let i = 0; i < count; i++) {
        const randomOption = getRandomElement(uniqueOptions);
        if (randomOption) {
        newElements.push(randomOption);
        uniqueOptions.splice(uniqueOptions.indexOf(randomOption), 1);
        }
    }

    return shuffleArray([...syllables, ...newElements]);
}

function shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getElementsToAdd(syllables: string[]) {
    switch (syllables.length) {
        case 1: return 3;
        case 2: return 2;
        case 3: return 3;
        case 4: return 2;
        default: return 2;
    }
}

function addRandomAnimals(origin:any, elements:number) {
    const shuffledArray = origin.slice().sort(() => Math.random() - 0.5);

    return shuffledArray.slice(0, elements);
}

function getAnimalOptions(selected:any, origin:any, elements:number) {
    const filteredData = origin.filter((item:any) => item.slug !== selected.slug);
    const animals = addRandomAnimals(filteredData, elements);
    const result = animals.map((x:any) => { return { animal: x.slug };});

    return shuffleArray([ ...result, {
        animal: selected.slug,
    }]);
}

function getAnimalWithImageOptions(selected:any, origin:any, elements:number) {
    const filteredData = origin.filter((item:any) => item.slug !== selected.slug);
    const animals = addRandomAnimals(filteredData, elements);
    const result = animals.map((x:any) => { return { value: x.slug, image: x.slug };});

    return shuffleArray([ ...result, {
        value: selected.slug,
        image: selected.slug,
    }]);
}

export {
    addRandomAnimals, addRandomElements, getAnimalOptions, getAnimalWithImageOptions, getElementsToAdd
};

