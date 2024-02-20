import state from './state.js';
import * as element from './elements.js';
import { reset } from './actions.js';
export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    element.minutes.textContent = String(minutes).padStart(2, '0');
    element.seconds.textContent = String(seconds).padStart(2, '0');
}

export function countdown() {
    if (!state.isRunning) {
        return;
    }

    let minutes = Number(element.minutes.textContent);
    let seconds = Number(element.seconds.textContent);

    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if (minutes < 0) {
        reset();
        return;
    }

    updateDisplay(minutes, seconds);

    setTimeout(() => countdown(), 1000);
}

export function incrementMinute() {
    let minutes = Number(element.minutes.textContent);

    minutes += 5;

    updateDisplay(minutes);
}

export function decrementMinute() {
    let minutes = Number(element.minutes.textContent);

    if (minutes <= 0) {
        return (minutes = 0);
    }

    minutes -= 5;

    updateDisplay(minutes);
}
