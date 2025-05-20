const express = require('express');
const identityRoutes = require('./routes/identity');

const app = express();
app.use(express.json());

app.use('/identity', identityRoutes);  // Mounts all identity routes at /identity

app.listen(3000, () => console.log('✅ Server running on http://localhost:3000'));
