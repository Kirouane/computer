import Gate from "../Gate";
import XorGate from "../gate/XorGate";
import AndGate from "../gate/AndGate";
import Connector from "../Connector";
import HalfAdderCircuit from "./HalfAdderCircuit";
import OrGate from "../gate/OrGate";

class FullAdderCircuit extends Gate {
    private _halfAdderCircuitA: HalfAdderCircuit;
    private _halfAdderCircuitB: HalfAdderCircuit;
    private _orGate: OrGate;

    public constructor() {
        super();
        this._halfAdderCircuitA = new HalfAdderCircuit();
        this._halfAdderCircuitB = new HalfAdderCircuit();
        this._orGate = new OrGate();

        this._inputs = [
            ...this._halfAdderCircuitA.inputs,
            this._halfAdderCircuitB.inputs[1],
        ]

        this._halfAdderCircuitB.inputs[0].connectUpstream(this._halfAdderCircuitA.outputs[0])
        this._orGate.inputs[1].connectUpstream(this._halfAdderCircuitA.outputs[1])

        this._orGate.inputs[0].connectUpstream(this._halfAdderCircuitB.outputs[1])

        this._outputs = [
            this._halfAdderCircuitB.outputs[0],
            this._orGate.outputs[0],
        ]
    }

    public connectUpstream(connector: Connector) {
        this._halfAdderCircuitA.connectUpstream(connector)
        this._halfAdderCircuitB.connectUpstream(connector)
        this._orGate.connectUpstream(connector)
    }

}


export default FullAdderCircuit
