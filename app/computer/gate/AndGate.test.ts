import AndGate from "./AndGate";
import Connector from "./../Connector";
import each from "jest-each";

describe('AndGate', () => {
    it.each([
        [false, false, false],
        [false, true, false],
        [true, false, false],
        [true, true, true]
    ])('and gate %o %o %o', (a, b, expected) => {
        const switchConnector = new Connector();
        switchConnector.turnOn();

        const input1 = new Connector();
        const input2 = new Connector();

        const output = new Connector();


        const andGate = new AndGate();
        andGate.connectUpstream(switchConnector);
        andGate.connectInputs([input1, input2]);
        andGate.connectOutputs([output]);

        input1.state = a;
        input2.state = b;
        expect(output.state).toBe(expected);
    })
})
