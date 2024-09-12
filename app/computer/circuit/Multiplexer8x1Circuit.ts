import Gate from "../Gate";
import NotGate from "../gate/NotGate";
import AndGate from "../gate/AndGate";
import OrGate from "../gate/OrGate";
import Connector from "../Connector";
import AndGate3 from "../gate/And3Gate";
import Multiplexer4x1Circuit from "./Multiplexer4x1Circuit";
import Multiplexer2x1Circuit from "./Multiplexer2x1Circuit";

class Multiplexer8x1Circuit extends Gate {
    private _mutiplexer4x1Circuit1: Multiplexer4x1Circuit;
    private _mutiplexer4x1Circuit2: Multiplexer4x1Circuit;
    private _mutiplexer2x1Circuit: Multiplexer2x1Circuit;


    public constructor() {
        super();
        this._mutiplexer4x1Circuit1 = new Multiplexer4x1Circuit();
        this._mutiplexer4x1Circuit2 = new Multiplexer4x1Circuit();
        this._mutiplexer2x1Circuit = new Multiplexer2x1Circuit();

        this._inputs = [
            this._mutiplexer4x1Circuit2.A3,
            this._mutiplexer4x1Circuit2.A2,
            this._mutiplexer4x1Circuit2.A1,
            this._mutiplexer4x1Circuit2.A0,

            this._mutiplexer4x1Circuit1.A3,
            this._mutiplexer4x1Circuit1.A2,
            this._mutiplexer4x1Circuit1.A1,
            this._mutiplexer4x1Circuit1.A0,

        ];

        //selection lines

        this.inputs.push(this._mutiplexer2x1Circuit.S)

        const s1 = new Connector();
        this._mutiplexer4x1Circuit1.S1.connectUpstream(s1)
        this._mutiplexer4x1Circuit2.S1.connectUpstream(s1)
        this._inputs.push(s1)

        const s0 = new Connector();
        this._mutiplexer4x1Circuit1.S0.connectUpstream(s0)
        this._mutiplexer4x1Circuit2.S0.connectUpstream(s0)
        this._inputs.push(s0)


        //other
        this._mutiplexer2x1Circuit.A1.connectUpstream(this._mutiplexer4x1Circuit1.outputs[0])
        this._mutiplexer2x1Circuit.A0.connectUpstream(this._mutiplexer4x1Circuit2.outputs[0])

        this._outputs.push(this._mutiplexer2x1Circuit.outputs[0])
    }

    public connectUpstream(connector: Connector) {
        this._mutiplexer4x1Circuit1.connectUpstream(connector)
        this._mutiplexer4x1Circuit2.connectUpstream(connector)
        this._mutiplexer2x1Circuit.connectUpstream(connector)
    }

    public get A7(): Connector {
        return this._inputs[0];
    }

    public get A6(): Connector {
        return this._inputs[1];
    }

    public get A5(): Connector {
        return this._inputs[2];
    }

    public get A4(): Connector {
        return this._inputs[3];
    }

    public get A3(): Connector {
        return this._inputs[4];
    }

    public get A2(): Connector {
        return this._inputs[5];
    }

    public get A1(): Connector {
        return this._inputs[6];
    }

    public get A0(): Connector {
        return this._inputs[7];
    }

    public get S2(): Connector {
        return this._inputs[8];
    }

    public get S1(): Connector {
        return this._inputs[9];
    }

    public get S0(): Connector {
        return this._inputs[10];
    }
}


export default Multiplexer8x1Circuit
