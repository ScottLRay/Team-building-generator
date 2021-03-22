const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager.js")

describe("Manager",() => {
    describe("Initialization", () =>{
        test("can set office number attribute with constructor",() => {
            const officeNumber = 8009
            const e = new Employee(officeNumber)

            expect(e.officeNumber).toBe(officeNumber)
        })
    })

    describe("getters", () => {
        test("can get office number via getSchool() method", () => {
            const officeNumber = 8220
            const e = new Employee(officeNumber)

            expect(e.getOfficeNumber()).toBe(officeNumber)
        })
        test("Can get role via getRole() method", () => {
            const e = new Employee("Nick", 77, "tbeauchamp@gmail.com");
            
            expect(e.getRole()).toBe("Manager");
          });
    })
})