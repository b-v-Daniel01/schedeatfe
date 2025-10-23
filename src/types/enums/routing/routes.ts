export const mainRoutesEnum = {
  DIET: "diet",
  SHOPPINGLIST: "shoppinglist",
};

export type mainroutes = (typeof mainRoutesEnum)[keyof typeof mainRoutesEnum];

export const filterEnum = {
  TIPOFILTRO: "filtertype",
  PARAMFILTRO: "filter",
  WEEKDAY: "weekday",
  DATE: "date",
} as const;

export type filterEnum = (typeof filterEnum)[keyof typeof filterEnum];
