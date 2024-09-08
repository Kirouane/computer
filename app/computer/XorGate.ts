import Gate from "./Gate";
import OrGate from "./OrGate";
import NandGate from "./NandGate";
import AndGate from "./AndGate";
import Connector from "./Connector";

class XorGate extends Gate {
    private _orGate: OrGate;
    private _nandGate: NandGate;
    private _andGate: AndGate;

    public constructor() {
        super();
        this._orGate = new OrGate();
        this._nandGate = new NandGate();
        this._andGate = new AndGate();

        const input1 = new Connector();
        this._orGate.inputs[0].connectUpstream(input1)
        this._nandGate.inputs[0].connectUpstream(input1)

        const input2 = new Connector();
        this._orGate.inputs[1].connectUpstream(input2)
        this._nandGate.inputs[1].connectUpstream(input2)

        this.inputs.push(input1, input2)

        this._andGate.inputs[0].connectUpstream(this._orGate.outputs[0])
        this._andGate.inputs[1].connectUpstream(this._nandGate.outputs[0])

        this.outputs.push(this._andGate.outputs[0])
    }

    public connectUpstream(connector: Connector) {
        this._orGate.connectUpstream(connector)
        this._nandGate.connectUpstream(connector)
        this._andGate.connectUpstream(connector)
    }
}

export default XorGate
