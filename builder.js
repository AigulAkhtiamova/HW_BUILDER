//Builder (cтроитель) - порождающий шаблон программирования. 
//Применяется для создания сложных объектов при помощи цепочки 
//методов someBuilder->setValueA(1)->setValueB(2)->build()
var employee = /** @class */ (function () {
    function employee(fname, lname, age, Position, Salary) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.Position = Position || 'engeneer';
        this.Salary = Salary || 50000;
    }
    return employee;
}());
var empl1 = new employee('Ivan', 'Ivanov', 23);
var empl2 = new employee('Petr', 'Petrov', 25, 'economist');
var empl3 = new employee('Petr', 'Petrov', 25, 'buh', 80000);
var employeeBuilder = /** @class */ (function () {
    function employeeBuilder(fname, lname, age) {
        this.Position = 'engeneer';
        this.Salary = 50000;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    employeeBuilder.prototype.addPosition = function (Position) {
        this.Position = Position;
        return this;
    };
    employeeBuilder.prototype.addSalary = function (Salary) {
        this.Salary = Salary;
        return this;
    };
    employeeBuilder.prototype.build = function () {
        return new employee(this.fname, this.lname, this.age, this.Position, this.Salary);
    };
    return employeeBuilder;
}());
var empl_build = new employeeBuilder('Marina', 'Ivanova', 30)
    .addSalary(200000)
    .addPosition('director')
    .build();
