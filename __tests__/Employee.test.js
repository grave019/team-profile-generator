const Employee = require('../lib/Employee');

// start of Employee Test
describe('Employee Test', () => {
    /*
    - test 1
    - should instantiate the Employee instance
    */
   it('should instantiate the Employee instance', () => {
       //eo stands for employee object
       const eo = new Employee();
       expect(typeof(eo)).toBe('object');
   });

    /*
    - test 2
    - should set name of employee using constructor arguments
    */
   it('should set name of employee using constructor arguments', () => {
       const name = 'brent';
       const eo = new Employee(name);
       expect(eo.name).toBe(name);
   });

    /*
    - test 3
    - should set the ID of the employee using constructor arguments
    */
   it('should set the ID of the employee using constructor arguments', () => {
       const testId = 101;
       const eo = new Employee('brent', testId);
       expect(eo.id).toBe(testId);
   });

     /*
    - test 4
    - should set email of employee using constructor arguments
    */
   it('should set email of employee using constructor arguments', () => {
       const testEmail = 'brent@mail.com';
       const eo = new Employee('brent', 101, testEmail);
       expect(eo.email).toBe(testEmail);
   });

     /*
    - test 5
    - start of function tests
    - should get name using getName()
    */
   describe('getName', () => {
       it('should get name using getName()', () => {
           const testName = 'brent';
           const eo = new Employee(testName);
           expect(eo.getName()).toBe(testName);
       });
   });

     /*
    - test 6
    - should get ID using getID()
    */
   describe('getId', () => {
       it('should get ID using getID()', () => {
           const testId = 101;
           const eo = new Employee('brent', testId);
           expect(eo.getId()).toBe(testId);
       });
   });

     /*
    - test 7
    - should get email using getEmail()
    */
   describe('getEmail', () => {
       it('should get email using getEmail()', () => {
           const testEmail = 'brent@mail.com';
           const eo = new Employee('brent', 101, testEmail);
           expect(eo.getEmail()).toBe(testEmail);
       });
   });

     /*
    - test 8
    - should get role using getRole() and return type of Employee
    */
   describe('getRole', () => {
       it('should get role using getRole() and return type of Employee', () => {
           const testRole = 'Employee';
           const eo = new Employee('brent', 101, 'test@email.com');
           expect(eo.getRole()).toBe(testRole);
       });
   });
});