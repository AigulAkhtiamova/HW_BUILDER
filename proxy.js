// ПАТТЕРН ЗАМЕСТИТЕЛЬ (proxy)
// Предоставляет суррогатный объект, управляющий доступом к другому объекту.
var LabDoor = /** @class */ (function () {
    function LabDoor() {
    }
    LabDoor.prototype.open = function () {
        console.log('Opening lab door');
    };
    LabDoor.prototype.close = function () {
        console.log('Closing the lab door');
    };
    return LabDoor;
}());
var Security = /** @class */ (function () {
    function Security(door) {
        this.door = door;
    }
    Security.prototype.open = function (password) {
        if (this.authenticate(password)) {
            this.door.open();
        }
        else {
            console.log('Big no! It ain\'t possible.');
        }
    };
    Security.prototype.authenticate = function (password) {
        return password === 'ecr@t';
    };
    Security.prototype.close = function () {
        this.door.close();
    };
    return Security;
}());
var door = new Security(new LabDoor());
door.open('invalid'); // Big no! It ain't possible.
door.open('ecr@t'); // Opening lab door
door.close(); // Closing lab door
