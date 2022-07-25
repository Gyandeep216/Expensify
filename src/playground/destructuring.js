// Object Destructuring

// const person = {
//     // name: 'Andrew',
//     age: 26 ,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}.`)

// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];

const [, city, state = 'New York']= address;

console.log(`You are in ${city} ${state}`)