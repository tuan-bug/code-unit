const {add,subtract,multiply,divide} = require("./math")
describe("math.js test", ()=>{
    if("should test add", ()=>{
        expect(add(2,2)).toBe(4)
    });
    if("should test subtract", ()=>{
        expect(subtract(2,2)).toBe(0)
    });
    if("should test multiply", ()=>{
        expect(multiply(2,2)).toBe(1)
    });
    if("should test divide", ()=>{
        expect(divide(2,2)).toBe(4)
    });
});