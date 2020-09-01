const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
  Employee.find()
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const email = req.body.email;
  const company = req.body.company;

  const newEmployee = new Employee({
    name,
    address,
    email,
    company,
  });

  newEmployee.save()
  .then(() => res.json(newEmployee._id))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/').get((req, res) => {
//   Employee.find()
//     .then(employee => res.json(employee))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;