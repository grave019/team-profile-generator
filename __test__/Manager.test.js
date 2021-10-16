const Employee = ("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber;
    }
    getRole() {
        return "Manager"
    }

    GetOfficeNumber(){
        return this.officeNumber
    }
}