import { controls, cards } from './elements.js';
import * as actions from './actions.js';

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (typeof actions[action] != 'function') {
            return;
        }

        actions[action]();
    });
}

export function registerSoundCard() {
    cards.addEventListener('click', (event) => {
        const sound = event.target.dataset.sound;
        if (typeof actions[sound] != 'function') {
            return;
        }

        actions[sound]();
    });
}
