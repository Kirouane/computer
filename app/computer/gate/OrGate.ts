import Connector from "./../Connector";
import Transistor from "./Transistor";
import transistor from "./Transistor";
import Gate from "./../Gate";

class OrGate extends Gate {

    private transistors: Transistor[] = [new Transistor(), new Transistor()]

    public constructor() {
        super();
        this._inputs.push(this.transistors[0].base, this.transistors[1].base)
        const output = new Connector();
        output.connectUpstream(this.transistors[0].emitter)
        output.connectUpstream(this.transistors[1].emitter)
        this._outputs.push(output)
    }

    public connectUpstream(connector: Connector) {
        this.transistors[0].collector.connectUpstream(connector)
        this.transistors[1].collector.connectUpstream(connector)
    }
}

export default OrGate;
