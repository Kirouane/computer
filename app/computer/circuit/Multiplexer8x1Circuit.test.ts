import Connector from "../Connector";
import Multiplexer2x1Circuit from "./Multiplexer2x1Circuit";
import Multiplexer4x1Circuit from "./Multiplexer4x1Circuit";
import Multiplexer8x1Circuit from "./Multiplexer8x1Circuit";


describe('Multiplexer8x1Circuit', () => {
    it.each([
        [[0, 0, 0, 0,  0, 0, 0, 0], 0, 0, 0, 0],
        [[0, 0, 0, 0,  0, 0, 0, 0], 1, 0, 0, 0],
        [[0, 0, 0, 0,  0, 0, 0, 0], 0, 1, 0, 0],
        [[0, 0, 0, 0,  0, 0, 0, 0], 0, 0, 1, 0],
        [[0, 0, 0, 0,  0, 0, 0, 0], 1, 1, 0, 0],
        [[0, 0, 0, 0,  0, 0, 0, 0], 1, 0, 1, 0],
        [[0, 0, 0, 0,  0, 0, 0, 0], 0, 1, 1, 0],
        [[0, 0, 0, 0,  0, 0, 0, 0], 1, 1, 1, 0],

        [[0, 0, 0, 0,  0, 0, 0, 1], 0, 0, 0, 1],
        [[0, 0, 0, 0,  0, 0, 0, 1], 0, 0, 1, 0],
        [[0, 0, 0, 0,  0, 0, 0, 1], 0, 1, 0, 0],
        [[0, 0, 0, 0,  0, 0, 0, 1], 0, 1, 1, 0],
        [[0, 0, 0, 0,  0, 0, 0, 1], 1, 0, 0, 0],
        [[0, 0, 0, 0,  0, 0, 0, 1], 1, 0, 1, 0],
        [[0, 0, 0, 0,  0, 0, 0, 1], 1, 1, 0, 0],
        [[0, 0, 0, 0,  0, 0, 0, 1], 1, 1, 1, 0],

        [[0, 0, 0, 0,  0, 0, 1, 0], 0, 0, 0, 0],
        [[0, 0, 0, 0,  0, 0, 1, 0], 0, 0, 1, 1],
        [[0, 0, 0, 0,  0, 0, 1, 0], 0, 1, 0, 0],
        [[0, 0, 0, 0,  0, 0, 1, 0], 0, 1, 1, 0],
        [[0, 0, 0, 0,  0, 0, 1, 0], 1, 0, 0, 0],
        [[0, 0, 0, 0,  0, 0, 1, 0], 1, 0, 1, 0],
        [[0, 0, 0, 0,  0, 0, 1, 0], 1, 1, 0, 0],
        [[0, 0, 0, 0,  0, 0, 1, 0], 1, 1, 1, 0],

        [[0, 0, 0, 0,  0, 1, 0, 0], 0, 0, 0, 0],
        [[0, 0, 0, 0,  0, 1, 0, 0], 0, 0, 1, 0],
        [[0, 0, 0, 0,  0, 1, 0, 0], 0, 1, 0, 1],
        [[0, 0, 0, 0,  0, 1, 0, 0], 0, 1, 1, 0],
        [[0, 0, 0, 0,  0, 1, 0, 0], 1, 0, 0, 0],
        [[0, 0, 0, 0,  0, 1, 0, 0], 1, 0, 1, 0],
        [[0, 0, 0, 0,  0, 1, 0, 0], 1, 1, 0, 0],
        [[0, 0, 0, 0,  0, 1, 0, 0], 1, 1, 1, 0],

        [[0, 0, 0, 0,  1, 0, 0, 0], 0, 0, 0, 0],
        [[0, 0, 0, 0,  1, 0, 0, 0], 0, 0, 1, 0],
        [[0, 0, 0, 0,  1, 0, 0, 0], 0, 1, 0, 0],
        [[0, 0, 0, 0,  1, 0, 0, 0], 0, 1, 1, 1],
        [[0, 0, 0, 0,  1, 0, 0, 0], 1, 0, 0, 0],
        [[0, 0, 0, 0,  1, 0, 0, 0], 1, 0, 1, 0],
        [[0, 0, 0, 0,  1, 0, 0, 0], 1, 1, 0, 0],
        [[0, 0, 0, 0,  1, 0, 0, 0], 1, 1, 1, 0],


        [[0, 0, 0, 1,  0, 0, 0, 0], 0, 0, 0, 0],
        [[0, 0, 0, 1,  0, 0, 0, 0], 0, 0, 1, 0],
        [[0, 0, 0, 1,  0, 0, 0, 0], 0, 1, 0, 0],
        [[0, 0, 0, 1,  0, 0, 0, 0], 0, 1, 1, 0],
        [[0, 0, 0, 1,  0, 0, 0, 0], 1, 0, 0, 1],
        [[0, 0, 0, 1,  0, 0, 0, 0], 1, 0, 1, 0],
        [[0, 0, 0, 1,  0, 0, 0, 0], 1, 1, 0, 0],
        [[0, 0, 0, 1,  0, 0, 0, 0], 1, 1, 1, 0],


        [[0, 0, 1, 0,  0, 0, 0, 0], 0, 0, 0, 0],
        [[0, 0, 1, 0,  0, 0, 0, 0], 0, 0, 1, 0],
        [[0, 0, 1, 0,  0, 0, 0, 0], 0, 1, 0, 0],
        [[0, 0, 1, 0,  0, 0, 0, 0], 0, 1, 1, 0],
        [[0, 0, 1, 0,  0, 0, 0, 0], 1, 0, 0, 0],
        [[0, 0, 1, 0,  0, 0, 0, 0], 1, 0, 1, 1],
        [[0, 0, 1, 0,  0, 0, 0, 0], 1, 1, 0, 0],
        [[0, 0, 1, 0,  0, 0, 0, 0], 1, 1, 1, 0],

        [[0, 1, 0, 0,  0, 0, 0, 0], 0, 0, 0, 0],
        [[0, 1, 0, 0,  0, 0, 0, 0], 0, 0, 1, 0],
        [[0, 1, 0, 0,  0, 0, 0, 0], 0, 1, 0, 0],
        [[0, 1, 0, 0,  0, 0, 0, 0], 0, 1, 1, 0],
        [[0, 1, 0, 0,  0, 0, 0, 0], 1, 0, 0, 0],
        [[0, 1, 0, 0,  0, 0, 0, 0], 1, 0, 1, 0],
        [[0, 1, 0, 0,  0, 0, 0, 0], 1, 1, 0, 1],
        [[0, 1, 0, 0,  0, 0, 0, 0], 1, 1, 1, 0],


        [[1, 0, 0, 0,  0, 0, 0, 0], 0, 0, 0, 0],
        [[1, 0, 0, 0,  0, 0, 0, 0], 0, 0, 1, 0],
        [[1, 0, 0, 0,  0, 0, 0, 0], 0, 1, 0, 0],
        [[1, 0, 0, 0,  0, 0, 0, 0], 0, 1, 1, 0],
        [[1, 0, 0, 0,  0, 0, 0, 0], 1, 0, 0, 0],
        [[1, 0, 0, 0,  0, 0, 0, 0], 1, 0, 1, 0],
        [[1, 0, 0, 0,  0, 0, 0, 0], 1, 1, 0, 0],
        [[1, 0, 0, 0,  0, 0, 0, 0], 1, 1, 1, 1],


    ])('Multiplexer 8x1 Circuit %o', (inputValues, selectionLineValue1, selectionLineValue2, selectionLineValue3,outputValue) => {
        const switchConnector = new Connector('switch');
        switchConnector.turnOn();

        const input1 = new Connector('input1');
        const input2 = new Connector('input2');
        const input3 = new Connector('input3');
        const input4 = new Connector('input4');

        const input5 = new Connector('input5');
        const input6 = new Connector('input6');
        const input7 = new Connector('input7');
        const input8 = new Connector('input8');


        const selectionLine1 = new Connector('selectionLine1');
        const selectionLine2 = new Connector('selectionLine2');
        const selectionLine3 = new Connector('selectionLine3');
        const output = new Connector('output');

        const circuit = new Multiplexer8x1Circuit();
        circuit.connectUpstream(switchConnector);
        circuit.connectInputs([input1, input2, input3, input4, input5, input6, input7, input8, selectionLine1, selectionLine2, selectionLine3]);
        circuit.connectOutputs([output]);

        input1.state = Boolean(inputValues[0]);
        input2.state = Boolean(inputValues[1]);
        input3.state = Boolean(inputValues[2]);
        input4.state = Boolean(inputValues[3]);
        input5.state = Boolean(inputValues[4]);
        input6.state = Boolean(inputValues[5]);
        input7.state = Boolean(inputValues[6]);
        input8.state = Boolean(inputValues[7]);

        selectionLine1.state = Boolean(selectionLineValue1);
        selectionLine2.state = Boolean(selectionLineValue2);
        selectionLine3.state = Boolean(selectionLineValue3);

        expect(output.state).toBe(Boolean(outputValue));
    })
})
