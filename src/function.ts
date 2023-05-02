// normal function
// default parameter

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(30, 50);

// spreed operator

const myFriends = ["Rahim", "Karim", "Tetu"];
const newFriends = ["Monika", "Eleas", "Lima"];
const myBestFriend = {
  fullName: "Sazzad Hossain",
  age: 31,
};

const [bestfriend] = myFriends;
const { fullName: myFullName } = myBestFriend;

myFriends.push(...newFriends);
console.log(myFullName);

// rest operator

const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends("Sazzad", "Karim", "Kawser", "Nasem", "Jamal", "Nibir");

// array and object destructuring

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 3, 5];

const newArray = arr.map((elem: number) => elem * elem);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Razibul",
  balance: 5,
  addBalance(money: number) {
    console.log(`My New Balance is ${this.balance + money}`);
  },
};
