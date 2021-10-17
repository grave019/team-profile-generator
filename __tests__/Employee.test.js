const Employee = require("../lib/Employee");

describe("Employee", () => {

    test("successfully instantiates instance of Employee Class", () => {
        const employee = new Employee();
        expect(typeof(employee).toBe("object"));
});
    test("should creat and Employee object with all parameters", () => {
        const employee = new Employee("brent", 0531, "brent@mail.com");
        expect(typeof(employee.name)).toBe("string");
        expect(typeof(employee.id)).toBe("number");
        expect(typeof(employee.email)).toBe("string");
})
    test("Successfully set a name via constructor arguments", () => {
        const name = "Brent";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
});
    test("successfully set a id via constructor arguments", () => {
        const id = "0531";
        const employee = new Employee(id);
        expect(employee.id).toBe(id);
});
    test("successfully set a email via constructor arguments", () =>{
        const email = "brent@mail.com";
        const employee = new Employee(email);
        expect (employee.email).toBe(email);
});
    test("should get the role of the new Employee", () => {
        const employee = new Employee("brent", 0531, "brent@mail.com");
        expect(employee.getRole()).toBe("Employee");
});
    test("should get the name of employee using getName", () => {
        const employee = new Employee("brent", 0531, "brent@mail.com");
        expect(employee.getName()).toBe("brent");
    });
    test("should get the id of employee using getId", () => {
        const employee = new Employee("brent", 0531, "brent@mail.com");
        expect(employee.getId()).toBe(0531);
    });
    test("should get the email of employee using getEmail", () => {
        const employee = new Employee("brent", 0531, "brent@mail.com");
        expect(employee.getEmail()).toBe("brent@mail.com");
    });
});