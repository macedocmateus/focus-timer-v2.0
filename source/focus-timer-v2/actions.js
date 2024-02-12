import * as element from './elements.js';
import state from './state.js';
import * as timer from './timer.js';
import * as sounds from './sounds.js';

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown();

    sounds.buttonAudio.play();
}

export function toggleReset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
}
export function SetIncrement() {}

export function SetDecrement() {}
