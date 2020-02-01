// const user = {
//     id : 101,
//     email : 'jack@dev.com',
//     personalnfo : {
//         name : 'Jack',
//         address : {
//             line1 : '3st',
//             line2 : '2nd',
//             city : 'LA',
//             state : 'WX'
//         }
//     }
// };

// const name = user.personalnfo.name;
// const userCity = user.personalnfo.address.city;
// console.log(name, '\n',userCity);

// var conversation = {
//     'John': {
//         1: 'Test message 1',
//         2: 'Test message 2',
//         'Reply': {
//             3: 'Test message 3',
//             4: 'Test message 4'
//         }
//     },
//     'Jack': {
//         5: 'Test message 5',
//         6: 'Test message 6'
//     }
// };

var thisObj = {
    name : 'Hanh',
    age : 19,
    school : 'TLU'
}
function printValues(thisObj) {
    for (var key in thisObj) {
        if (typeof thisObj[key] === "object") {
            printValues(thisObj[key]);   
        } else {
            console.log(thisObj[key]);    
        }
    }
}

printValues(thisObj)
// printValues(conversation);

// function printValues(obj) {
//     for (var key in obj) {
//         if (typeof obj[key] === "object") {
//             printValues(obj[key]);   
//         } else {
//             console.log(obj[key]);    
//         }
//     }
// }

// printValues(conversation);
















