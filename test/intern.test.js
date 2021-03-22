
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern.js")

describe("Intern",() => {
    describe("Initialization", () =>{
        test("can set school attribute with constructor",() => {
            const e = new Employee(school)

            expect(e.school).toBe(school)
        })
    })

    describe("getters", () => {
        test("can get school via getSchool() method", () => {
            const school = "UofA"
            const e = new Employee(school)

            expect(e.getSchool()).toBe(school)
        })
        test("Can get role via getRole() method", () => {
            const e = new Employee("Nick", 77, "tbeauchamp@gmail.com");
            
            expect(e.getRole()).toBe("Intern");
          });
    })
})