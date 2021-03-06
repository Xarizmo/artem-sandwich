import { calculatePrice } from './calculatePrice';

describe("calculatePrice", () => {
  it("returns the sum of all the selected ingredients", () => {
    expect(calculatePrice({
      bread: "dark",
      sauces: ["mayo", "ketchup", "mustard"],
      toppings: ["bacon", "lettuce", "cheddar"]
    })).toEqual(130)
  })
})