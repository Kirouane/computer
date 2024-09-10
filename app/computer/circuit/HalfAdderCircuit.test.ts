import Connector from "../Connector";
import HalfAdderCircuit from "./HalfAdderCircuit";


describe('HalfAdderCircuit', () => {
    it.each([
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 0, 1, 0],
        [1, 1, 0, 1],
    ])('Half adder circuit: %o %o %o %o', (i1, i2, o1, o2) => {
        const switchConnector = new Connector('switch');
        switchConnector.turnOn();

        const input1 = new Connector('input1');
        const input2 = new Connector('input2');

        const output1 = new Connector('output1');
        const output2 = new Connector('output2');


        const circuit = new HalfAdderCircuit();
        circuit.connectUpstream(switchConnector);
        circuit.connectInputs([input1, input2]);
        circuit.connectOutputs([output1, output2]);

        input1.state = Boolean(i1);
        input2.state = Boolean(i2);
        expect(output1.state).toBe(Boolean(o1));
        expect(output2.state).toBe(Boolean(o2));
    })
})
