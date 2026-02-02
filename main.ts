const isDivisibleBy = (num: number, divisor: number): boolean =>
  num % divisor === 0;

const fizzBuzz = (limit: number) => {
  for (let i = 1; i <= limit; i++) {
    const output = `${isDivisibleBy(i, 3) ? "FIZZ" : ""}${
      isDivisibleBy(i, 5) ? "BUZZ" : ""
    }`;
    console.log(output || i);
  }
};

fizzBuzz(100);
const singleLinerFizzBuzz = (limit: number) => {
  let singleLineOutput: string = "";
  for (let i = 1; i <= limit; i++) {
    const output = `${isDivisibleBy(i, 3) ? "FIZZ" : ""}${
      isDivisibleBy(i, 5) ? "BUZZ" : ""
    }`;
    singleLineOutput += output ? " (" + output + ")" : " (" + i + ")";
  }
  console.log(singleLineOutput);
};

singleLinerFizzBuzz(100);
