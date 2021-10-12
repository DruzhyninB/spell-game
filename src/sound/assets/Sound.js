export default class Sound {

    constructor(context, buffer, options) {
        this.context = context;
        this.buffer = buffer;
        this.options = options;
    }

    setup () {
        const {loop, volume} = this.options;
        this.gainNode = this.context.createGain();
        this.source = this.context.createBufferSource();
        this.source.buffer = this.buffer;
        this.source.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
        this.source.loop = loop;
        if (isFinite(volume)){
            this.gainNode.gain.value = volume;
        }
    }

    play () {
        this.setup();
        this.source.start(this.context.currentTime);
        return this;
    }

    stop () {
        this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.5);
        this.source.stop(this.context.currentTime + 0.5);
        return this;
    }

}