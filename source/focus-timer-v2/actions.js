import state from './state.js';
import * as timer from './timer.js';

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown();
}

export function toggleReset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
}
export function SetVolumeUp() {
    console.log('volume up function');
}

export function SetVolumeDown() {
    console.log('volume down function');
}
