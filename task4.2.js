class Person {
    Name;
    Address;
    constructor(name, address) {
        this.Name = name;
        this.Address = address;
    }
    Person() {
        return `Name = ${this.Name} | Address = ${this.Address}`;
    }
    getName() {
        return `Name = ${this.Name}`;
    }
    getaddress() {
        return `Address = ${this.Address}`;
    }
    setaddress(address) {
        this.Address = address;
    }
    tostring() {
        return `[Name = ${this.Name} | Address = ${this.Address}]`;
    }
}
class Staf extends Person {
    School;
    Pay;
    constructor(name, address, school, pay) {
        super(name, address);
        this.School = school;
        this.Pay = pay;
    }
    getschool() {
        return `School = ${this.School}`;
    }
    setschool(school) {
        this.School = school;
    }
    getpay() {
        return this.Pay;
    }
    setpay(pay) {
        this.Pay = pay;
    }
    toString() {
        return `[ ${this.getName()} |  ${this.getaddress()} | School = ${this.School} | Pay = ${2000}]`;
    }
}
class Student extends Person {
    Program;
    Year;
    fee;
    constructor(name, address, program, year, fee) {
        super(name, address);
        this.Program = program;
        this.Year = year;
        this.fee = fee;
    }
    getprogram() {
        return `Program = ${this.Program}`;
    }
    setprogram(program) {
        this.Program = program;
    }
    getyear() {
        return this.Year;
    }
    setyear(year) {
        this.Year = year;
    }
    getfee() {
        return this.fee;
    }
    setfee(fee) {
        this.fee = fee;
    }
    ToString() {
        return `[ ${this.getName()} |  ${this.getaddress()} | program = ${this.getprogram()} | Year = ${this.getyear()} | fee = ${this.getfee()}]`;
    }
}
const p1 = new Person('mostafa', 'Mansoura');
console.log(p1.tostring());
console.log("============================================");
const f1 = new Staf('mostafa', 'Mansoura', 'askaria', 2100);
console.log(f1.toString());
console.log("============================================");
const s1 = new Student('mostafa', 'Mansoura', 'SWE', 2003, 20);
console.log(s1.ToString());
