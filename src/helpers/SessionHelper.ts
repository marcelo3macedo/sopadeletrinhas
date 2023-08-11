import { typesByDifficulty } from '@config/TypeByDifficulty';
import { DifficultyProps } from '@interfaces/sessions/DifficultyProps';
import { getType, getTypeOptions } from './SessionTypeHelper';

function generateNewSession(difficulty:string) {
    const prop = difficulty.toUpperCase() as keyof typeof DifficultyProps;
    const numberOfItems = DifficultyProps[prop];
    return createSession(numberOfItems, difficulty);
}

function isCorrectAnswer(session:any, index:number, option:string) {
    if (!session || session.length < index) {return false;}

    const activeSession = session[index];
    const { slug } = activeSession.details;

    if (slug !== option) {return false;}

    return true;
}

function createSession(value: number, difficulty:string) {
    const array = [] as any;
    const configs = getConfig(difficulty);

    Array.from({ length: value }).forEach(async (_) => {
        const type = getType(configs?.options);
        const details = getTypeOptions(type, configs, array);

        array.push({
            type,
            details,
        });
    });

    return array;
}

function getConfig(difficulty:string) {
    return typesByDifficulty.find(t => t.difficulty === difficulty);
}

function isSuccessedSession(total: number, correct: number) {
    return (correct / total) > 0.7;
}

export {
    generateNewSession,
    isCorrectAnswer,
    isSuccessedSession
};

