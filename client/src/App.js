import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { SandwichBuilderPage } from './SandwichBuilderPage';
import { SandwichPreviewPage } from './SandwichPreviewPage';
import { CheckoutPage } from './CheckoutPage';
import { NotFoundPage } from './NotFoundPage';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/sandwich-preview">Превью бутерброда</Link></li>
          <li><Link to="/checkout">Оплата бутерброда</Link></li>
        </ul>
      </nav>
      
      <Switch>
        <Route path="/sandwich-preview">
          <SandwichPreviewPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="/">
          <SandwichBuilderPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  )
}

export default App;
