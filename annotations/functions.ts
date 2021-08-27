const add = (a: number, b: number): number => {
  return a + b;
};

// if we wanna beneficiate the type inference for return value,
// we need to have wrtie the word "return otherwise it gives an error or void"
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void meaning we are returning nothing or it can be undefinled or null
const logger = (message: string): void => {
  console.log(message);
};

// Never meaning we are going to never reach the end of this function
// Never expect a function to return anything ever
const throwError = (message: string): never => {
  throw new Error(message);
};

// Even if, there is error catch, we eventually expect to return soemthing
// then still use Type annotation
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// Destructuring
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
