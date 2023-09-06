/* 
In JavaScript, an object is an unordered collection of key-value pairs.
Each key-value pair is called a property.
The key of a property can be a string.
And the value of a property can be any
value, e.g., a string, a number, an array, and even a function.

Example:

var Person = {
    firstName : 'Adam',
    LastName : 'Joseph',
    age : 25,
    ownsCar : false
};

*/

var Person = {
    firstName : 'Adam',
    LastName : 'Joseph',
    age : 25,
    ownsCar : false
}

console.log(Person)

// DOT NOTATION 

console.log(Person.ownsCar)

//BRACKET NOTATION inside ['    ']

Person['age']

var cap = 
{
    firstName : 'Steve',
    lastName : 'Rogers',
    age : 102,

    friends : ['Bucky Barns' , 'Bruce Banner' , 'Tony Stark'],

    isAvenger : true,

    age: 102,
    
    address : 
    {
        state: 'New York',
        city: 
        {
            name : 'Brooklyn',
            pincode: 123456
        }
    }
}

//ACCESSING VALUES

 console.log(`Cap friends are`+cap.friends)

 console.log(cap.address.city.name)

 cap.isAvenger = false
 console.log(cap)

 //Updating / Adding new property called movies, key and Values

 cap.movies = ['Age of ultron' , 'civil war' , 'first avenger']

 console.log(cap)

 //DELETE will delete the property specified

 var d = delete cap.age 

 console.log(` Property Deleted`+d) // This will return true

 console.log(cap)