import React from 'react';
import { SandwichPreview } from './SandwichPreview';
import { Link, Redirect } from 'react-router-dom';
import { useSandwich } from '../SandwichContext';

export const SandwichPreviewPage = () => {
  const { sandwich } = useSandwich();
  
  if (!sandwich) {
    return (
      <Redirect to="/" />
    )
  }
  
  return (
    <>
      <h1>Ваш сэндвич:</h1>
      <SandwichPreview sandwich={sandwich} />
      <hr/>
      <Link to="/checkout">Перейти к оплате</Link>
    </>
  );
}