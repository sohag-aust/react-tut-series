const person = {
    id:19,
    name:"Shohag"
};

console.log("Name : " + person.name);
const {id, name} = person;
console.log("Name : " + name);

// now we want to save user.name value in title variable after destructuring
// so we should use alias

const {name : title} = person;
console.log("Title name : " + title);

// destructuring nested objects

const user = {
    id:6,
    name:"Ashik",
    education:{
        degree:"CSE"
    }
};

const {education : {degree} } = user;
console.log("Degree : " + degree);

// if there is a chance of missing nested properties , then the program flow will be broken
// so we need to handle it

const user1 = {
    id:6,
    name:"Ashik"
    // educatiion:{
    //     course:"CSE"
    // }
};

const {education : {course} = {} } = user1;
console.log("Course : " + course);


// array destructuring 
var numbers = [1,2,3,4,5,6];
const [a,b] = numbers;
console.log(a + "," + b);

const [,,c,,e,f] = numbers;
console.log(c,e,f);

// nested array destructuring

var numbers1 = [1,2,[3,4,5],6];
const [p,q,[,r,],z] = numbers1;
console.log(p,q,r,z);

// value swap using destructuring
var m = 1;
var n = 2;

[n,m] = [m,n]

console.log(m,n);