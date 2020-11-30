import React, { useState } from 'react';
import { calculatePrice } from '../utils/calculatePrice';
import { useCollection } from '../utils/useCollection';

export function SandwichForm({ onSandwichCreated }) {
  const [bread, setBread] = useState("dark");
  const [sauces, addSauce, removeSauce] = useCollection();
  const [toppings, addTopping, removeTopping] = useCollection();
  
  const price = calculatePrice({ bread, sauces, toppings });
  
  const updateBread = (event) => {
    setBread(event.target.value)
  }
  
  const updateSauces = (event) => {
    const {value, checked} = event.target;
    
    if (checked) {
      addSauce(value)
    } else {
      removeSauce(value)
    }
  }
  
  const updateToppings = (event) => {
    const {value, checked} = event.target;
    
    if (checked) {
      addTopping(value)
    } else {
      removeTopping(value)
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSandwichCreated({
      bread, sauces, toppings
    })
    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Выберите хлеб:</legend>
        <label>
          <input type="radio" value="dark" name="bread" onChange={updateBread} checked={bread === "dark"} />
          тёмный
        </label>
        <label>
          <input type="radio" value="white" name="bread" onChange={updateBread} checked={bread === "white"} />
          белый
        </label>
      </fieldset>
      <fieldset>
        <legend>Выберите соусы:</legend>
        <label>
          <input type="checkbox" value="mayo" onChange={updateSauces} checked={sauces.includes("mayo")} />
          майонез
        </label>
        <label>
          <input type="checkbox" value="ketchup" onChange={updateSauces} checked={sauces.includes("ketchup")} />
          кетчуп
        </label>
        <label>
          <input type="checkbox" value="mustard" onChange={updateSauces} checked={sauces.includes("mustard")} />
          горчица
        </label>
      </fieldset>
      <fieldset>
        <legend>Выберите топпинги:</legend>
        <label>
          <input type="checkbox" value="bacon" onChange={updateToppings} checked={toppings.includes("bacon")} />
          бекон
        </label>
        <label>
          <input type="checkbox" value="lettuce" onChange={updateToppings} checked={toppings.includes("lettuce")} />
          салат
        </label>
        <label>
          <input type="checkbox" value="cheddar" onChange={updateToppings} checked={toppings.includes("cheddar")} />
          сыр чеддер
        </label>
      </fieldset>
      <button>Готово {price}</button>
    </form>
  );
}
