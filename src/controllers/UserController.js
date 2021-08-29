const User = require('../models/User');

module.exports = {
  async register(req, res) {

    const { email, password } = req.body;

    const newUser = new User();

    newUser.email = email;
    newUser.password = password;

    newUser.save((err, savedUser) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }

      return res.status(200).send(savedUser);
    });
  },
}