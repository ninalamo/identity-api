const express = require('express');
const validate = require('./validate');
const transform = require('./transform');

const app = express();
app.use(express.json());

app.post('/identity', (req, res) => {
  const error = validate(req.body);
  if (error) return res.status(400).json({ error });

  const result = transform(req.body);
  return res.status(200).json(result);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
