import Gate from "./Gate";

class Circuit extends Gate {
    protected _components: {[key: string]: Gate} = {}
    protected wiring = []

    public constructor() {
        super();
    }
}


export default Circuit
