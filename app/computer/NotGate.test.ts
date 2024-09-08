import AndGate from "./AndGate";
import Connector from "./Connector";
import each from "jest-each";
import OrGate from "./OrGate";
import NotGate from "./NotGate";

describe('NotGate', () => {
    it.each([
        [false, true],
        [true, false],
    ])('and gate %o %o ', (a, expected) => {
        const switchConnector = new Connector();
        switchConnector.turnOn();

        const input = new Connector();
        const output = new Connector();


        const gate = new NotGate();
        gate.connectUpstream(switchConnector);
        gate.connectInputs([input]);
        gate.connectOutputs([output]);

        input.state = a;
        expect(output.state).toBe(expected);
    })
})
