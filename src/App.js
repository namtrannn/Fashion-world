import './App.css';
import Main from './Component/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FilteredProduct from './Component/FilteredProduct/FilteredProduct';
import SingleProduct from './Component/FilteredProduct/SingleProduct';
import Login from './Component/Login/Login';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.user)
  const authUser  = user.authSlices
  
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ authUser ? <Main /> : <Login />}></Route>
              <Route path='/FilteredProduct/:type' element={<FilteredProduct />}></Route>
              <Route path='/FilteredProduct/:type/:id' element={<SingleProduct />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
