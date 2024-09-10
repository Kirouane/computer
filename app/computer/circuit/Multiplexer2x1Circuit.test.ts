import Connector from "../Connector";
import Multiplexer2x1Circuit from "./Multiplexer2x1Circuit";


describe('Multiplexer2x1Circuit', () => {
    it.each([
        [[1, 0], 0, 1],
        [[1, 0], 1, 0],
    ])('Multiplexer 2x1 Circuit', (inputValues, selectionLineValue, outputValue) => {
        const switchConnector = new Connector('switch');
        switchConnector.turnOn();

        const input1 = new Connector('input1');
        const input2 = new Connector('input2');
        const selectionLine = new Connector('selectionLine');
        const output = new Connector('output');

        const circuit = new Multiplexer2x1Circuit();
        circuit.connectUpstream(switchConnector);
        circuit.connectInputs([input1, input2, selectionLine]);
        circuit.connectOutputs([output]);

        input1.state = Boolean(inputValues[0]);
        input2.state = Boolean(inputValues[1]);
        selectionLine.state = Boolean(selectionLineValue);

        expect(output.state).toBe(Boolean(outputValue));
    })
})
