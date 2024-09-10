import Connector from "./../Connector";
import OrGate from "./OrGate";

describe('OrGate', () => {
    it.each([
        [false, false, false],
        [false, true, true],
        [true, false, true],
        [true, true, true]
    ])('or gate %o %o %o', (a, b, expected) => {
        const switchConnector = new Connector('switch');
        switchConnector.turnOn();

        const input1 = new Connector('input1');
        const input2 = new Connector('input2');

        const output = new Connector('output');


        const orGate = new OrGate();
        orGate.connectUpstream(switchConnector);
        orGate.connectInputs([input1, input2]);
        orGate.connectOutputs([output]);

        input1.state = a;
        input2.state = b;
        expect(output.state).toBe(expected);
    })
})
