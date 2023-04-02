export const getDay = (dt: number) => {
  const date = new Date(dt * 1000);
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  });
  return formatter.format(date);
};

const formatHours = (date: Date) => {
  const modded = date.getHours() % 12;
  return modded === 0 ? 12 : modded;
};
const formatMinutes = (date: Date) => {
  const converted = date.getMinutes().toString();
  return converted.length === 1 ? `0${converted}` : converted;
};
// for some reason using the intl formatter from above causes the nextjs "server
// rendered different than client" error because one puts in a weird non-breaking
// space character
export const getTime = (dt: number) => {
  const date = new Date(dt * 1000);
  return `${formatHours(date)}:${formatMinutes(date)} ${
    date.getHours() > 12 ? "PM" : "AM"
  }`;
};

export const toTitleCase = (str: string) => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
