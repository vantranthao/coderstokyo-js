function menu() {
    console.log('1. Add data contact(name, phone number): ');
    console.log('2. Fix data');
    console.log('3. Delete contact');
    console.log('4. Find contact');
}
var dataContact = [{
        name: 'a',
        number: 1234
    },
    {
        name: 'b',
        number: 96423
    },
    {
        name: 'f',
        number: 1236
    },
    {
        name: 'w',
        number: 3534
    },
    {
        name: 't',
        number: 7876
    },
    {
        name: 'h',
        number: 2346
    }
];

function inputData() {
    alert('Input your new data contact, now!');
    let inputName = prompt('New name contact: ');
    let inputNumberPhone = prompt('New phone number contact: ');
    dataContact.name = inputName;
    dataContact.number = inputNumberPhone;
    alert('Added new contact!');
    alert('Done!')
    console.log(dataContact);
}

function fixData() {
    alert('Want to fix your contact data.');
    alert('Enter your name contact you want to change :))');
    let nameFix = prompt('Enter name you want to fix: ');
    let nameOrNumFix = prompt('Want to fix Name or Number?');
    dataContact.forEach((value, index) => {
        if (nameFix == value.name) {
            let newNameFix = prompt('New name : ');
            value.name = newNameFix;
        }
        
    })
}

function main() {
    // findContact();
    // deleteContact();
    // fixData();
    inputData();
    menu();
    let userChoice = prompt('Choose your option: ');
    switch (userChoice) {
        case '1':
            inputData();
            break;
        case '2':
            fixData();
            break;
        case '3':
            deleteContact();
            break;
        case '4':
            findContact();
            break;
    }
}

main();