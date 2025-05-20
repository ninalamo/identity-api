

module.exports = function validate(data) {
  const required = ['userId', 'firstName', 'lastName', 'email', 'systemSource'];
  for (const field of required) {
    if (!data[field]) return `Missing required field: ${field}`;
  }
  return null;
};
