
// There are two ways to declare object -

//#1 singleton object 
const tinderUser = new Object() 

// #2 non-singleton object 
const newTinderUser = {}

// Here booth show empty object beacause both are doing same thing 
console.log(tinderUser); 
console.log(newTinderUser);

// Here we are assigning value to the object 
// This is one way of assigning of objects
tinderUser.id = "123abc"
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

console.log(tinderUser);

// ******************************


// Here in object we can also do nesting see in below 
const  regularUser = {
    email : "some@gmail.com" ,
    fullname : {
        userfullname:{
            firstname : "Vidya",
            middlename : "Sagar" ,
            lastname : "Hansda"
        }
    }
}

// For accessing objects inside object 
// let say i want print out the user firstname 
console.log(regularUser.fullname.userfullname.firstname);

// ***************************

// Here we will talk about merging or combining more object 
// Let see examples 

// #1 
let obj1 = {1: "a" , 2:"b"}
let obj2 = {1: "a" , 2:"b"}

// This will create the similar problem as in array here it store objects inside objects 
let obj3 = {obj1 , obj2}
console.log(obj3);

// #2 
let obj4 = Object.assign({} , obj1 , obj2)

// #3 Here it will spread key and values similar like as in array
// Most people used this style rather than method 1 and 2
let obj5 = {...obj1 , ...obj2} // using spread operator ...
console.log(obj4);

// ******************************

// Use below syntax when the value comes from database
// You can Store Objects inside an array // This data came from database
const users = [
    {
        id: 1,
        email: "hansdavsh@gmail.com"
    },
    {
        id: 1,
        email: "mawayshi@gmail.com"
    },
    {
        id: 1,
        email: "baby@gmail.com"
    },
]

// So , to accessing an object key and value inside the array you will use below method 
console.log(users[1].email);

// **********************************

// You can also accessing key and value pairs by below method 
console.log(tinderUser);

// Here's the method for accesing key of an object // here we taken all the keys and store them to array now you can apply loop or anything 
// we will use this later on
console.log(Object.keys(tinderUser));

// Here's the method for accesing value of an object
console.log(Object.values(tinderUser));

// For checking the properties which are contain in object we also have method 
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true 'isLoggedIn' is present in the tinderUser object 

console.log(Object.entries(tinderUser)); // Used very less 

// *****************

// Understanding Objects is good because after it is helps in API 
// Destructing of objects 

const course = {
    coursename : "dumb coders",
    price : "999",
    courseInstructure : "vidya"
}

course.courseInstructure // by this method we will use this // but there is a problem for a long time that we have to use again and again 
// there is another syntax for using objects values 

// const {key} = objectname
const {} = course
// let say I want to access courseInstructure value 
const {courseInstructure} = course
console.log(courseInstructure);

// let say 'courseInstructure' name is very long for me and i want to destructure it 
// Here's the syntax for destructing
const {price: rate} = course // here i destructure or rename of key of an object course 
console.log(rate); // and here i can access with rename key 
// console.log(price); // once you destructure it you cannot access with his old name [just assumption]


// *********************
// In json there happen an API call we will understand this later on
// sytax for json 
{
    "name" = "vidya"
    "coursename" = "js in hindi"
    "price" = "free"
}

// Not always you will get an API in object format you will also get in array formate
[
    {},
    {},
    {},
]