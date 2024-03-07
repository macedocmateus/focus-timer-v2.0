import state from './state.js';
import * as timer from './timer.js';
import * as sounds from './sounds.js';
import {
    cards,
    treeIcon,
    rainIcon,
    storeFrontIcon,
    flameIcon,
} from './elements.js';
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

export function tree() {
    if (state.isMute == false) {
        sounds.florest.pause();
        return;
    }

    sounds.florest.play();
    sounds.rain.pause();
    sounds.storefront.pause();
    sounds.flame.pause();
}
export function rain() {
    if (state.isMute == false) {
        sounds.rain.pause();
        return;
    }

    sounds.rain.play();
    sounds.florest.pause();
    sounds.storefront.pause();
    sounds.flame.pause();
}
export function storefront() {
    if (state.isMute == false) {
        return;
    }
}
export function flame() {
    if (state.isMute == false) {
        return;
    }
}
