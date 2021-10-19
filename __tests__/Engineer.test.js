const Engineer = require('../lib/Engineer');

// start of Engineer Test
describe('Engineer test', () => {
    /*
    - test 1
    - should set GitHub username account using constructor arguments
    */
   it('should set GitHub username account using constructor arguments', () => {
       const testUserName = "GitHubUser";
       const eo = new Engineer('gabriel', 101, 'gabriel@mail.com', testUserName);
       expect(eo.github).toBe(testUserName);
   });

    /*
    - test 2
    - should use getRole() and return it as Engineer
    */
   describe('getRole', () => {
       it('should use getRole() and return it as Engineer', () => {
           const testRole = 'Engineer';
           const eo = new Engineer('gabriel', 101, 'gabriel@mail.com', 'GitHubUser');
           expect(eo.getRole()).toBe(testRole);
       });
   });

    /*
    - test 3
    - should get GitHub username using getGitHub()
    */
   describe('getGitHub', () => {
       it('should get GitHub username using getGitHub()', () => {
           const testUserName = 'GitHubUser';
           const eo = new Engineer('gabriel', 101, 'gabriel@mail.com', testUserName);
           expect(eo.getGithub()).toBe(testUserName);
       });
   });
});