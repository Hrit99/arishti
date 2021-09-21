
const user = require('../models/user')
const { body, validationResult } = require('express-validator');

const store = (req, res, next) => {
    body('contact').isMobilePhone({
        strictMode: false,
    });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      else{
        let newUser = new user(
            {
                name: req.body.name,
                contact: req.body.contact,
                address: req.body.address,
            }
        );
        newUser.save()
        .then(response => {
            res.json({
                stored: true
            })
        })
        .catch(error => {
            res.json({
                stored: false
            })
        });
      }
}
module.exports = {
    store
}