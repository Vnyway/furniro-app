export const isFormInvalid = (err: Record<string, any>): boolean => {
  return Object.keys(err).length > 0;
};
