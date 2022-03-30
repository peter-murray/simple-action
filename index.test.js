const index = require('./index');

describe('index tests', () => {
    it('should get version', () => {
        console.log(index.getVersion());
    });
});