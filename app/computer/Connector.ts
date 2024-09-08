class Connector {
    private _state: boolean;

    private _downstreamConnectors: Connector[] = [];
    private _upstreamConnectors: Connector[] = [];

    private listeners: ((state: boolean) => void)[] = [];

    public constructor(private _name?: string) {
        this._state = false;
    }

    public get name(): string | undefined {
        return this._name;
    }

    public addDownstream(connector: Connector) {
        this._downstreamConnectors.push(connector);
    }

    public connectUpstream(connector: Connector) {
        this._upstreamConnectors.push(connector);
        connector.addDownstream(this)
        this.computeState()

    }

    public turnOn() {
        this.state = true;
    }

    public turnOff() {
        this.state = false;
    }

    public computeState() {
        this.state = this._upstreamConnectors.filter(connector => connector.state).length > 0
    }

    public set state(state: boolean) {
        const hasChanged = state !== this._state;
        this._state = state;
        if (hasChanged) {
            this.listeners.forEach(listener => listener(state));
            this._downstreamConnectors.forEach(connector => connector.computeState())
        }
    }

    public get state(): boolean {
        return this._state;
    }


    public addListener(listener: (state: boolean) => void) {
        this.listeners.push(listener);
    }

}

export default Connector;
