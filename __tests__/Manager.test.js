const Manager = require('../lib/Manager');

// start of Manager Test
describe('Manager test', () => {
    /*
    - test 1
    - should set office number using constructor arguments
    */
   it('should set office number using constructor arguments', () => {
       const testOffNum = 210;
       const eo = new Manager('brent', 101, 'brent@mail.com', testOffNum);
       expect(eo.officeNumber).toBe(testOffNum);
   });

    /*
    - test 2
    - should use getRole() and return it as Manager
    */
   describe('getRole', () => {
       it('should use getRole() and return it as Manager', () => {
           const testRole = 'Manager';
           const eo = new Manager('brent', 101, 'brent@mail.com', 210);
           expect(eo.getRole()).toBe(testRole);
       });
   });

    /*
    - test 3
    - should get office number by using getOfficeNumber()
    */
   describe('getOfficeNumber', () => {
       it('should get office number by using getOfficeNumber()', () => {
           const testOffNum = 210;
           const eo = new Manager('brent', 101, 'brent@mail.com', testOffNum);
           expect(eo.getOfficeNumber()).toBe(testOffNum);
       });
   });
});