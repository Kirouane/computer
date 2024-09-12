import Connector from "./../Connector";
import Transistor from "./Transistor";
import transistor from "./Transistor";
import Gate from "./../Gate";
import AndGate from "./AndGate";
import OrGate from "./OrGate";

class AndGate3 extends Gate {
    private _andGate1: AndGate;
    private _andGate2: AndGate;

    public constructor() {
        super();
        this._andGate1 = new AndGate();
        this._andGate2 = new AndGate();

        this._inputs = [this._andGate1.inputs[0], this._andGate1.inputs[1], this._andGate2.inputs[1]];
        this._andGate2.inputs[0].connectUpstream(this._andGate1.outputs[0])
        this._outputs.push(this._andGate2.outputs[0])
    }

    public connectUpstream(connector: Connector) {
        this._andGate1.connectUpstream(connector)
        this._andGate2.connectUpstream(connector)
    }
}

export default AndGate3;
