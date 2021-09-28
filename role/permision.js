const config = require('../config.json');
const jwt = require('jsonwebtoken');
const Role = require('./role');
const Users = require('../models/users.model')
// users hardcoded for simplicity, store in a db for production applications
const users = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
];

module.exports = {
    getAll,
    getById
};


async function getAll() {
    return Users.find()
              .then(users =>{
                const { password, ...userWithoutPassword } = users;
                return userWithoutPassword;
              })
    
}

async function getById(id) {
      return Users.findById(id).
                then(users =>{
                  const { password, ...userWithoutPassword } = users;
                  return userWithoutPassword;
                })
}