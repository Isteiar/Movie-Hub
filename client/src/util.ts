export const getYearFromString = (input: string) => {
  return new Date(input).getFullYear();
};

export const getFormatedDate = (input: string) => {
  return new Date(input).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const getTimeFromString = (input: number) => {
  return `${Math.floor(input / 60)}hrs ${input % 60}min`;
};
