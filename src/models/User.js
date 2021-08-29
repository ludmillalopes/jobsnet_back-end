const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: false, required: true }
}, {
  timestamps: true
});
module.exports = mongoose.model('User', UserSchema);