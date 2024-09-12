import Gate from "../Gate";
import NotGate from "../gate/NotGate";
import AndGate from "../gate/AndGate";
import OrGate from "../gate/OrGate";
import Connector from "../Connector";
import AndGate3 from "../gate/And3Gate";

class Multiplexer4x1Circuit extends Gate {
    private _notGate1: NotGate;
    private _notGate2: NotGate;

    private _andGate1: AndGate3;
    private _andGate2: AndGate3;
    private _andGate3: AndGate3;
    private _andGate4: AndGate3

    private _orGate1: OrGate;
    private _orGate2: OrGate;
    private _orGate3: OrGate;



    public constructor() {
        super();
        this._notGate1 = new NotGate();
        this._notGate2 = new NotGate();
        this._andGate1 = new AndGate3();
        this._andGate2 = new AndGate3();
        this._andGate3 = new AndGate3();
        this._andGate4 = new AndGate3();
        this._orGate1 = new OrGate();
        this._orGate2 = new OrGate();
        this._orGate3 = new OrGate();

        this._inputs = [
            this._andGate1.inputs[2],
            this._andGate2.inputs[2],
            this._andGate3.inputs[2],
            this._andGate4.inputs[2],
        ];

        //selection lines
        const s1 = new Connector();
        this._andGate1.inputs[0].connectUpstream(s1)
        this._andGate2.inputs[0].connectUpstream(s1)
        this._notGate1.inputs[0].connectUpstream(s1)
        this._inputs.push(s1)

        const s2 = new Connector();
        this._andGate1.inputs[1].connectUpstream(s2)
        this._notGate2.inputs[0].connectUpstream(s2)
        this._andGate3.inputs[1].connectUpstream(s2)
        this._inputs.push(s2)

        const c1 = new Connector();
        this._andGate2.inputs[1].connectUpstream(c1)
        this._andGate4.inputs[1].connectUpstream(c1)
        c1.connectUpstream(this._notGate2.outputs[0])

        const c2 = new Connector();
        this._andGate3.inputs[0].connectUpstream(c2)
        this._andGate4.inputs[0].connectUpstream(c2)
        c2.connectUpstream(this._notGate1.outputs[0])

        this._orGate1.inputs[0].connectUpstream(this._andGate1.outputs[0])
        this._orGate1.inputs[1].connectUpstream(this._andGate2.outputs[0])
        this._orGate2.inputs[0].connectUpstream(this._andGate3.outputs[0])
        this._orGate2.inputs[1].connectUpstream(this._andGate4.outputs[0])
        this._orGate3.inputs[0].connectUpstream(this._orGate1.outputs[0])
        this._orGate3.inputs[1].connectUpstream(this._orGate2.outputs[0])

        this._outputs.push(this._orGate3.outputs[0])
    }

    public connectUpstream(connector: Connector) {
        this._notGate1.connectUpstream(connector)
        this._notGate2.connectUpstream(connector)
        this._andGate1.connectUpstream(connector)
        this._andGate2.connectUpstream(connector)
        this._andGate3.connectUpstream(connector)
        this._andGate4.connectUpstream(connector)
        this._orGate1.connectUpstream(connector)
        this._orGate2.connectUpstream(connector)
        this._orGate3.connectUpstream(connector)
    }

    public get A0(): Connector {
        return this._inputs[3];
    }

    public get A1(): Connector {
        return this._inputs[2];
    }

    public get A2(): Connector {
        return this._inputs[1];
    }

    public get A3(): Connector {
        return this._inputs[0];
    }

    public get S1(): Connector {
        return this._inputs[4];
    }


    public get S0(): Connector {
        return this._inputs[5];
    }

}


export default Multiplexer4x1Circuit
