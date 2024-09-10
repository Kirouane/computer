import Gate from "../Gate";
import XorGate from "../gate/XorGate";
import AndGate from "../gate/AndGate";
import Connector from "../Connector";

class HalfAdderCircuit extends Gate {
    private _xorGate: XorGate;
    private _andGate: AndGate;

    public constructor() {
        super();
        this._xorGate = new XorGate();
        this._andGate = new AndGate();

        const input1 = new Connector();
        this._xorGate.inputs[0].connectUpstream(input1)
        this._andGate.inputs[0].connectUpstream(input1)

        const input2 = new Connector();
        this._xorGate.inputs[1].connectUpstream(input2)
        this._andGate.inputs[1].connectUpstream(input2)

        this.inputs.push(input1, input2)

        this.outputs.push(this._xorGate.outputs[0], this._andGate.outputs[0])
    }

    public connectUpstream(connector: Connector) {
        this._xorGate.connectUpstream(connector)
        this._andGate.connectUpstream(connector)
    }

}


export default HalfAdderCircuit
