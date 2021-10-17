const Employee = require('../lib/Employee');

test("seccessfully instantiates instance of Employee Class", () => {
    const employee = new Employee();
    expect(typeof(employee).toBe("object"));
})

test("Successfully set a name via constructor arguments", () => {
    const name = "Brent";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})