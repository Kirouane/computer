import Connector from "./../Connector";
import AndGate from "./AndGate";
import NotGate from "./NotGate";
import Gate from "./../Gate";

class NandGate extends Gate {
    private _andGate: AndGate;
    private _notGate: NotGate;

    public constructor() {
        super();
        this._andGate = new AndGate();
        this._notGate = new NotGate();

        this._inputs = this._andGate.inputs
        this._notGate.connectInputs(this._andGate.outputs)
        this._outputs = this._notGate.outputs
    }

    public connectUpstream(connector: Connector) {
        this._andGate.connectUpstream(connector)
        this._notGate.connectUpstream(connector)
    }
}

export default NandGate;
