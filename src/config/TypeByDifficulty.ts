import { DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_MEDIUM } from '@constants/difficulties';
import { SESSIONTYPE_CORRECTANSWER, SESSIONTYPE_DRAGNDROP, SESSIONTYPE_PAINT } from '@constants/sessionTypes';

const typesByDifficulty = [
    {
        difficulty: DIFFICULTY_EASY,
        options: [
            { type: SESSIONTYPE_CORRECTANSWER, possibility: 0.4 },
            { type: SESSIONTYPE_DRAGNDROP, possibility: 0.2 },
            { type: SESSIONTYPE_PAINT, possibility: 0.2 },
        ],
        elements: [
            {
                word: 'Bala',
                slug: 'bala',
                syllables: [ 'BA', 'LA'],
            },
            {
                word: 'Bola',
                slug: 'bola',
                syllables: [ 'BO', 'LA'],
            },
            {
                word: 'Boné',
                slug: 'bone',
                syllables: [ 'BO', 'NÉ'],
            },
            {
                word: 'Flor',
                slug: 'flor',
                syllables: [ 'FLOR'],
            },
            {
                word: 'Gato',
                slug: 'gato',
                syllables: [ 'GA', 'TO'],
            },
            {
                word: 'Lápis',
                slug: 'lapis',
                syllables: [ 'LÁ', 'PIS'],
            },
            {
                word: 'Leão',
                slug: 'leao',
                syllables: [ 'LE', 'ÃO'],
            },
            {
                word: 'Pato',
                slug: 'pato',
                syllables: [ 'PA', 'TO'],
            },
            {
                word: 'Porco',
                slug: 'porco',
                syllables: [ 'POR', 'CO'],
            },
            {
                word: 'Rato',
                slug: 'rato',
                syllables: [ 'RA', 'TO'],
            },
            {
                word: 'Urso',
                slug: 'urso',
                syllables: [ 'UR', 'SO'],
            },
            {
                word: 'Vaca',
                slug: 'vaca',
                syllables: [ 'VA', 'CA'],
            },
        ],
        possibleOptions: [ 'BA', 'BE', 'BI', 'BO', 'BU', 'CA', 'CE', 'CI', 'CO', 'DA', 'DE', 'DI', 'DO', 'DU', 'FA', 'FE', 'FI', 'FO', 'FU', 'TA', 'TE', 'TI', 'TO', 'TU', 'RA', 'RE', 'RI', 'RO', 'RU', 'SA', 'SE', 'SI', 'SO', 'SU'],
    },
    {
        difficulty: DIFFICULTY_MEDIUM,
        options: [
            { type: SESSIONTYPE_CORRECTANSWER, possibility: 0.3 },
            { type: SESSIONTYPE_DRAGNDROP, possibility: 0.3 },
            { type: SESSIONTYPE_PAINT, possibility: 0.3 },
        ],
        elements: [
            {
                word: 'Cachorro',
                slug: 'cachorro',
                syllables: [ 'CA', 'CHO', 'RRO'],
            },
            {
                word: 'Cobra',
                slug: 'cobra',
                syllables: [ 'CO', 'BRA'],
            },
            {
                word: 'Caneta',
                slug: 'caneta',
                syllables: [ 'CA', 'NE', 'TA'],
            },
            {
                word: 'Chave',
                slug: 'chave',
                syllables: [ 'CHA', 'VE'],
            },
            {
                word: 'Chinelo',
                slug: 'chinelo',
                syllables: [ 'CHI', 'NE', 'LO'],
            },
            {
                word: 'Escova',
                slug: 'escova',
                syllables: [ 'ES', 'CO', 'VA'],
            },
            {
                word: 'Foguete',
                slug: 'foguete',
                syllables: [ 'FO', 'GUE', 'TE'],
            },
            {
                word: 'Folha',
                slug: 'folha',
                syllables: [ 'FO', 'LHA'],
            },
            {
                word: 'Porco',
                slug: 'porco',
                syllables: [ 'POR', 'CO'],
            },
            {
                word: 'Girafa',
                slug: 'girafa',
                syllables: [ 'GI', 'RA', 'FA'],
            },
            {
                word: 'Livros',
                slug: 'livros',
                syllables: [ 'LI', 'VROS'],
            },
            {
                word: 'Martelo',
                slug: 'martelo',
                syllables: [ 'MAR', 'TE', 'LO'],
            },
            {
                word: 'Milho',
                slug: 'milho',
                syllables: [ 'MI', 'LHO'],
            },
            {
                word: 'Mochila',
                slug: 'mochila',
                syllables: [ 'MO', 'CHI', 'LA'],
            },
            {
                word: 'Pássaro',
                slug: 'passaro',
                syllables: [ 'PÁ', 'SSA', 'RO'],
            },
            {
                word: 'Peixe',
                slug: 'peixe',
                syllables: [ 'PEI', 'XE'],
            },
            {
                word: 'Tucano',
                slug: 'tucano',
                syllables: [ 'TU', 'CA', 'NO'],
            },
        ],
        possibleOptions: [ 'BA', 'BE', 'BI', 'BO', 'BU', 'CA', 'CE', 'CI', 'CO', 'DA', 'DE', 'DI', 'DO', 'DU', 'FA', 'FE', 'FI', 'FO', 'FU', 'TA', 'TE', 'TI', 'TO', 'TU', 'RA', 'RE', 'RI', 'RO', 'RU', 'SA', 'SE', 'SI', 'SO', 'SU'],
    },
    {
        difficulty: DIFFICULTY_HARD,
        options: [
            { type: SESSIONTYPE_CORRECTANSWER, possibility: 0.4 },
            { type: SESSIONTYPE_DRAGNDROP, possibility: 0.2 },
            { type: SESSIONTYPE_PAINT, possibility: 0.4 },
        ],
        elements: [
            {
                word: 'Abelha',
                slug: 'abelha',
                syllables: [ 'A', 'BE', 'LHA'],
            },
            {
                word: 'Baleia',
                slug: 'baleia',
                syllables: [ 'BA', 'LEI', 'A'],
            },
            {
                word: 'Borboleta',
                slug: 'borboleta',
                syllables: [ 'BOR', 'BO', 'LE', 'TA'],
            },
            {
                word: 'Cachorro',
                slug: 'cachorro',
                syllables: [ 'CA', 'CHOR', 'RO'],
            },
            {
                word: 'Cadeira',
                slug: 'cadeira',
                syllables: [ 'CA', 'DEI', 'RA'],
            },
            {
                word: 'Coelho',
                slug: 'coelho',
                syllables: [ 'CO', 'E', 'LHO'],
            },
            {
                word: 'Elefante',
                slug: 'elefante',
                syllables: [ 'E', 'LE', 'FAN', 'TE'],
            },
            {
                word: 'Fogueira',
                slug: 'fogueira',
                syllables: [ 'FO', 'GUEI', 'RA'],
            },
            {
                word: 'Girafa',
                slug: 'girafa',
                syllables: [ 'GI', 'RA', 'FA'],
            },
            {
                word: 'Pássaro',
                slug: 'passaro',
                syllables: [ 'PÁS', 'SA', 'RO'],
            },
            {
                word: 'Pipoca',
                slug: 'pipoca',
                syllables: [ 'PI', 'PO', 'CA' ],
            },
            {
                word: 'Planeta',
                slug: 'planeta',
                syllables: [ 'PLA', 'NE', 'TA' ],
            },
            {
                word: 'Tartaruga',
                slug: 'tartaruga',
                syllables: [ 'TAR', 'TA', 'RU', 'GA' ],
            },
            {
                word: 'Televisão',
                slug: 'televisao',
                syllables: [ 'TE', 'LE', 'VI', 'SÃO' ],
            },
            {
                word: 'Tesoura',
                slug: 'tesoura',
                syllables: [ 'TE', 'SOU', 'RA' ],
            },
            {
                word: 'Relógio',
                slug: 'relogio',
                syllables: [ 'RE', 'LÓ', 'GIO' ],
            },
            {
                word: 'Martelo',
                slug: 'martelo',
                syllables: [ 'MAR', 'TE', 'LO' ],
            },
            {
                word: 'Tucano',
                slug: 'tucano',
                syllables: [ 'TU', 'CA', 'NO' ],
            },
            {
                word: 'Violão',
                slug: 'violao',
                syllables: [ 'VI', 'O', 'LÃO' ],
            },
            {
                word: 'Melância',
                slug: 'melancia',
                syllables: [ 'ME', 'LÂN', 'CI', 'A'],
            },
            {
                word: 'Pizza',
                slug: 'pizza',
                syllables: [ 'PIZ', 'ZA'],
            },
        ],
        possibleOptions: [ 'BA', 'BE', 'BI', 'BO', 'BU', 'CA', 'CE', 'CI', 'CO', 'DA', 'DE', 'DI', 'DO', 'DU', 'FA', 'FE', 'FI', 'FO', 'FU', 'TA', 'TE', 'TI', 'TO', 'TU', 'RA', 'RE', 'RI', 'RO', 'RU', 'SA', 'SE', 'SI', 'SO', 'SU'],
    },
];

export { typesByDifficulty };
