// let car = {
//     brand: "Opel",
//     id: 123399,
//     horsePower: "300"
// };

// console.dir(car);
// console.log(car.toString());

console.log(this)

// ----------- Consrtuction  Funcrion ------------

function Person (firstName, lastName, age = 0, birthDate = "1-1-1991") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDate = new Date (birthDate);
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}


const user1 = new Person("Vanya", 'Oleksiyuk', 19, '14-05-2005');
const user2 = new Person("Lara", 'Oak', 22, '14-05-2001');

console.log(user1.getFullName());