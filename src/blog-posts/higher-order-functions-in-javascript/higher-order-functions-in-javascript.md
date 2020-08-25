---
path: '/blog/higher-order-functions-in-javascript'
date: '2020-08-25'
title: 'Higher-Order Functions in JavaScript'
excerpt: 'If you have been programming in JavaScript for sometimes, chances are you might have used higher order functions somewhere in your code without even realizing it.'
tags: ['JavaScript']
---

If you have been programming in JavaScript for sometimes, chances are you might have used _Higher-Order Functions_ somewhere in your code without even realizing it. Though it sounds like a complex JavaScript lingo, it really isn't that difficult to understand.

---

### First-Class Functions

To understand what _Higher-Order Functions_ is, let's try to take a look at what it's not. In JavaScript, regular functions are often said to be a _First-Class Functions_. _First-Class Functions_ is a concept shared across programming languages when functions in a particular language are represented and treated just like any other variables. Be it primitive or reference type variable.

##### JavaScript function as an object

In JavaScript, functions are stored as if each of them is an object. They are indeed just a bunch of `Function` class instances. Here are some little experiments to proof that:

```javascript
function addTwoNumbers(a, b) {
  return a + b;
}

const a = 1;
const b = 2;

const c = addTwoNumbers(a, b);
console.log(c); // prints 3
```

To make the code somewhat shorter, some people might also consider doing this:

```javascript
console.log(addTwoNumbers(a, b)); // prints 3
```

But, what if we try console logging the function without calling it? Here is what you'll obtain:

```javascript
console.log(addTwoNumbers); // prints [Function: addTwoNumbers]
```

What we can infer from the generated output above is that `addTwoNumbers` is nothing but an instance of the JavaScript `Function` class, and hence an object.

**RECALL** - <u>In _object-oriented programming_, object is nothing fancy but an instance of a class, whereas class is a blueprint that you can use multiple times to instantiate an object.</u>

##### Function instantiation

We have taken a look at an example which shows that function in JavaScript is basically just an instance of the `Function` class. To make it more convincing, here I will show how one can instantiate a function using the `new` operator just like any other objects in JavaScript.

```javascript
// Object instantiation in JavaScript might look something like this.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const welvin = new Person('Welvin Bun', 19);

console.log(welvin); // prints Person { name: 'Welvin Bun', age: 19 }
```

Like what we have seen before, function is just an instance of the built-in `Function` class. With that being said, we can actually instantiate a function directly using the `new` operator and `Function` class constructor just like in the example above where we use the `new` operator and `Person` class constructor to instantiate a `Person` object.

```javascript
const functionBody = 'return a + b';
const addTwoNumbers = new Function('a', 'b', functionBody);

console.log(addTwoNumbers(1, 2)); // prints 3
```

**NOTE** - <u>Please be noted that this way of creating a function might not align with the best practice out there. I rarely if never see someone using this approach before. You should use the `function` keyword or the infamous ES6 arrow function instead.</u>

##### Passing function around

As we've already seen in the previous examples, JavaScript functions are internally treated as objects. Like any other objects, that means we can store the pointer reference of a JavaScript `Function` object to a variable like in the code example below.

```javascript
const addTwoNumbers = function (a, b) {
  return a + b;
};

console.log(addTwoNumbers(1, 2)); // prints 3
```

Additionally, we can also declare a second variable and make it pointing to the same reference as what `addTwoNumbers` variable is pointing to.

```javascript
const addTwoNumbersCopy = addTwoNumbers;

console.log(addTwoNumbersCopy(27, 12)); // prints 39
```

Since `addTwoNumbers` and `addTwoNumbersCopy` share the same reference, modifying any member variable or property of one will directly affect the other.

```javascript
console.log(addTwoNumbers.memberVariable); // prints undefined

addTwoNumbersCopy.memberVariable = 1;

console.log(addTwoNumbers.memberVariable); // prints 1
```

##### Function as an argument to another function

Just like any other types of variable in JavaScript, those of object type can be dinamically passed as arguments to another function call. Knowing that JavaScript function is nothing but an object, that means we can actually feed it into another function as one of the arguments.

```javascript
function printTheProductOfTwoNumbers(a, b, anotherFunction) {
  console.log(a * b);
  anotherFunction();
}

function printHello() {
  console.log('Hello!');
}

printTheProductOfTwoNumbers(5, 5, printHello);
// prints 25
// prints Hello!
```

**TRIVIA** - <u>The term _First-Class Functions_ was first coined by a British Computer Scientist, [Christopher Strachey](https://en.wikipedia.org/wiki/Christopher_Strachey) in 1960s because it behaves like the first-class citizens of programming.</u>

### Higher-Order Functions

Now that we all know how JavaScript functions are represented internally and what _First-Class Functions_ really is. Let's take a deeper look at the main point of this post.

_Higher-Order Function_ is a term shared widely across the field of Mathematics and Computer Science, especially when we are talking about the _Functional Programming_ paradigm. It is basically just a regular function with some more specific features that makes it special. A function can be classified as _Higher-Order Functions_ if at least one of the following condition applies:

- The function takes one or more functions as its input argument(s).
- The function returns another function as its output.

Let's take a look at some examples to get a better understanding.

##### Higher-Order Function in Mathematics

Let's begin with a function **f(x) = x + 1, x ∈ Z**. In your opinion, do you think the function **f(x)** is a _Higher-Order Function_?

The answer is **no, it's not**. Recall the two properties that a _Higher-Order Function_ must have (at least one). Does the function **f(x)** take one or more functions as its input argument(s)? Well it's well-defined that **f(x)** takes one scalar integer argument named **x**. Since **x** as the only input of **f(x)** is not a function, hence **f(x)** does not comply with the first rule that we stated before.

The second question to ask is, does the function **f(x)** return another function as its output? Again, it can be seen clearly that what **f(x)** does is just adding a scalar value of **1** to its input **x**, and returning that addition value as the output. Therefore, **f(x)** returns another scalar value and not a function, so neither the first nor the second condition is met.

With that being said, we can conclude that **f(x)** does not satisfy any of the requirements of a _Higher-Order Function_, and hence it's not of its kind.

Let's move on to our second function **D(g(x)) = d(g(x))/dx, g(x) is differentiable for any x, x ∈ R**. Is **D(g(x))** a _Higher-Order Function_?

Indeed **it is**. Using the same logic that we used to analyse our first function **f(x)**, it's not hard to show that **D(g(x))** is a **Higher-Order Function**. First, it accepts another function **g(x)** as its input argument. In addition to that, it also returns another function **g'(x)** as its output where **g'(x)** is the first derivative of **g(x)**.

**NOTE** - <u>**D(g(x))** is a quiet common operator in mathematics called the [Differential operator](https://en.wikipedia.org/wiki/Differential_operator). The semantic of it is basically it maps any differentiable functions to their corresponding first-order derivatives.</u>

##### Higher-Order Functions in JavaScript

Now that you are familiar with some distinguishable features of _Higher-Order Function_, let's see some of the built-in JavaScript _Higher-Order Functions_ and how they are usually being used.

###### Array.prototype.map

Let's say you have an array of numbers representing the heights (in cm) of a group of people whose heights you measured before. After getting 5 data entries, you suddenly realized that the scale which was used for the measurement processes is off by **5 cm**. The goal is to add **5** centimeters to each data entry in the array. One obvious solution would be:

```javascript
const heights = [170, 168, 185, 169, 168];
const ERROR = 5;

const heightsFixed = [];

for (const height of heights) {
  heightsFixed.push(height + ERROR);
}

console.log(heightsFixed); // prints [ 175, 173, 190, 174, 173 ]
```

Using `Array.prototype.map` method, you can achieve the same goal with a way more efficient and readable code. `Array.prototype.map` takes a function of 3 parameters (`(element, index, array)`) this input function is commonly called as callback function. It then iterates through each element in the array, feed the corresponding `(element, index, array)` to the callback function, takes the return value of the callback function and create a new array based on these return values. Let's take a look at the code example to get the hang of what I just explained.

```javascript
const heights = [170, 168, 185, 169, 168];
const ERROR = 5;
function fixHeight(element, index, array) {
  return element + ERROR;
}

const heightsFixed = heights.map(fixHeight);

console.log(heightsFixed); // prints [ 175, 173, 190, 174, 173 ]
```

Or even simpler:

```javascript
const heights = [170, 168, 185, 169, 168];
const ERROR = 5;

const heightsFixed = heights.map(function (element, index, array) {
  return element + ERROR;
});

console.log(heightsFixed); // prints [ 175, 173, 190, 174, 173 ]
```

**RECALL** - <u>The above implementations are made possible due to the object-like behaviour of functions in JavaScript. With that, we are able to pass the callback function around as an argument to another function.</u>

###### Array.prototype.filter

Let's say you have an array of object representing some informations of a particular student. Each object in the array is an instance of the `Student` class with the following class definition:

```javascript
class Student {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender; // Assume gender can only take a value of "M" or "F"
  }
}
```

Your task is, given an array named `students` consists of multiple `Student` object, separate the entries into two different arrays `femaleStudents` and `maleStudents`, each consists only of female and male students respectively. The trivial solution would look something like this:

```javascript
const student1 = new Student('Welvin Bun', 19, 'M');
const student2 = new Student('Edward Suryajaya', 19, 'M');
const student3 = new Student('Michael Hosanen', 19, 'M');
const student4 = new Student('Jesstlyn Clarissa', 19, 'F');

const students = [student1, student2, student3, student4];

const maleStudents = [];
const femaleStudents = [];

for (const student of students) {
  if (student.gender === 'F') {
    femaleStudents.push(student);
  } else {
    maleStudents.push(student);
  }
}

console.log(maleStudents);
// prints [ Student { name: 'Welvin Bun', age: 19, gender: 'M' },
// Student { name: 'Edward Suryajaya', age: 19, gender: 'M' },
// Student { name: 'Michael Hosanen', age: 19, gender: 'M' } ]

console.log(femaleStudents); // prints [ Student { name: 'Jesstlyn Clarissa', age: 19, gender: 'F' } ]
```

The `Array.prototype.filter` takes the same input format as its counterpart, `Array.prototype.map`. The difference is `Array.prototype.filter` will treat the output value of the given callback function as a **boolean** value. According to this boolean value, it will only include any element whose callback result is `True` to the new array.

```javascript
const maleStudents = students.filter(function (element, index, array) {
  return element.gender === 'M';
});

// Using ES6 arrow function style
const femaleStudents = students.filter(
  (element, index, array) => element.gender === 'F'
);

console.log(maleStudents);
// prints [ Student { name: 'Welvin Bun', age: 19, gender: 'M' },
// Student { name: 'Edward Suryajaya', age: 19, gender: 'M' },
// Student { name: 'Michael Hosanen', age: 19, gender: 'M' } ]

console.log(femaleStudents); // prints [ Student { name: 'Jesstlyn Clarissa', age: 19, gender: 'F' } ]
```

### Conclusion

In conclusion, we have covered some fundamental concepts of _First-Class Functions_. You have seen some examples showing that JavaScript function is nothing but an instance of the built-in `Function` class.

We also have taken 2 different perspectives when discussing about the idea behind _Higher-Order Functions_, from both Mathematics and Computer Science point of views. They basically refer to the same concept with slightly different implementations.

Finally, we are all now must be familiar with some built-in JavaScript _Higher-Order Functions_ and their use cases through the code examples provided.

That's it, I hope you enjoy reading my post and thanks for coming by!
