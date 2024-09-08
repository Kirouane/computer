import Connector from "./Connector";

class Transistor {
    private readonly _collector: Connector;
    private readonly _base: Connector;
    private readonly _emitter: Connector;
    private _collectorListener: (state: boolean) => void = () => {
        this.emmit();
    };

    private _baseListener: (state: boolean) => void = () => {
        this.emmit();
    }

    public constructor(private _inverted: boolean = false) {
        this._collector = new Connector('collector');
        this._collector.addListener(this._collectorListener);
        this._base = new Connector('base');
        this._base.addListener(this._baseListener);
        this._emitter = new Connector('emitter');
    }

    public emmit(): void {
        const state = this._collector.state && this._base.state;
        if (this._inverted ? !state : state) {
            this.emitter.turnOn()
        } else {
            this.emitter.turnOff()
        }
    }

    public get collector(): Connector {
        return this._collector;
    }


    public get base(): Connector {
        return this._base;
    }

    public get emitter(): Connector {
        return this._emitter;
    }
}

export default Transistor;
