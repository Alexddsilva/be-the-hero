const generateUniqueId = require('../../src/utils/generateUniqueId');
describe('Generat Unique ID', () => {
  it('Should Generate an unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
