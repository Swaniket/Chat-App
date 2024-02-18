const bcrypt = require("bcrypt");

const saltRounds = process.env.BCRYPT_SALT_ROUNDS || 10;

const getHashedPassword = (password) => {
  return new Promise((resolve) => {
    resolve(bcrypt.hash(password, parseInt(saltRounds)));
  });
};

const comparePasswords = (password, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, function (err, result) {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = { getHashedPassword, comparePasswords };
