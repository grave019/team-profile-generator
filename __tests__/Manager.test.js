const Manager = require("../lib/Manager");

describe("Manager", () => {

    test("successfully instantiates instance of Manager Class", () => {
        const manager = new Manager();
        expect(typeof(manager).toBe("object"));
});

    test("Successfully set a name via constructor arguments", () => {
        const name = "Brent";
        const manager = new Manager(name);
        expect(manager.name).toBe(name);
});
    test("successfully set a id via constructor arguments", () => {
        const id = "0531";
        const manager = new Manager(id);
        expect(manager.id).toBe(id);
});
    test("successfully set a email via constructor arguments", () =>{
        const email = "brent@mail.com";
        const manager = new Manager(email);
        expect (manager.email).toBe(email);
});
    test("should get the role of the new Manager", () => {
        const manager = new Manager("brent", "0531", "brent@mail.com", "39");
        expect(manager.getRole()).toBe("Manager");
});
    test("successfully set a office number using officeNumber", () =>{
        const officeNumber = "39";
        const manager = new Manager(officeNumber);
        expect (manager.officeNumber).toBe(officeNumber);
});
});