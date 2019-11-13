// What is Scope?
// Scope in programming refers to how accessible (or protected) a variable, function or object is. Accessible in the sense that only certain parts of the program can access such objects. This sort of protection makes it easier to determine the parts of the program that interacts with and affect such objects.

// Let’s take a real-life scenario for example.

// A company’s staffs all work together towards the company’s development. Every staff has departments where they work which could include the IT department, administrative department, financial department, customer service department and so on.

// The members of the technical department would not be able to participate in the activities of the finance department. The customer service team would not be able to engage in the IT department. But, all these departments could share common access to the company’s front door, the company’s attendance sheet and so on with respect to the given privileges.

// We could then say that,

// The activities of these departments are scoped.
// Activities in a department can only be performed by group members.
// Common privileges are not scoped, thereby given access to everyone in the company.
// If something gets missing in the company or a fault is discovered, it would be easy to determine the people at fault, don’t you think? If there is negative customer feedback against reception, no one would question the members of the financial department, right?
// This is one of the benefits of scoping.

// Scope in Javascript
// Just as several languages maintain scopes for objects, they also have their methods of doing so.
// Javascript scopes are of two major types which are;

// Global Scope
// Local Scope
// Other types include;

// Block Scope
// Lexical Scope
// Global Scope
// This scope which is the default defines all variables as universal such that every part of the program can access them.
// Let’s take an example;

//script.js
var name = 'soshace';
 
function assignName(parameter) {
    name = parameter;
}
 
assignName('javascript');
 
console.log(name);
 
// the expected result
// javascript

// Variable ‘name’ can be accessed anywhere in this file and can also be altered because it is available in the global space.
// We also have a function, assignName. After executing this program, ‘javascript’ is logged to the console.
// We note that this function was able to alter the variable because it is in the global scope.

// This can be related to our scenario above. The global scope here refers to the general privileges which are given to everyone.
// Here, if the value of name changes after including so many functions in this program, it would be hard to tell which particular function altered it.

// This brings us to Local Scope.

// Local Scope
// This scope is created with functions. They house variables thereby making it impossible for outside parts of the function to access them.
// For example, let’s say we have a function in our program above which has its own variables;

// script.js
//new line
"use strict";

var name = 'soshace';

// new function start
function house() {
var topic = "scoping";
}
// new function end

function assignName(parameter) {
name = parameter;
topic = parameter;
}
house(); // executing the house function
assignName('javascript');
topic = 'local';
console.log(name);
console.log(topic);
// the expected result
// javascript
// topic is not defined

// Two things to note

// "use strict"; – This, at the top of the program, is a literal expression that indicates that all codes in this program should be executed in strict mode. With this activated, you can’t use any variable that hasn’t been defined. If this wasn’t activated, the topic variable can still be used without an earlier definition.
// topic is not defined – Even though the house function was executed before the assignName function, the topic variable remains inaccessible because it has been locally scoped to the house function. Hence, neither the global environment nor other functions can have access to house‘s variables.

// Block Scope
// This scope is defined by curly braces – { and }. These braces can be found in functions, if statements, switch statements, loop statements and so on.
// Generally, these braces make up a block scope.
// The variables defined and declared here are only accessible within the scope.

// NOTE: Local scope is defined by functions while block scope is defined by curly braces.

// The difference between global, local and block scope can be explained with the ‘var’, ‘let’ and ‘const’ keyword.

// Before we continue with Block Scope, let’s get a better understanding of these keywords.

// The var keyword has been with javascript for a while but let and const came in the launch of ES2015 (ES6) Javascript.
// Variables declared with var are usually hoisted. What this means is that regardless of the position that the variable is declared, it is lifted to the top of the scope.
// A practical example;
// Remember that when a variable is not declared, any reference to it would be a “Reference Error”,

// script.js
"use strict";
blogName = "Soshace";
console.log(blogName);
// Expected result : "ReferenceError: blogName is not defined";

// What if the variable was declared with ‘var’ after the definition?

// script.js
"use strict";
blogName = "Soshace";
var blogName;
console.log(blogName);
// Expected result : "Soshace";

// script.js
"use strict";
blogName = "Soshace";
var blogName;
console.log(blogName);
// Expected result : "Soshace";

// The variable ‘blogName’ was hoisted to the top of the scope which means it came before the declaration ‘blogName = “Soshace”‘. The scope here is global but the same rules apply for local scope such that the variable is lifted to the top of the scope.

// With ‘let’ and ‘const’, we can prevent hoisting of variables. The previous code implemented with let would be;


// script.js
"use strict";
blogName = "Soshace";
let blogName;
console.log(blogName);
// Expected result : "ReferenceError: Cannot access 'blogName'
// before initialization";


// And there goes the Reference error.
// The difference between let and const is that variables declared with the former can be later changed but the latter variables must be constant. Any attempt to change them would result in an error.

// Back to Block Scope.

// As we have seen now, let and const are the only declaration keywords that can ensure block scope because var would hoist it’s variables to the top of the local or global scope.

// Lexical Scope
// This scope allows variables declared inside functions to be accessible by nested functions of that same function or accessible by local functions of the global scope.

// When variables are referenced in a function, the JavaScript compiler searches for the variable from the function itself to the outer parts of the function until it gets to the global scope. If the variable isn’t found, then there’d be a reference worry error.

// Using the same company scenario, a lexical scope can be likened to a case where the Financial Department has sub-departments. Those sub-departments would still have access to the privileges of the department itself.

// Example code,


// script.js
var name = 'game'
 
 
function alterGlobalVar(varName) {
    varName = 'altered global var';
    var localVar = 'local';
 
    return function() {
        localVar = 'altered local var';
        console.log(varName);
        console.log(localVar);
    }
 
}
 
alterGlobalVar(name)();
// Expected Results
// altered global var
// altered local var


// From this program above, we can see that alterGlobalVar is lexically scoped to the global scope and the anonymous function in alterGlobalVar is lexically scoped to it thereby given it access to its parent’s variables.

// These are the scopes available in the current version of Javascript. I hope with these, you have gotten a better understanding of scopes and how to work professionally with variables.