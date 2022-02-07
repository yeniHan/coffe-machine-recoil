import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {
    RecoilRoot,
} from 'recoil';
import MenuPage from "./Pages/MenuPage";
import PaymentPage from "./Pages/PaymentPage";
import './App.css'

function App() {
  return (
      <RecoilRoot>
          <Suspense fallback={<h1>Loading..</h1>}>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<MenuPage />}/>
              <Route path='/coupons' element={<MenuPage />}/>
              <Route path='/payment' element={<PaymentPage />}/>
              <Route path='/onPayment' element={<PaymentPage />}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
