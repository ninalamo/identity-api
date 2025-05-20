const transform = require('../src/transformers/identityTransformer');
const { expect } = require('chai');

describe('transform()', () => {
  it('should format identity data correctly', () => {
    const input = {
      userId: 'User42',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      systemSource: 'HRIS',
      additionalData: { dept: 'IT' }
    };

    const result = transform(input);

    expect(result).to.have.property('id');
    expect(result.userId).to.equal('user42');
    expect(result.fullName).to.equal('Jane Doe');
    expect(result.contactEmail).to.equal('jane@example.com');
    expect(result.sourceSystem).to.equal('HRIS');
    expect(result.sourceData).to.deep.equal({ dept: 'IT' });
    expect(result).to.have.property('processingTimestamp');
  });
});
