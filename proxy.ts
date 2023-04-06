// ПАТТЕРН ЗАМЕСТИТЕЛЬ (proxy)
// Предоставляет суррогатный объект, управляющий доступом к другому объекту.

class LabDoor {
    open() {
        console.log('Opening lab door')
    }

    close() {
        console.log('Closing the lab door')
    }
}

class Security {
    door:LabDoor
    password?:string

    constructor(door:LabDoor) {
        this.door = door
    }

    open(password:string) {
        if (this.authenticate(password)) {
            this.door.open()
        } else {
            console.log('Big no! It ain\'t possible.')
        }
    }

    authenticate(password:string) {
        return password === 'ecr@t'
    }

    close() {
        this.door.close()
    }
}

const door = new Security(new LabDoor())
door.open('invalid') // Big no! It ain't possible.

door.open('ecr@t') // Opening lab door
door.close() // Closing lab door