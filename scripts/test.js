let fullMath = ["1+2-3"];

let stringMath = fullMath.toString();

let Result = Function("return " + stringMath)();

console.log(Result);
