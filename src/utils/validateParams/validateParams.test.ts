import { validateParams } from "./validateParams";

describe('validateParams', () => {
    it('should not throw when all parameters are valid', () => {
        expect(() =>
            validateParams('API_KEY', 'SERVICE_ID', 'TEMPLATE_ID')
        ).not.toThrow();
    });

    it('should throw when apiKey is missing', () => {
        expect(() =>
            validateParams(undefined, 'SERVICE_ID', 'TEMPLATE_ID')
        ).toThrow('Invalid or missing public key');
    });

    it('should throw when apiKey is an empty string', () => {
        expect(() =>
            validateParams('', 'SERVICE_ID', 'TEMPLATE_ID')
        ).toThrow('Invalid or missing public key');
    });

    it('should throw when serviceID is missing', () => {
        expect(() =>
            validateParams('API_KEY', undefined, 'TEMPLATE_ID')
        ).toThrow('Invalid or missing service ID');
    });

    it('should throw when serviceID is not a string', () => {
        expect(() =>
            validateParams('API_KEY', 123 as any, 'TEMPLATE_ID')
        ).toThrow('Invalid or missing service ID');
    });

    it('should throw when templateID is missing', () => {
        expect(() =>
            validateParams('API_KEY', 'SERVICE_ID', undefined)
        ).toThrow('Invalid or missing template ID');
    });

    it('should throw when templateID is empty string', () => {
        expect(() =>
            validateParams('API_KEY', 'SERVICE_ID', '')
        ).toThrow('Invalid or missing template ID');
    });
});
