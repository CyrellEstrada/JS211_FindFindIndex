let i = 0
// while (i <= 1000) {
//     // console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i <= 1000);

let person = {firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"}

// console.log(Object.keys(person))
// console.log(Object.entries(person))

const arrayOfPersons = [
{firstName: "David", lastName: "Smith", birthDate: "Sep 8, 1982", gender: "male"},
{firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"},
{firstName: "Brenda", lastName: "Johnson", birthDate: "Feb 16, 2001", gender: "female"},
{firstName: "Issac", lastName: "Mink", birthDate: "Oct 23, 2024", gender: "male"},
56
];

const forLoop = (array) => {
    for (const person of array) {
        const birthYear = new Date(person.birthDate).getFullYear();
        if (birthYear % 2 !== 0) {
            console.log(person.birthDate)
        }
    }
}

// forLoop(arrayOfPersons)

const mapNotation = arrayOfPersons.map(person => {
    console.log(`First Name: ${person.firstName}`);
    console.log(`Last Name: ${person.lastName}`);
    console.log(`Birth Date: ${person.birthDate}`);
    console.log(`Gender: ${person.birthDate}`);
    console.log(`---`);
});

// mapNotation


const checkBirthDate = (person) => {
    const birthYear = new Date(person.birthDate).getFullYear();
    return birthYear < 1990;
};

const before1990 = arrayOfPersons.filter(checkBirthDate)


// console.log(before1990)

const ifBefore1990 = (person) => {
    const birthYear = new Date(person.birthDate);
    const cutoffDate = new Date("Jan 1, 1990");
    return birthYear < cutoffDate
};

const isFemale = (person) => {
    if (person.gender === 'female'){
        return true
    } else {
        return false
    }
}

const isReptile = (person) => {
    if (person.species === "reptile") {
        return true
    } else {
        return false 
    }
}

// const beforeJan1990 = arrayOfPersons.filter(ifBefore1990)

// console.log(before1990)

//Creating find(), findIndex() from scratch

// const arrayOfPersons = [
//     {firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"},
//     {firstName: "David", lastName: "Smith", birthDate: "Sep 8, 1982", gender: "male"},
//     {firstName: "Brenda", lastName: "Johnson", birthDate: "Feb 16, 2001", gender: "female"},
//     {firstName: "Issac", lastName: "Mink", birthDate: "Oct 23, 2024", gender: "male"}
//     ];

function customFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            return array[i];
        }
    }
    return undefined;
}

// const beforeJan1990 = arrayOfPersons.customFind()

// console.log("before 1990", customFind(arrayOfPersons, ifBefore1990))
// // console.log(ifBefore1990(arrayOfPersons[0]))

// // const string = 'string'

// // console.log(string.length)
// // console.log(string[0])
// // console.log(typeof arrayOfPersons[4].toString())

// console.log("is female", customFind(arrayOfPersons, isFemale))


function customFindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            return i;
        }
    }
    return undefined;
}
// console.log('index', customFindIndex(arrayOfPersons, isFemale))
// console.log(customFind(arrayOfPersons, isReptile))

const myCoolIndex = customFindIndex(arrayOfPersons, isFemale)
console.log(myCoolIndex)

console.log('i found this with cusomtFindInxe', arrayOfPersons[myCoolIndex])