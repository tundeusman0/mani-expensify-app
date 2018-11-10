console.log('we are here !')
// const person ={
//     name: 'tunde usman',
//     age: 27,
//     location:{
//         city:'ilorin',
//         temp: 92,
//     }
// }

// const { name = 'Anonymous',age} = person;
// console.log(`${name} is ${age}.`)
// const { city, temp:temperature } = person.location;
// (city && temperature) && console.log(`it is ${temperature} in ${city}`)

// const book = {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name: 'penguin'
//     }
// }

// const {name :publisherName ='Self-Published'} = book.publisher
// console.log(publisherName);

const address = ['4 abdulazzez attah road', 'Ilorin', 'Kwara', '2405']
const [,city,state] = address

console.log(`you are in ${city} ${state}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [coffee,,cost] = item;
console.log(`A medium ${coffee} costs ${cost}`)
