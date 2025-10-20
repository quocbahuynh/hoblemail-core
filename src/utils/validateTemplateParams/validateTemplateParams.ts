export const validateTemplateParams = (templateParams?: unknown) => {
     if (!templateParams) return;
     
    if (templateParams && (typeof templateParams !== 'object' || Array.isArray(templateParams))) {
        throw new Error('The template params have to be an object');
    }

    for (const value of Object.values(templateParams)) {
        if (typeof value === 'object' && value !== null) {
            throw new Error('The template params cannot contain nested objects');
        }
    }
};
