function getRandomValue(value: number) {
    return Math.floor(Math.random() * value) + 1;
}

function getRandomFromArray(operators:any) {
    if (!operators) {return;}

    const value = getRandomValue(operators.length);
    const index = value > 0 ? value - 1 : value;
    return operators[index];
}

export {
    getRandomValue,
    getRandomFromArray,
};
