import Transistor from "./Transistor";
import Connector from "./Connector";

class NotGate {

    private transistors: Transistor[] = [new Transistor(true)]

    private _inputs: Connector[] = []
    private _outputs: Connector[] = []

    public constructor() {
        this._inputs.push(this.transistors[0].base)
        this._outputs.push(this.transistors[0].emitter)
    }

    public connectUpstream(connector: Connector) {
        this.transistors[0].collector.connectUpstream(connector)
    }

    public connectInputs(connectors: Connector[]) {
        this._inputs.forEach((input, i) => {
            input.connectUpstream(connectors[i])
        })
    }

    connectOutputs(connectors: Connector[]) {
        this._outputs.forEach((output, i) => {
            connectors[i].connectUpstream(output)
        })
    }

    public get inputs(): Connector[] {
        return this._inputs
    }

    public get outputs(): Connector[] {
        return this._outputs
    }
}

export default NotGate;
