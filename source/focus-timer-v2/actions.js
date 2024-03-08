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
    treeIcon.classList.toggle('cor2');

    if (isActive == false) {
        sounds.florest.pause();
        return;
    } else {
        sounds.florest.play();
        sounds.rain.pause();
        sounds.storefront.pause();
        sounds.flame.pause();
    }
}
export function rain() {
    rainIcon.classList.toggle('cor2');

    if (isActive == false) {
        sounds.rain.pause();
        return;
    } else {
        sounds.florest.pause();
        sounds.rain.play();
        sounds.storefront.pause();
        sounds.flame.pause();
    }
}
export function storefront() {
    storeFrontIcon.classList.toggle('cor2');

    if (isActive == false) {
        sounds.storefront.pause();
        return;
    } else {
        sounds.florest.pause();
        sounds.rain.pause();
        sounds.storefront.play();
        sounds.flame.pause();
    }
}
export function flame() {
    flameIcon.classList.toggle('cor2');

    if (isActive == false) {
        sounds.flame.pause();
        return;
    } else {
        sounds.florest.pause();
        sounds.rain.pause();
        sounds.storefront.pause();
        sounds.flame.play();
    }
}
