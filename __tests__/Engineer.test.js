const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    test("Successfully instantiates instance of Engineer Class", () =>{
        const engineer = new Engineer();
        expect(typeof(engineer).tobe("object"));
});

    test("Successfully sets a name via constructor arguements", () => {
        const name = "Fenix";
        const engineer = new Engineer(name);
        expect(engineer.name).tobe(name);
});

    test("Successfully sets a id via constructor arguments", () =>{
        const id = "1127";
        const engineer = new Engineer(id);
        expect(engineer.id).toBe(id);
});

    test("Successfully set a email via constructor arguments", () =>{
        const email = "fenix@mail.com";
        const engineer = new Engineer(email);
        expect (engineer.email).toBe(email);
});

    test("Successfully sets a github via constructor arguments", () =>{
        const github = "fenix01";
        const engineer = new Engineer(github);
        expect (engineer.github).tobe(github);
});

    test("Should get role of engineer using getRole", () =>{
        const engineer = "employee";
        const engineer = new Engineer("Fenix", "1127", "fenix@mail.com", "fenix01");
        expect (engineer.getRole()).toBe("Engineer");
});
    test("Should get the github username using the getGithub()", () => {
        const engineer = new Engineer("Fenix", "1127", "fenix@mail.com", "fenix01");
        expect (engineer.getGithub()).toBe("fenix01")
    });
})