import Validator from '../classes/Validator';

describe('validateUsername method should', () => {
  test('validate and save name if it complies with the rules', () => {
    const validator = new Validator();
    validator.validateUsername('QueenArizona');
    const result = validator.name;
    expect(result).toEqual('QueenArizona');
  });
  test('return error if name contains invalid symbols', () => {
    expect(() => {
      const validator = new Validator();
      validator.validateUsername('КвинАризона');
    }).toThrow();
  });
  test('return error if name contains more than 3 digits in a row', () => {
    expect(() => {
      const validator = new Validator();
      validator.validateUsername('Queen2020Arizona');
    }).toThrow();
  });
  test('return error if name begins with digit or underline and dash symbols', () => {
    expect(() => {
      const validator = new Validator();
      validator.validateUsername('_QueenArizona');
    }).toThrow();
  });
  test('return error if name ends with digit or underline and dash symbols', () => {
    expect(() => {
      const validator = new Validator();
      validator.validateUsername('QueenArizona-');
    }).toThrow();
  });
});
