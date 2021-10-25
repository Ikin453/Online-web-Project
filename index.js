//Object
let student = {name:'alex', age:'18',gander:'male'};
console.log(typeof student);
console.log(student.name);
let userPick = 'name';
console.log(student[userPick]);

//Array
let students = [1,2,45,6,7,8];
console.log(students);
students.push(89);
console.log(students.pop());
students.sort((a,b) => a - b);

console.log(students);
// students.push(1)
// console.log(studentsAge[4]);
// console.log(studentsAge[4].age);

//Function
function sayHi(thisStudent) {
    console.log('hi '+thisStudent.name);
}

//打印形状
console("请输入你的符号以及顺序")


sayHi(student);
sayHi(student);
