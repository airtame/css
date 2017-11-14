import { lint } from 'stylelint';

describe('stylelint', () => {
  it('should validate the .stylelint rules', done => {
    const code = `
body {
  background: #000000;
}
    `;

    lint({
      code,
      configFile: './stylelint.config.json',
    })
      .then(res => {
        expect(res.errored).toBe(false);
        done();
      })
      .catch(err => {
        console.log(err.stack);
        done();
      });
  });
});
