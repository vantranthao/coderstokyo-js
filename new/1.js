function removeProp(prop) {

    var student = {
        name: "David Rayy",
        class: "VI",
        rollno: 12
    }
    // chỉ viết code ở dưới dòng này.
    if (prop == 'name') delete student.name;
    
    if (prop == 'class') delete student.class;
    if (prop == 'rollno') delete student.rollno;
    console.log(student)
}

var student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12
}
console.log(student);

removeProp(name)