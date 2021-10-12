export default class Buffer {

    constructor(context, map) {
        this.context = context;
        this.urls = map;
        this.buffer = {};
        this.loaded = new Promise((resolve, reject) => {
            this.resolve = resolve;
        })
        this.loadAll();
    }

    loadSound (url, key) {
        let request = new XMLHttpRequest();
        request.open('get', url, true);
        request.responseType = 'arraybuffer';

        request.onload = () => {
            this.context.decodeAudioData(request.response, buffer => {
                this.buffer[key] = buffer;
                if (Object.keys(this.buffer).length == Object.keys(this.urls).length) {
                    this.resolve();
                }
            });
        };
        request.send();
    };

    loadAll () {
        for (const key in this.urls) {
            this.loadSound(this.urls[key], key);
        }
    }

    getSoundByKey (key) {
        return this.buffer[key];
    }

}