// ternary operator
const age: number = 8;

// if (age >= 18) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

// Nullish coalescing operator
// Null and Undefined

const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({ userName }, { userName2 });

type Manush = {
  name: string;
  age: number;
  address: {
    city: "Not Sure";
    road: "No Road";
    home?: "";
  };
};

const manush1: Manush = {
  name: "Manush",
  age: 25,
  address: {
    city: "Not Sure",
    road: "No Road",
  },
};

const home = manush1?.address?.home ?? "No Home"; // default "no home"
console.log(home);
