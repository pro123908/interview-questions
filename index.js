//toString method
// console.log(typeof [1, 2, " bilal"].toString());

// //join method
// console.log([1, 2, "bilal"].join("-"));

// console.log([1, 2, 3].pop());

// console.log([1, 2, 3].push(8));

// console.log([1, 2, 3].shift());

// console.log([1, 2, 3].unshift(4, 5));

// console.log([1, 3, 5].splice(1, 2, 7, 9));

// console.log([1, 4, 5].splice(1, 1));

// console.log([1, 2, 3].slice(1));

// console.log([1, 2, 3, 4, 5].slice(1, 3));

// let obj1 = { age: 24, name: "Bilal" };
// let obj2 = { name: "Bilal", age: 24 };

// console.log(compareObjects(obj1, obj2));

function compareObjects(obj1, obj2) {
  let keys = Object.keys(obj1);

  for (i = 0; i < keys.length; i++) {
    if (!(obj1[keys[i]] === obj2[keys[i]])) {
      return false;
    }
  }

  return true;
}

let age = 21;

function checkVarScope() {
  var age = 23;

  if (true) {
    var age = 25;
    // inside block {}, the same variable will be used not outside the function
    console.log(age);
  }
  //value will be 25, because over written by if block
  console.log(age);
}

function checkLetScope() {
  let age = 23;

  if (true) {
    let age = 25;
    // inside block {}, the different variable will be used
    console.log(age);
  }
  //value will be 23, because not over written by if block
  console.log(age);
}

function checkConstScope() {
  const age = 23;

  if (true) {
    const age = 25;
    // inside block {}, the different variable will be used
    console.log(age);
  }
  //value will be 23, because not over written by if block
  console.log(age);
}

// checkVarScope();
// checkVarScope();
// checkConstScope();

const multiply = (x) => (y) => x * y;

console.log(multiply(5)(6));
