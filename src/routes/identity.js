const express = require('express');
const validate = require('../validators/identityValidator');
const transform = require('../transformers/identityTransformer');

const router = express.Router();

router.post('/', (req, res) => {
  try {
    const error = validate(req.body);
    if (error) {
      return res.status(400).json({ error });
    }

    const transformedData = transform(req.body);
    return res.status(200).json(transformedData);
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
