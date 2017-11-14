import { lint } from 'stylelint';
const stylelintConfig = require('../index.js');

describe('stylelint', () => {
  it('should use the stylelint config', done => {
    const code = `
body {
  background: #000000;
}
    `;

    lint({
      code,
      config: stylelintConfig,
    }).then(res => {
      expect(res.errored).toBe(false);
      done();
    });
  });

  it('should use the right priority for rule groups', done => {
    const codeWrong = `
body {
  box-sizing: border-box;

  list-style: none;

  content: 'foo';

  opacity: 0;

  font-size: 10px;

  display: none;
}
    `;

    const codeCorrect = `
body {
  display: none;

  box-sizing: border-box;

  list-style: none;

  content: 'foo';

  opacity: 0;

  font-size: 10px;
}
    `;

    lint({
      code: codeWrong,
      config: stylelintConfig,
    }).then(res => {
      expect(res.errored).toBe(true);
      done();
    });

    lint({
      code: codeCorrect,
      config: stylelintConfig,
    }).then(res => {
      expect(res.errored).toBe(false);
      done();
    });
  });

  it('should use the right order per group', done => {
    const codeRight = `
body {
  display: none;
  visibility: hidden;
  float: left;
}
    `;

    const codeWrong = `
 body {
  display: none;
  float: left;
  visibility: hidden;
 }
    `;

    lint({
      code: codeRight,
      config: stylelintConfig,
    }).then(res => {
      expect(res.errored).toBe(false);
      done();
    });

    lint({
      code: codeWrong,
      config: stylelintConfig,
    }).then(res => {
      expect(res.errored).toBe(true);
      done();
    });
  });

  it('should respect order for variables, includes and media queries', done => {
    const codeRight = `
body {
  $foo: var;

  @include foo();
  @include bar();

  display: none;

  @include respond-to('foo') {
    display: block;
  }

  @media screen {
    opacity: .5;
  }
}
    `;

    const codeWrong = `
 body {
  $foo: var;

  @include respond-to('foo') {
    display: block;
  }

  @media screen {
    opacity: .5;
  }

  display: none;

  @include foo();
  @include bar();
 }
    `;

    lint({
      code: codeRight,
      config: stylelintConfig,
    }).then(res => {
      expect(res.errored).toBe(false);
      done();
    });

    lint({
      code: codeWrong,
      config: stylelintConfig,
    }).then(res => {
      expect(res.errored).toBe(true);
      done();
    });
  });
});
