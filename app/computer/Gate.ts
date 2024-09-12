import Connector from "./Connector";

class Gate {

    protected _inputs: Connector[] = []
    protected _outputs: Connector[] = []


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

    public get inputs(): Connector[] {
        return this._inputs
    }

    public get outputs(): Connector[] {
        return this._outputs
    }
}

export default Gate;
