import state from './state.js';
export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');
}

export function stop() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
}
export function setIncrement() {}

export function setDecrement() {}
export function tree() {}
export function rain() {}
export function storefront() {}
export function flame() {}
