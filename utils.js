// EXPORT MODULES
export class Person {
    constructor(name, powerLevel) {
        this.name = name;
        this.powerLevel = powerLevel;
    }

    getIntroduction() {
        return `I am ${this.name}, and my power level is ${this.name === 'Goku' ? 'over' : '' } ${this.powerLevel}`;
    }
}

// EVENT EMITTER
import { EventEmitter } from 'events';

export class NoiseDetector extends EventEmitter {

    makeNoise(noiseMaker) {
        this.emit('noise', {
            name: noiseMaker
        });
    }
}

import * as uuid from 'uuid';

export class Logger extends EventEmitter {
    log(msg) {
        this.emit('logged', {
            id: uuid.v4(), msg
        });
    }
}