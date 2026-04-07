#!/usr/bin/env node
const bcrypt = require('bcrypt');
const db = require('../config/config.js');

// Usage: node scripts/setPassword.js <email> <newPassword>
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/setPassword.js <email> <newPassword>');
  process.exit(1);
}

const [email, newPassword] = args;
const saltRounds = 10;

bcrypt.hash(newPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    process.exit(1);
  }

  const sql = 'UPDATE tai_khoan SET mat_khau = ? WHERE email = ?';
  db.query(sql, [hash, email], (error, result) => {
    if (error) {
      console.error('Database error:', error);
      process.exit(1);
    }

    console.log(`Password updated for ${email}. Affected rows: ${result.affectedRows}`);
    process.exit(0);
  });
});
