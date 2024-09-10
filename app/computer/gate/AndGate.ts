import Connector from "./../Connector";
import Transistor from "./Transistor";
import transistor from "./Transistor";
import Gate from "./../Gate";

class AndGate extends Gate{

    private transistors: Transistor[] = [new Transistor(), new Transistor()]

    public constructor() {
        super();
        this._inputs.push(this.transistors[0].base, this.transistors[1].base)
        this.transistors[1].collector.connectUpstream(this.transistors[0].emitter)
        this._outputs.push(this.transistors[1].emitter)
    }

    public connectUpstream(connector: Connector) {
        this.transistors[0].collector.connectUpstream(connector)
    }
}

export default AndGate;
