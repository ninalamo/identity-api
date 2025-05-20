const { v4: uuidv4 } = require('uuid');

module.exports = function transform(data) {
  return {
    id: uuidv4(),
    userId: data.userId.trim().toLowerCase(),
    fullName: `${data.firstName} ${data.lastName}`,
    contactEmail: data.email,
    sourceSystem: data.systemSource,
    sourceData: data.additionalData || {},
    processingTimestamp: new Date().toISOString()
  };
};
