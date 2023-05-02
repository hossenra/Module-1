const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("Searching...");
  }
};
searchName(null);

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = speed;
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
  }
};

getMyCarSpeed(10);
getMyCarSpeed("10 kmh"); //

function throwError(message: string): never {
  throw new Error(message);
}

throwError("Error done");
