export const dateFormatter = (date: string) => {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date ? new Date(date) : new Date());
  return;
};
