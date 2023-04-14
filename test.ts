// interface Person {
//     firstName: string,
//     lastName : string
// }
// let count = 0

// function getFullName(person: Person){
//     return (`Fullname is ${person.firstName} ${person.lastName}`)
//     count +=1
// }

// const programers: Person[] = [
//     {firstName: "Donald", lastName: "Trump"},
//     {firstName: "Jan", lastName: "Kowalski"},
//     {firstName: "Kazimierz", lastName: "Nowak"},
//     {firstName: "Bill", lastName: "Gates"},
//     {firstName: "Bill", lastName: "Clinton"},
// ]

// naiveSortPersons (persons: Person[]): Person[]{
//     return persons.slice().sort((first, second) =>{
//         const firstFullName = getFullName(first);
//         const secondFullName = getFullName(second);
//         return firstFullName.localeCompare(secondFullName);
//     })
// }
// const tuples: [Person, string][] = persons.map(person => [person, getFullName(person)])

class Person {
    constructor(public firstName: string, public lastName: string, public age?: number)
    {}
}

const newPerson = new Person("Andrzej", "Boczek", 22)
console.log(newPerson)