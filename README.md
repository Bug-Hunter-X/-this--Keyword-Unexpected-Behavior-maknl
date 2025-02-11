# JavaScript 'this' Keyword Bug

This repository demonstrates a common JavaScript bug related to the unexpected behavior of the `this` keyword.

## Bug Description

The `this` keyword in JavaScript refers to the owner object of the function. However, the exact value of `this` depends on how the function is invoked.

In the provided example, `myFunc()` is called without any context. In non-strict mode, this leads to `this` referencing the global object (window in browsers). In strict mode, `this` would be `undefined`.

## Bug Solution

To fix this, we need to explicitly set the context of `this` using methods like `bind`, `call`, or `apply`.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and run the code in your browser's console or Node.js.
3. Observe the unexpected output of `this`.
4. Then run `bugSolution.js`, see how the use of `bind` solve the problem.