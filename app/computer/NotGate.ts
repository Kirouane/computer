import Transistor from "./Transistor";
import Connector from "./Connector";
import Gate from "./Gate";

class NotGate extends Gate {

    private transistors: Transistor[] = [new Transistor(true)]

    public constructor() {
        super();
        this._inputs.push(this.transistors[0].base)
        this._outputs.push(this.transistors[0].emitter)
    }

    public connectUpstream(connector: Connector) {
        this.transistors[0].collector.connectUpstream(connector)
    }
}

export default NotGate;
