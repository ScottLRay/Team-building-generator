const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer.js")


describe("Intern",() => {
    describe("Initialization", () =>{
        test("can set github attribute with constructor",() => {
            const e = new Employee(github)

            expect(e.github).toBe(github)
        })
    })

    describe("getters", () => {
        test("can get school via getGithub() method", () => {
            const github = "github.com/Nick/"
            const e = new Employee(github)

            expect(e.getGithub()).toBe(github)
        })
        test("Can get role via getRole() method", () => {
            const e = new Employee("Nick", 77, "tbeauchamp@gmail.com");
            
            expect(e.getRole()).toBe("Engineer");
          });
    })
})