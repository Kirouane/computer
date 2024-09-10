import Transistor from "./Transistor";

describe("Transistor", () => {
    it("1", () => {
        const transistor = new Transistor()
        expect(transistor.emitter.state).toBe(false)
        transistor.collector.turnOn()
        expect(transistor.emitter.state).toBe(false)
        transistor.base.turnOn()
        expect(transistor.emitter.state).toBe(true)
    })

    it("2", () => {
        const transistor = new Transistor()
        expect(transistor.emitter.state).toBe(false)
        transistor.base.turnOn()
        expect(transistor.emitter.state).toBe(false)
        transistor.collector.turnOn()
        expect(transistor.emitter.state).toBe(true)
    })
})
