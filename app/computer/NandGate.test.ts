import AndGate from "./AndGate";
import Connector from "./Connector";
import each from "jest-each";
import NandGate from "./NandGate";

describe('NandGate', () => {
    it.each([
        [false, false, true],
        [false, true, true],
        [true, false, true],
        [true, true, false]
    ])('and gate %o %o %o', (a, b, expected) => {
        const switchConnector = new Connector();
        switchConnector.turnOn();

        const input1 = new Connector();
        const input2 = new Connector();
        const output = new Connector();


        const gate = new NandGate();
        gate.connectUpstream(switchConnector);
        gate.connectInputs([input1, input2]);
        gate.connectOutputs([output]);

        input1.state = a;
        input2.state = b;
        expect(output.state).toBe(expected);
    })
})
