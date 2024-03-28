import './App.css';
import Main from './Component/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FilteredProduct from './Component/FilteredProduct/FilteredProduct';
import SingleProduct from './Component/FilteredProduct/SingleProduct';
import { useSelector } from 'react-redux';

function App() {

  const cart = useSelector((state) => state.cart.cart)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  // console.log("cart",cart)
  // console.log("totalAmount",totalAmount)
  // console.log("totalPrice",totalPrice)
  
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/FilteredProduct/:type' element={<FilteredProduct />}></Route>
              <Route path='/FilteredProduct/:type/:id' element={<SingleProduct />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
