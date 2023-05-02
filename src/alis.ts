type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Moyna Pakhi",
  age: 20,
  profession: "Web Developer",
  address: "Berlin",
};

const crush2: CrushType = {
  name: "Tia Pakhi",
  profession: "Next Level web Developer",
  address: "Munich",
};

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

type CoureseNameType = string;

const courseName: CoureseNameType = "Next Level Web Development";

type OperationType = (x: number, y: number) => number;

const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
calculate(10, 20, (x, y) => x / y);
