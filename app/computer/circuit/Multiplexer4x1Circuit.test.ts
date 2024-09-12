import Connector from "../Connector";
import Multiplexer2x1Circuit from "./Multiplexer2x1Circuit";
import Multiplexer4x1Circuit from "./Multiplexer4x1Circuit";


describe('Multiplexer4x1Circuit', () => {
    it.each([
        [[0, 0, 0, 0], 0, 0, 0],
        [[0, 0, 0, 0], 0, 1, 0],
        [[0, 0, 0, 0], 1, 0, 0],
        [[0, 0, 0, 0], 1, 1, 0],

        [[0, 0, 0, 1], 0, 0, 1],
        [[0, 0, 0, 1], 0, 1, 0],
        [[0, 0, 0, 1], 1, 0, 0],
        [[0, 0, 0, 1], 1, 1, 0],

        [[0, 0, 1, 0], 0, 0, 0],
        [[0, 0, 1, 0], 0, 1, 1],
        [[0, 0, 1, 0], 1, 0, 0],
        [[0, 0, 1, 0], 1, 1, 0],

        [[0, 1, 0, 0], 0, 0, 0],
        [[0, 1, 0, 0], 0, 1, 0],
        [[0, 1, 0, 0], 1, 0, 1],
        [[0, 1, 0, 0], 1, 1, 0],

        [[1, 0, 0, 0], 0, 0, 0],
        [[1, 0, 0, 0], 0, 1, 0],
        [[1, 0, 0, 0], 1, 0, 0],
        [[1, 0, 0, 0], 1, 1, 1],


    ])('Multiplexer 4x1 Circuit', (inputValues, selectionLineValue1, selectionLineValue2, outputValue) => {
        const switchConnector = new Connector('switch');
        switchConnector.turnOn();

        const input1 = new Connector('input1');
        const input2 = new Connector('input2');
        const input3 = new Connector('input3');
        const input4 = new Connector('input4');
        const selectionLine1 = new Connector('selectionLine1');
        const selectionLine2 = new Connector('selectionLine2');
        const output = new Connector('output');

        const circuit = new Multiplexer4x1Circuit();
        circuit.connectUpstream(switchConnector);
        circuit.connectInputs([input1, input2, input3, input4, selectionLine1, selectionLine2]);
        circuit.connectOutputs([output]);

        input1.state = Boolean(inputValues[0]);
        input2.state = Boolean(inputValues[1]);
        input3.state = Boolean(inputValues[2]);
        input4.state = Boolean(inputValues[3]);
        selectionLine1.state = Boolean(selectionLineValue1);
        selectionLine2.state = Boolean(selectionLineValue2);

        expect(output.state).toBe(Boolean(outputValue));
    })
})
