import React from 'react';
import { BREAD, SAUCES, TOPPINGS } from './sandwichData';

export const SandwichPreview = ({ sandwich }) => {
  return (
    <>
      <p>Хлеб: {BREAD[sandwich.bread].name}</p>
      <p>Соусы: {sandwich.sauces.map(s => SAUCES[s].name).join(", ")}</p>
      <p>Топпинги: {sandwich.toppings.map(t => TOPPINGS[t].name).join(", ")}</p>
    </>
  );
}