const Intern = require('../lib/Intern');

// start of Intern Test
describe('Intern test', () => {
    /*
    - test 1
    - should set school name using constructor arguments
    */
   it('should set school name using constructor arguments', () => {
       const testSchool = 'UTSA';
       const eo = new Intern('fenix', 101, 'fenix@mail.com', testSchool);
       expect(eo.school).toBe(testSchool);
   });

    /*
    - test 2
    - should use getRole() and return it as Intern
    */
   describe('getRole', () => {
       it('should use getRole() and return it as Intern', () => {
           const testRole = 'Intern';
           const eo = new Intern('fenix', 101, 'fenix@mail.com', 'UTSA');
           expect(eo.getRole()).toBe(testRole);
       });
   });

    /*
    - test 3
    - should get school name using getSchool()
    */
   describe('getSchool', () => {
       it('should get school name using getSchool()', () => {
           const testSchool = 'UTSA'
           const eo = new Intern('fenix', 101, 'fenix@mail.com', testSchool);
           expect(eo.getSchool()).toBe(testSchool);
       });
   });
});