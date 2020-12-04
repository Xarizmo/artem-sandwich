import React from 'react';
import { render } from '@testing-library/react';
import { SandwichPreview } from './SandwichPreview';

describe("SandwichPreview", () => {
  it("renders correctly", () => {
    const { getByText } = render(<SandwichPreview sandwich={{
      bread: "white",
      sauces: ["mayo", "ketchup"],
      toppings: ["bacon", "lettuce"]
    }} />)
    
    expect(getByText("Хлеб: белый")).toBeInTheDocument()
    expect(getByText("Соусы: майонез, кетчуп")).toBeInTheDocument()
    expect(getByText("Топпинги: бекон, салат")).toBeInTheDocument()
  })
})