import state from './state.js';
import * as timer from './timer.js';
import * as sounds from './sounds.js';
import { minutes } from './elements.js';
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

export function tree() {}
export function rain() {}
export function storefront() {}
export function flame() {}
