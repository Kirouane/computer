import Gate from "../Gate";
import NotGate from "../gate/NotGate";
import AndGate from "../gate/AndGate";
import OrGate from "../gate/OrGate";
import Connector from "../Connector";

class Multiplexer2x1Circuit extends Gate {
    private _notGate: NotGate;
    private _andGate1: AndGate;
    private _andGate2: AndGate;
    private _orGate: OrGate;


    public constructor() {
        super();
        this._notGate = new NotGate();
        this._andGate1 = new AndGate();
        this._andGate2 = new AndGate();
        this._orGate = new OrGate();

        this._inputs = [this._andGate1.inputs[0], this._andGate2.inputs[0]];

        const input3 = new Connector();
        this._notGate.inputs[0].connectUpstream(input3)
        this._andGate2.inputs[1].connectUpstream(input3)
        this._inputs.push(input3) // selection line

        this._andGate1.inputs[1].connectUpstream(this._notGate.outputs[0])

        this._orGate.inputs[0].connectUpstream(this._andGate1.outputs[0])
        this._orGate.inputs[1].connectUpstream(this._andGate2.outputs[0])

        this._outputs.push(this._orGate.outputs[0])
    }

    public connectUpstream(connector: Connector) {
        this._notGate.connectUpstream(connector)
        this._andGate1.connectUpstream(connector)
        this._andGate2.connectUpstream(connector)
        this._orGate.connectUpstream(connector)
    }

    public get A1(): Connector {
        return this._inputs[0];
    }

    public get A0(): Connector {
        return this._inputs[1];
    }

    public get S(): Connector {
        return this._inputs[2];
    }

}


export default Multiplexer2x1Circuit
