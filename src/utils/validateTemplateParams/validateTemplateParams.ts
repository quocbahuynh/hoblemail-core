export const validateTemplateParams = (templateParams?: unknown) => {
    if (templateParams && (typeof templateParams !== 'object' || Array.isArray(templateParams))) {
        throw new Error('The template params have to be an object');
    }
};
