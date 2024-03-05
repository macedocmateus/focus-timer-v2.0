import state from './state.js';
import * as timer from './timer.js';
import * as sounds from './sounds.js';
import { cards, treeIcon, rainIcon } from './elements.js';
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
    console.log('tree esta funcionando');

    treeIcon.classList.toggle('cor2');
}
export function rain() {
    console.log('rain esta funcionando');
    rainIcon.classList.toggle('cor2');
}
export function storefront() {
    console.log('store esta funcionando');
}
export function flame() {
    console.log('flame esta funcionando');
}
