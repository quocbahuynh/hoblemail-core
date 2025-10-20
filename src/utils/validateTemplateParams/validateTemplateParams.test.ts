import { validateTemplateParams } from "./validateTemplateParams";

describe('validateTemplateParams', () => {
  it('should not throw when templateParams is undefined', () => {
    expect(() => validateTemplateParams()).not.toThrow();
  });

  it('should not throw when templateParams is a valid object', () => {
    expect(() => validateTemplateParams({ name: 'Quoc' })).not.toThrow();
  });

   it('should not throw when templateParams has multiple keys', () => {
    const params = { name: 'Quoc', age: 25, country: 'Vietnam' };
    expect(() => validateTemplateParams(params)).not.toThrow();
  });


  it('should throw when templateParams is a string', () => {
    expect(() => validateTemplateParams('invalid')).toThrow(
      'The template params have to be an object'
    );
  });

  it('should throw when templateParams is a number', () => {
    expect(() => validateTemplateParams(123)).toThrow(
      'The template params have to be an object'
    );
  });

  it('should throw when templateParams is an array', () => {
    expect(() => validateTemplateParams(['a', 'b'])).toThrow(
      'The template params have to be an object'
    );
  });

  it('should throw when templateParams is null', () => {
    expect(() => validateTemplateParams(null)).not.toThrow();
  });
});