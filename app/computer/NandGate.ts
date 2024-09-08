import Connector from "./Connector";
import Transistor from "./Transistor";
import transistor from "./Transistor";
import AndGate from "./AndGate";
import NotGate from "./NotGate";

class NandGate {


    private _inputs: Connector[] = []
    private _outputs: Connector[] = []
    private _andGate: AndGate;
    private _notGate: NotGate;

    public constructor() {
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
}

export default NandGate;
