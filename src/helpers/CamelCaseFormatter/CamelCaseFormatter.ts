export const camelCaseFormatter = (obj: object) => {
  return Object.fromEntries(
    Object.entries(obj).map(n => [n[0].replace(/_+(.)/g, (m, g1) => g1.toUpperCase()), n[1]])
  );
};
