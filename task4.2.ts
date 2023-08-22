class Person {
    private Name: string;
    private Address: string;

    constructor(name: string, address: string) {
        this.Name = name;
        this.Address = address;
    }
    public Person() {
        return `Name = ${this.Name} | Address = ${this.Address}`
    }
    getName(): string {
        return `Name = ${this.Name}`
    }

    getaddress(): string {
        return `Address = ${this.Address}`
    }
    setaddress(address: string): void {
        this.Address = address;
    }
    tostring(): string {
        return `[Name = ${this.Name} | Address = ${this.Address}]`
    }
}

class Staf extends Person {
    private School: string;
    private Pay: number;

    constructor(name: string, address: string, school: string, pay: number) {
        super(name, address);
        this.School = school;
        this.Pay = pay;
    }
    getschool(): string {
        return `School = ${this.School}`
    }

    setschool(school: string): void {
        this.School = school;
    }

    getpay(): number {
        return this.Pay
    }

    setpay(pay: number): void {
        this.Pay = pay;
    }

    toString(): string {
        return `[ ${this.getName()} |  ${this.getaddress()} | School = ${this.School} | Pay = ${2000}]`
    }
}

class Student extends Person {
    private Program: string;
    private Year: number;
    private fee: number;

    constructor(name: string, address: string, program: string, year: number, fee: number) {
        super(name, address)
        this.Program = program;
        this.Year = year;
        this.fee = fee;
    }

    getprogram(): string {
        return `Program = ${this.Program}`
    }
    setprogram(program: string): void {
        this.Program = program;
    }
    getyear(): number {
        return this.Year
    }
    setyear(year: number): void {
        this.Year = year;
    }
    getfee(): number {
        return this.fee
    }

    setfee(fee: number): void {
        this.fee = fee;
    }

    ToString(): string {
        return `[ ${this.getName()} |  ${this.getaddress()} | program = ${this.getprogram()} | Year = ${this.getyear()} | fee = ${this.getfee()}]`
    }
}


const p1 = new Person('mostafa', 'Mansoura');
console.log(p1.tostring())

console.log("============================================")

const f1 = new Staf('mostafa', 'Mansoura', 'askaria', 2100)
console.log(f1.toString())

console.log("============================================")

const s1 =new Student('mostafa', 'Mansoura','SWE',2003 , 20)
console.log(s1.ToString())

