import React, { useState } from 'react';
import { SandwichPreview } from './SandwichPreview';
import { SandwichForm } from './SandwichForm';

function App() {
  const [sandwich, setSandwich] = useState();
  
  if (sandwich) {
    return (
      <>
        <h1>Ваш сэндвич</h1>
        <SandwichPreview sandwich={sandwich} />
      </>
    )
  }
  
  return (
    <>
      <h1>Артём Сендвич</h1>
      <SandwichForm onSandwichCreated={setSandwich} />
    </>
  )
}

export default App;
