import Sound from 'react-native-sound';

function execute(path: any, isLoop:boolean = false, volume: any = null) {
    const sound = new Sound(path, Sound.MAIN_BUNDLE, (_error) => {
        if (isLoop) {
            sound.setNumberOfLoops(-1);
        }

        if (volume) {
            sound.setVolume(volume);
        }

        sound.play();
    });

    return sound;
}

function backgroundSound() {
    return execute('background.mp3', true, 0.4);
}

function selectOptionSound(isCorrect: boolean, option: string = '') {
    const sound = isCorrect ? `${option}.mp3` : 'incorrect.mp3';

    if (isCorrect) {
        execute('correct.mp3');

        setTimeout(() => {
            execute(sound);
        }, 1000);

        return;
    }

    execute(sound);
}

function finishedSessionSound(passed: boolean) {
    const sound = passed ? 'congratulations.mp3' : 'failed.mp3';
    execute(sound);
}

export {
    backgroundSound, execute, finishedSessionSound, selectOptionSound
};

