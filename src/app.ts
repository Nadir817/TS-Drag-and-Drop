const usr = "Nadir Erkin"; // Testing comment deletion

console.log(`Hello ${usr}`); // Testing tsc --watch

interface User {
  fname: string;
  lname: string;
  role: string;
}

function greetUser(usr: User) {
  console.log(`Hello ${usr.fname} ${usr.lname}`);
}

greetUser({ fname: "Nadir", lname: "Erkin", role: "Admin" });
