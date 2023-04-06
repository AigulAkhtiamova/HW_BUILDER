//Builder (cтроитель) - порождающий шаблон программирования. 
//Применяется для создания сложных объектов при помощи цепочки 
//методов someBuilder->setValueA(1)->setValueB(2)->build()

class employee {
    fname:string
    lname:string
    age:number
    Position:string    
    Salary:number


	constructor(fname:string, lname:string, age:number, Position?:string, Salary?:number ) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.Position = Position || 'engeneer';
	this.Salary = Salary || 50000;
	}
}

const empl1 = new employee('Ivan', 'Ivanov', 23);
const empl2 = new employee('Petr', 'Petrov', 25, 'economist');
const empl3 = new employee('Petr', 'Petrov', 25, 'buh', 80000);

class employeeBuilder {
    fname:string
    lname:string
    age:number
    Position:string = 'engeneer' 
    Salary:number = 50000

  constructor(fname:string, lname:string, age:number) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  addPosition(Position:string) {
    this.Position = Position;
    return this;
  }
  addSalary(Salary:number) {
    this.Salary = Salary;
    return this;
  }

  build() {
   return new employee(this.fname, this.lname, this.age, this.Position, this.Salary);
  }
}


const empl_build = new employeeBuilder('Marina', 'Ivanova',30)
  .addSalary(200000)
  .addPosition('director')
  .build();