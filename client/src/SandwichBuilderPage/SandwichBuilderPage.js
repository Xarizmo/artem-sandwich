import React from 'react';
import { useSandwich } from '../SandwichContext';
import { SandwichForm } from './SandwichForm';
import { useHistory } from 'react-router-dom';

export const SandwichBuilderPage = ({ _useSandwichHook = useSandwich }) => {
  const { setSandwich } = _useSandwichHook();
  const history = useHistory();
  
  const onSandwichChange = (sandwich) => {
    setSandwich(sandwich);
    history.push('/sandwich-preview');
  }
  
  return (
    <>
      <h1>Соберите сэндвич</h1>
      <SandwichForm onSandwichSubmit={onSandwichChange}/>
    </>
  );
};