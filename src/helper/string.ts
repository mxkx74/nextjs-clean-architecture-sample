export const snakeToCamel = (text: string) => {
  return text.replace(/_./g, (string) => {
    return string.charAt(1).toUpperCase();
  });
};

export const camelToSnake = (text: string) => {
  return text
    .replace(/[0-9A-Z]/g, (string) => {
      return '_' + string.charAt(0).toLowerCase();
    })
    .replace(/^_/g, '');
};
