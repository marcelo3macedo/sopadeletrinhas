import cat from '@assets/animations/animals/cat.json';
import cow from '@assets/animations/animals/cow.json';
import dog from '@assets/animations/animals/dog.json';
import elephant from '@assets/animations/animals/elephant.json';
import panda from '@assets/animations/animals/panda.json';
import pig from '@assets/animations/animals/pig.json';
import pigeon from '@assets/animations/animals/pigeon.json';
import rabbit from '@assets/animations/animals/rabbit.json';
import sloth from '@assets/animations/animals/sloth.json';
import tiger from '@assets/animations/animals/tiger.json';
import toucan from '@assets/animations/animals/toucan.json';
import whale from '@assets/animations/animals/whale.json';
import { AnimalMap } from '@interfaces/animal/AnimalMap';

const animalMap:AnimalMap = {
    cat: cat,
    cow: cow,
    dog: dog,
    elephant: elephant,
    panda: panda,
    pig: pig,
    pigeon: pigeon,
    rabbit: rabbit,
    sloth: sloth,
    tiger: tiger,
    toucan: toucan,
    whale: whale,
};

function getAnimalByName(name: string) {
    return animalMap[name];
}

function getRandomAnimal() {
    const animalKeys = Object.keys(animalMap);
    return animalKeys[Math.floor(Math.random() * animalKeys.length)];
}

export {
    getAnimalByName,
    getRandomAnimal,
};
