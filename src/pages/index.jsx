import { createBrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './HomePage';
import { CartPage } from './CartPage';

export const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />

    <Route path="cart" element={<CartPage />} />
  </Routes>
);
