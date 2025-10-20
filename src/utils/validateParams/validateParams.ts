export const validateParams = (
  apiKey?: unknown,
  serviceID?: unknown,
  templateID?: unknown
) => {
  if (typeof apiKey !== 'string' || !apiKey.trim()) {
    throw new Error('Invalid or missing public key');
  }

  if (typeof serviceID !== 'string' || !serviceID.trim()) {
    throw new Error('Invalid or missing service ID');
  }

  if (typeof templateID !== 'string' || !templateID.trim()) {
    throw new Error('Invalid or missing template ID');
  }
};
