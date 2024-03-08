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

export function tree() {
    if (state.isMute == false) {
        state.isMute = document.documentElement.classList.remove('music-on');
        treeIcon.classList.remove('cor2');
        sounds.florest.pause();
        return;
    } else {
        state.isMute = document.documentElement.classList.add('music-on');
        treeIcon.classList.add('cor2');

        sounds.florest.play();
        sounds.rain.pause();
        sounds.storefront.pause();
        sounds.flame.pause();

        rainIcon.classList.remove('cor2');
    }
}
export function rain() {
    if (state.isMute == false) {
        state.isMute = document.documentElement.classList.remove('music-on');
        rainIcon.classList.remove('cor2');
        sounds.rain.pause();
        return;
    } else {
        state.isMute = document.documentElement.classList.add('music-on');
        rainIcon.classList.add('cor2');

        sounds.florest.pause();
        sounds.rain.play();
        sounds.storefront.pause();
        sounds.flame.pause();

        treeIcon.classList.remove('cor2');
    }
}
// export function storefront() {
//     if (state.isMute == false) {
//         storeFrontIcon.classList.remove('cor2');
//         sounds.storefront.pause();
//         return;
//     } else {
//         storeFrontIcon.classList.add('cor2');
//         sounds.florest.pause();
//         sounds.rain.pause();
//         sounds.storefront.play();
//         sounds.flame.pause();
//     }
// }
// export function flame() {
//     if (state.isMute == false) {
//         flameIcon.classList.remove('cor2');
//         sounds.flame.pause();
//         return;
//     } else {
//         flameIcon.classList.add('cor2');
//         sounds.florest.pause();
//         sounds.rain.pause();
//         sounds.storefront.pause();
//         sounds.flame.play();
//     }
// }
