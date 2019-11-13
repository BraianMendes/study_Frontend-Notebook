// A higher-order function is a function that either accepts functions as parameters, returns a function, or both!
// We call the functions that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.

// When we pass a function in as an argument to another function, we don’t invoke it.
// Invoking the function would evaluate to the return value of that function call. 
// With callbacks, we pass in the function itself by typing the function name without the parentheses.

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10);