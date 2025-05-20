const transform = require('../src/transform');
const { expect } = require('chai');

describe('transform()', () => {
  it('should format identity data correctly', () => {
    const input = {
      userId: 'User1',
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice@example.com',
      systemSource: 'CRM',
      additionalData: { department: 'Sales' }
    };

    const result = transform(input);

    expect(result).to.have.property('id');
    expect(result.userId).to.equal('user1');
    expect(result.fullName).to.equal('Alice Smith');
    expect(result.contactEmail).to.equal('alice@example.com');
    expect(result.sourceSystem).to.equal('CRM');
    expect(result.sourceData).to.deep.equal({ department: 'Sales' });
    expect(result).to.have.property('processingTimestamp');
  });
});
