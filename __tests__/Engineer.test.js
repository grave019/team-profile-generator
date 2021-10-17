const Employee = require('../lib/employee');
const Engineer = require('../lib/Engineer');

test("successfully instantiates instance of Engineer Class", () =>{
    const engineer = new Engineer();
    expect(typeof(engineer).tobe("object"));
})

test("successfully sets a name via constructor arguements", () => {
    const name = "Fenix";
    const engineer = new Engineer(name);
    expect(engineer.name).tobe(name);
})

test("successfully sets a id via constructor arguments", () =>{
    const id = "1127";
    const engineer = new Engineer(id);
    expect(engineer.id).toBe(id);
})

test("successfully set a email via constructor arguments", () =>{
    const email = "fenix@mail.com";
    const engineer = new Engineer(email);
    expect (engineer.email).toBe(email);
})

test("successfully sets a github via constructor arguments", () =>{
    const github = "fenix01";
    const engineer = new Engineer(github);
    expect (engineer.github).tobe(github);
})

test("successfully sets a title via constructor arguments", () =>{
    const employee = "employee";
    const employee = new Employee();
}) 