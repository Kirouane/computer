import Connector from "./Connector";
import Gate from "./Gate";
import NotGate from "./NotGate";
import OrGate from "./OrGate";

class NorGate extends Gate {
    private _orGate: OrGate;
    private _notGate: NotGate;

    public constructor() {
        super();
        this._orGate = new OrGate();
        this._notGate = new NotGate();

        this._inputs = this._orGate.inputs
        this._notGate.connectInputs(this._orGate.outputs)
        this._outputs = this._notGate.outputs
    }

    public connectUpstream(connector: Connector) {
        this._orGate.connectUpstream(connector)
        this._notGate.connectUpstream(connector)
    }
}

export default NorGate;
