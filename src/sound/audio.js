import Buffer from './assets/Buffer';
import Sound from './assets/Sound';
import sounds from '../config/sounds';

export class AudioPlayer {
    constructor(soundMap) {

        // Props
        this._name = 'vue-audio'
        this._ctx = null;
        this.__tracklist = {};

        this.initAudioContext()
        this._buffer = new Buffer(this._ctx, soundMap);
        this.loaded = this._buffer.loaded;
    }



    play (tag, options = {}) {
        new Sound(this._ctx, this._buffer.getSoundByKey(tag), options).play();
    }

    initAudioContext () {
        try {
            this._ctx = new (window.AudioContext || window.webkitAudioContext)();;
        } catch (e) {
            console.error(`${this._name}: Failed to initialize audio context`, e);
        }
    }
}

export default {
    instance: new AudioPlayer(sounds),
    install (app) {
        app.provide('audio', this.instance);
    }
};
