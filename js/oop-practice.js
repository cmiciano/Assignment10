/*


function Cat() {
this.name = 'Nixon'
this.breed = 'Bengal'
this.color = 'Snow Mink'
}
const myCat = new Cat()
console.log(myCat.name)

*/

// Named Class
// function Cat() {}

// Anonymous Class
// const Cat = function() {}

// STEP 1
// Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax. 
// The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.
/*
function Cat() {
    this.name = "Chowder"
}

console.log(myCat.name)


const Dog = function() {
    this.name = "Pete"
}
*/

//console.log(new Dog().name)
// STEP 2
// Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
/*
function Cat() {
    this.name = "Chowder"
}

const myCat = new Cat()


const Dog = function() {
    this.name = "Pete"
}

const doggo = new Dog()

*/
// STEP 3
// Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window.

/*
function Animal() {
    this.created = function() {
        console.log("The animal has been created")
    }
}

const ani = new Animal()
ani.created()
*/

// STEP 4
// Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. 
// The message should be passed into the constructor at the moment that the Animal class is instantiated.
/*

function Animal(animalType) {
    this.type = animalType
    console.log(`The type of animal is ${this.type}`)
}

const pooh = new Animal('Bear')

*/

// STEP 5
// Start over and now create a new class using constructor syntax called Animal. Define five properties within your class 
//including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor,
// set the properties, and then pass in the actual values during the object’s instantiation.
/*
function Animal(type, breed, color, height, length) {
    this.type = type
    this.breed = breed
    this.color = color
    this.height = height
    this.length = length
}


const anim = new Animal("Bear", "Grizzly", "Brown", "600", "6")

*/
// STEP 6
// Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

/*
function Animal(type, breed, color, height, length) {
    this.type = type
    this.breed = breed
    this.color = color
    this.height = height
    this.length = length
}
const anim = new Animal("Bear", "Grizzly", "Brown", "600", "6")

for (prop in anim) {
    console.log(anim[prop])
}

*/

// STEP 7
// Now, create a public method called speak. Within the speak method you will use a conditional to
//  check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
/*
function Animal(type, breed, color, height, length) {
    this.type = type
    this.breed = breed
    this.color = color
    this.height = height
    this.length = length
    this.speak = function(type) {
        if (this.type == "dog") {
            console.log(`The ${this.color} dog is barking`)
        } else if (this.type == "cat") {
            console.log(`The ${this.color} cat is meowing`)
        } else {
            console.log(`The ${this.color} miscellaneous animal is noising`)
        }
     }
}
const doggo = new Animal("dog", "beagle", "red", "600", "6")
doggo.speak()


const catty = new Animal("cat", "poodle", "purple", "100", "3")
catty.speak()

*/
// STEP 8

// Now, convert all of your properties to private properties. Then, create a private method called checkType().
// In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a privileged method called speak that returns 
// the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

/*
function Animal(type, breed, color, height, length) {
    let _type = type
    let _breed = breed
    let _color = color
    let _height = height
    let _length = length
    let checkType = function() {
        if (_type == "dog") {
            console.log(_type)
            return _type
        }  else {
            _type = "cat"

        }
        return _type
     }

     this.speak = function() {
        let checkTypeVal = checkType()
        console.log(`The ${checkTypeVal} made noise`)
     }
}

const doggo = new Animal("dog", "beagle", "red", "400", "4")
doggo.speak()


const catty = new Animal("cat", "beagle", "purple", "100", "3")
catty.speak()

// even if the animal is not a cat, will still return the type as cat
//const bear = new Animal("bear", "grizzly", "brown", "600", "6")
//bear.speak()

*/

// STEP 9
// Create your own String method called findWords that inherits from the native String Object. 
// This method should find all instances of a specific word within a provided paragraph of text. 
// It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.


/*


text = "This is a string example"


String.prototype.findWords = function(wordToFind) {

    let exp = new RegExp(wordToFind, 'g');
    let count = this.match(exp);
    if (count == null) {
        alert(0)
    } else {
        alert(count.length)
    }
}

text.findWords("string") // one occurence
text.findWords("yuh") // not present

*/
/*
function Box(value) {
    this.value = value;
  }
  Box.prototype.getValue = function () {
    return this.value;
  };
  const box = new Box(1);
  
  // Mutate Box.prototype after an instance has already been created
  Box.prototype.getValue = function () {
    return this.value + 1;
  };
  box.getValue(); // 2
*/

//console.log(count);
//console.log(count.length);


//Using constructor syntax, you can also attach methods to the object's prototype. In this case, the displayBreed() method is
//added to the Cat object's prototype chain and is accessible once the class has been instantiated. Creating public properties is
//as simple as using the keyword this:


/*

unction Cat(breed) {
    this.breed = breed
    }
    Cat.prototype.displayBreed = function() {
    console.log(`The breed of cat is ${this.breed}.`)
    }
    const nixon = new Cat('Bengal')
    console.log(nixon.breed) // Returns: Bengal
    nixon.displayBreed() 


const Vehicle = function(make, model) {
this.make = make
this.model = model
this.miles = 0
}
Vehicle.prototype.drive = function(miles) {
this.miles += miles
console.log(`Your ${this.doors} door ${this.make} ${this.model} has driven
${this.miles} miles.`

onst Car = function(doors) {
    this.doors = doors
    }
*/

    // Car.prototype = new Vehicle('Chevy', 'Camaro'
    // const myCar = new Car(4
    // myCar.drive(2000)