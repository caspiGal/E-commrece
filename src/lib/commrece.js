import Commrece from "@chec/commerce.js";

export const commerce = new Commrece(
  process.env.REACT_APP_CHECK_PUBLIC_KEY,
  true
);
