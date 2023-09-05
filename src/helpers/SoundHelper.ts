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
    return execute('background.mp3', true, 0.3);
}

function selectOptionSound(isCorrect: boolean) {
    const sound = isCorrect ? 'correct.mp3' : 'incorrect.mp3';

    execute(sound, false, 0.5);
}

function finishedSessionSound(passed: boolean) {
    const sound = passed ? 'congratulations.mp3' : 'failed.mp3';
    execute(sound);
}

export {
    backgroundSound, execute, finishedSessionSound, selectOptionSound
};

