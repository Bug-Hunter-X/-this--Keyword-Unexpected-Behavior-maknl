function myFunc() {
  console.log(this);
}

const boundFunc = myFunc.bind({ name: "My Object" });
boundFunc(); // this will now refer to { name: "My Object" }