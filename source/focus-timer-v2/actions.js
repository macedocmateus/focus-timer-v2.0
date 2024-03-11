import state from './state.js';
import * as timer from './timer.js';
import * as sounds from './sounds.js';
import { treeIcon, rainIcon, storeFrontIcon, flameIcon } from './elements.js';
export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown();
    sounds.buttonPressAudio.play();
}

export function stop() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
}
export function setIncrement() {
    timer.incrementMinutes();
}

export function setDecrement() {
    timer.decrementMinutes();
}

export function florest() {
    state.isMute = document.documentElement.classList.toggle('music-on');

    if (state.isMute) {
        sounds.florest.play();
        sounds.rain.pause();
        sounds.storefront.pause();
        sounds.flame.pause();

        treeIcon.classList.add('card-actived');
        rainIcon.classList.remove('card-actived');
        storeFrontIcon.classList.remove('card-actived');
        flameIcon.classList.remove('card-actived');

        return;
    } else {
        treeIcon.classList.remove('card-actived');
        sounds.florest.pause();
    }
}
export function rain() {
    state.isMute = document.documentElement.classList.toggle('music-on');

    if (state.isMute) {
        sounds.florest.pause();
        sounds.rain.play();
        sounds.storefront.pause();
        sounds.flame.pause();

        treeIcon.classList.remove('card-actived');
        rainIcon.classList.add('card-actived');
        storeFrontIcon.classList.remove('card-actived');
        flameIcon.classList.remove('card-actived');

        return;
    } else {
        rainIcon.classList.remove('card-actived');
        sounds.rain.pause();
    }
}
export function storefront() {
    state.isMute = document.documentElement.classList.toggle('music-on');

    if (state.isMute) {
        sounds.florest.pause();
        sounds.rain.pause();
        sounds.storefront.play();
        sounds.flame.pause();

        treeIcon.classList.remove('card-actived');
        rainIcon.classList.remove('card-actived');
        storeFrontIcon.classList.add('card-actived');
        flameIcon.classList.remove('card-actived');

        return;
    } else {
        storeFrontIcon.classList.remove('card-actived');
        sounds.storefront.pause();
    }
}
export function flame() {
    state.isMute = document.documentElement.classList.toggle('music-on');

    if (state.isMute) {
        sounds.florest.pause();
        sounds.rain.pause();
        sounds.storefront.pause();
        sounds.flame.play();

        treeIcon.classList.remove('card-actived');
        rainIcon.classList.remove('card-actived');
        storeFrontIcon.classList.remove('card-actived');
        flameIcon.classList.add('card-actived');

        return;
    } else {
        flameIcon.classList.remove('card-actived');
        sounds.flame.pause();
    }
}
