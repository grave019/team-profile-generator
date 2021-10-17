const Intern = require("../lib/Intern");

describe("Intern", () => {

    test("Successfully instantiates instance of Intern Class", () =>{
        const intern = new Intern();
        expect(typeof(intern).tobe("object"));
});
    test("should successfully create intern object with parameters"), () => {
        const intern = new Intern("fenix", 1127, "fenix@mail.com", "fenix university")
        expect(typeof(intern.name)).tobe("string");
        expect(typeof(intern.id)).tobe("number");
        expect(typeof(intern.email)).tobe("string");
        expect(typeof(intern.school)).tobe("string");
};
    test("Successfully sets a name via constructor arguements", () => {
        const name = "fenix";
        const intern = new Intern(name);
        expect(intern.name).tobe(name);
});

    test("Successfully sets a id via constructor arguments", () =>{
        const id = 1127;
        const intern = new Intern(id);
        expect(intern.id).toBe(id);
});

    test("Successfully set a email via constructor arguments", () =>{
        const email = "fenix@mail.com";
        const intern = new Intern(email);
        expect (intern.email).toBe(email);
});

    test("Successfully sets a school via constructor arguments", () =>{
        const school = "fenix university";
        const intern = new Intern(school);
        expect (intern.school).tobe(school);
});

    test("Should get role of intern using getRole", () =>{
        const intern = "employee";
        const intern = new Intern("fenix", 1127, "fenix@mail.com", "fenix university");
        expect (intern.getRole()).toBe("Intern");
});
    test("Should get the intern's school using the getSchool()", () => {
        const intern = new Intern("fenix", 1127, "fenix@mail.com", "fenix university");
        expect (intern.getSchool()).toBe("fenix university")
    });
})