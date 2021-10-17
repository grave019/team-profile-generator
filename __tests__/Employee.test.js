const Employee = require('../lib/Employee');

test("successfully instantiates instance of Employee Class", () => {
    const employee = new Employee();
    expect(typeof(employee).toBe("object"));
})

test("Successfully set a name via constructor arguments", () => {
    const name = "Brent";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})
test("successfully set a id via constructor arguments", () => {
    const id = "0531";
    const employee = new Employee(id);
    expect(employee.id).toBe(id);
})
test("successfully set a email via constructor arguments", () =>{
    const email = "brent@mail.com";
    const employee = new Employee(email);
    expect (employee.email).toBe(email);
})