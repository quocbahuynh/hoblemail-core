import { validateTemplateParams } from "./validateTemplateParams";


describe('validateTemplateParams', () => {

  it('should not throw when templateParams is undefined', () => {
    expect(() => validateTemplateParams()).not.toThrow();
  });

  it('should not throw when templateParams is a flat object', () => {
    const params = { name: 'Quoc', age: 25, country: 'Vietnam' };
    expect(() => validateTemplateParams(params)).not.toThrow();
  });

  it('should not throw when templateParams is an empty object', () => {
    expect(() => validateTemplateParams({})).not.toThrow();
  });


  it('should throw when templateParams is a string', () => {
    expect(() => validateTemplateParams('invalid')).toThrow(
      'The template params have to be an object'
    );
  });

  it('should throw when templateParams is an array', () => {
    expect(() => validateTemplateParams(['a', 'b'])).toThrow(
      'The template params have to be an object'
    );
  });

  it('should throw when templateParams is a number', () => {
    expect(() => validateTemplateParams(123)).toThrow(
      'The template params have to be an object'
    );
  });

  it('should throw when templateParams is a boolean', () => {
    expect(() => validateTemplateParams(true)).toThrow(
      'The template params have to be an object'
    );
  });

  it('should throw when templateParams contains nested object', () => {
    const params = { user: { name: 'Quoc' } };
    expect(() => validateTemplateParams(params)).toThrow(
      'The template params cannot contain nested objects'
    );
  });

  it('should throw when templateParams contains array as value', () => {
    const params = { items: ['a', 'b'] };
    expect(() => validateTemplateParams(params)).toThrow(
      'The template params cannot contain nested objects'
    );
  });

  it('should not throw when templateParams is null', () => {
    expect(() => validateTemplateParams(null)).not.toThrow();
  });
});
