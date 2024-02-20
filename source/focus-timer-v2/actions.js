import * as element from './elements.js';
import state from './state.js';
import * as timer from './timer.js';
import * as sounds from './sounds.js';

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');
    sounds.buttonAudio.play();
    timer.countdown();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
}
export function SetIncrement() {
    timer.incrementMinute();
}

export function SetDecrement() {
    timer.decrementMinute();
}
