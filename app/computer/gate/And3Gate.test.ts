import AndGate from "./AndGate";
import Connector from "./../Connector";
import each from "jest-each";
import AndGate3 from "./And3Gate";

describe('AndGate3', () => {
    it.each([
        [0, 0, 0, 0],

        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],

        [1, 1, 0, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 0],

        [1, 1, 1, 1],

    ])('and gate %o %o %o', (a, b, c, expected) => {
        const switchConnector = new Connector();
        switchConnector.turnOn();

        const input1 = new Connector();
        const input2 = new Connector();
        const input3 = new Connector();

        const output = new Connector();

        const andGate = new AndGate3();
        andGate.connectUpstream(switchConnector);
        andGate.connectInputs([input1, input2, input3]);
        andGate.connectOutputs([output]);

        input1.state = Boolean(a);
        input2.state = Boolean(b);
        input3.state = Boolean(c);
        expect(output.state).toBe(Boolean(expected));
    })
})
