import Connector from "../Connector";
import HalfAdderCircuit from "./HalfAdderCircuit";
import FullAdderCircuit from "./FullAdderCircuit";


describe('FullAdderCircuit', () => {
    it.each([
        [[0, 0, 0], [0, 0]],
        [[0, 0, 1], [1, 0]],
        [[0, 1, 0], [1, 0]],
        [[0, 1, 1], [0, 1]],
        [[1, 0, 0], [1, 0]],
        [[1, 0, 1], [0, 1]],
        [[1, 1, 0], [0, 1]],
        [[1, 1, 1], [1, 1]],
    ])('Full adder circuit: %o %o %o %o', (inputs, outputs) => {
        const switchConnector = new Connector('switch');
        switchConnector.turnOn();

        const input1 = new Connector('input1');
        const input2 = new Connector('input2');
        const input3 = new Connector('input3');

        const output1 = new Connector('output1');
        const output2 = new Connector('output2');


        const circuit = new FullAdderCircuit();
        circuit.connectUpstream(switchConnector);
        circuit.connectInputs([input1, input2, input3]);
        circuit.connectOutputs([output1, output2]);

        input1.state = Boolean(inputs[0]);
        input2.state = Boolean(inputs[1]);
        input3.state = Boolean(inputs[2]);
        expect(output1.state).toBe(Boolean(outputs[0]));
        expect(output2.state).toBe(Boolean(outputs[1]));
    })
})
