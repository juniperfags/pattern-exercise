//Importing the test case from the mocks directory
import InputJson from "./mocks/input.json";

const { inputs } = InputJson as unknown as { inputs: string[] };

//RegPattern config
const regexPattern = new RegExp(/^[a-zA-Z_][a-zA-Z0-9_]{0,}$/);

//Complexity of the algorithm --> O(n) linear
for (let index = 0; index < inputs.length; index++) {
  const input = inputs[index];

  if (!regexPattern.test(input)) {
    console.log(`The input ${input} has a sintaxis error`);
  } else {
    console.log(`The input ${input} is correct`);
  }
}
