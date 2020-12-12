import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'Admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John User',
    email: 'John@example.com',
    password: bcrypt.hashSync('rojin', 10),
  },
  {
    name: 'Jane User',
    email: 'jane@example.com',
    password: bcrypt.hashSync('hello123', 10),
  },
];
export default users;
