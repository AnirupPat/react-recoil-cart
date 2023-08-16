import { selector } from "recoil";
import { cartState } from "../atoms/cartState";

export const totalCartItems = selector({
  key: "totalCartItems", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const ts = get(cartState);

    return ts.length;
  },
});
