import './App.css';
import Main from './Component/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FilteredProduct from './Component/FilteredProduct/FilteredProduct';
import SingleProduct from './Component/FilteredProduct/SingleProduct';
import { useSelector } from 'react-redux';

function App() {

  const card = useSelector((state) => state.card.card)
  const amount = useSelector((state) => state.card.amount)
  const totalAmount = useSelector((state) => state.card.totalAmount)
  const totalPrice = useSelector((state) => state.card.totalPrice)

  console.log("card",card)
  console.log("amount",amount)
  console.log("totalAmount",totalAmount)
  console.log("totalPrice",totalPrice)
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
