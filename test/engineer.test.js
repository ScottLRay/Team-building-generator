const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  describe("Initialization", () => {
    test("Can initialize an employee object", () => {
      const e = new Engineer();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Clark";
      const e = new Engineer(name);
      expect(e.name).toBe(name);
    });
    test("Can set id attribute with constructor", () => {
      const id = 77;
      const e = new Engineer("Nick", id);
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "tbeauchamp@2u.com";
      const e = new Engineer("Nick", 77, email);
      expect(e.email).toBe(email);
    });
    test("Can set github attribute with constructor", () => {
        const github = "tbeauchamp";
        const e = new Engineer("Nick", 77, "tbeauchamp@gmail.com", github);
        expect(e.github).toBe(github);
      });

  });
  describe("getters", () => {
    test("Can get name via getName() method", () => {
      const name = "Nick";
      const e = new Engineer(name, 77, "tbeauchamp@gmail.com");
      expect(e.getName()).toBe(name);
    });
    test("Can get id via getId() method", () => {
      const id = 77;
      const e = new Engineer("Nick", id, "tbeauchamp@gmail.com");
      expect(e.getId()).toBe(id);
    });
    test("Can get email via getEmail() method", () => {
      const email = "tbeauchamp@gmail.com";
      const e = new Engineer("Nick", 77, email);
      expect(e.getEmail()).toBe(email);
    });
    test("Can get role via getRole() method", () => {
      const e = new Engineer("Nick", 77, "tbeauchamp@gmail.com");
      expect(e.getRole()).toBe("Employee");
    });
    test("Can get role via getGithub() method", () => {
        const github = "tbeauchamp"
        const e = new Engineer("Nick", 77,"tbeauchamp@gmail.com",  github);
        expect(e.getGithub()).toBe(github);
      });

  });
});