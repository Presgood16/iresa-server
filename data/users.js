import bcrypt from "bcryptjs";

const users = [
  {
    firstName: "Admin",
    lastName: "Taiwo",
    email: "admin@iresa.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    firstName: "Taiwo",
    lastName: "User",
    email: "user@iresa.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
