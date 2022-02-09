import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {
    RecoilRoot,
} from 'recoil';
import MenuPage from "./Pages/MenuPage";
import CouponPage from "./Pages/CouponPage";
import PaymentMethodPage from "./Pages/PaymentMethodPage";
import PaymentPage from "./Pages/PaymentPage";
import './App.css'
import LoadingPage from "./Components/LoadingPage";

function App() {
  return (
      <RecoilRoot>
          <Suspense fallback={<LoadingPage />}>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<MenuPage />}/>
              <Route path='/coupons' element={<CouponPage />}/>
                <Route path='/paymentMethod' element={<PaymentMethodPage />}/>
                <Route path='/payment' element={<PaymentPage />}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
