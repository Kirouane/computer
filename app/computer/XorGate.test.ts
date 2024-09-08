import Connector from "./Connector";
import OrGate from "./OrGate";
import XorGate from "./XorGate";

describe('XorGate', () => {
    it.each([
        [false, false, false],
        [false, true, true],
        [true, false, true],
        [true, true, false]
    ])('xor gate %o %o %o', (a, b, expected) => {
        const switchConnector = new Connector('switch');
        switchConnector.turnOn();

        const input1 = new Connector('input1');
        const input2 = new Connector('input2');

        const output = new Connector('output');


        const xorGate = new XorGate();
        xorGate.connectUpstream(switchConnector);
        xorGate.connectInputs([input1, input2]);
        xorGate.connectOutputs([output]);

        input1.state = a;
        input2.state = b;
        expect(output.state).toBe(expected);
    })
})
