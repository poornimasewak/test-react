const db = require("../models");

// console.log(db.Student);

module.exports = {
    findAll: function (req, res) {
        db.Student
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body);

        db.Student
            .create({ "firstName": "test1", "lastname": "test2" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};




