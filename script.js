let name_ = "username";
let NAME_ = "N";

// if (name_ == NAME_) {
//     alert("Names are equal!!!")
// } else if (name_ == "") {
//     alert("Enter your name!")
// } else {
//     alert("Not equal!")
// }

// Тернарний оператор (умова) ? якщо true : якщо false
// name_ == NAME_ ? alert("Names are equal!!!") : alert("Not equal!");

let userObj = {
    _name_: name_ ? name_ : "Anonimous",
    age : 20
}

console.log(userObj._name_)