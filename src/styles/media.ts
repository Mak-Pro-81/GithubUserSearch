export const breakpoints = {
  369: 369,
  499: 499,
  599: 599,
  767: 767,
  899: 899,
  992: 992,
  1199: 1199,
  1299: 1299,
  1399: 1399,
  1499: 1499,
  1600: 1600,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  // return (style: TemplateStringsArray | string) =>
  //   `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
  return `@media only screen and (max-width: ${breakpoints[key]}px)`;
};
