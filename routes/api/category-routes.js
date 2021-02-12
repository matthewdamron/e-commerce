const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product],
    order: [['id', 'ASC']]
  })
  .then(results => {
    res.json(results);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
  .then(results => {
    if (!results) {
      res.status(404).json({
        message: 'No category found with this id'
      });
      return;
    }
    res.json(results);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  // expects { category_name: 'Shirts' }
  Category.create({
    category_name: req.body.category_name
  })
  .then(results => {
    res.json(results);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(results => {
    if (results[0] === 0) {
      res.status(404).json({
        message1: 'No category found with this id',
        message2: 'Or category name already exists for this id'
      });
      return;
    }
    res.json(results);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(results => {
    if (!results) {
      res.status(404).json({
        message: 'No category found with this id'
      });
      return;
    }
    res.json(results);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;