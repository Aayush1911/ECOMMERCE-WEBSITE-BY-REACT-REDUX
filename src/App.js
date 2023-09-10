// import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
// import { decnumber, incnumber } from './actions/index';
// import Child1 from './components/Child1'
// import Child2 from './components/Child2';
import Navbar from './ecommerce/Navbar/Navbar'
import Productlist from './ecommerce/ProductList/Productlist';
import Cart from './ecommerce/Cart/Cart';

function App() {
  // const mystate=useSelector((state)=>state.changenumber)
  // const dispatch=useDispatch()
  return (
    <>
    {/* <Child1/>
    <Child2/> */}
    {/* <button onClick={()=>dispatch(incnumber())}>add</button>
    <br />
    <a>{mystate}</a>
    <br />
    <button onClick={()=>dispatch(decnumber())}>Sub</button> */}
    <Router>
    <Navbar/>
       <Routes>
          <Route exact path='/' element={<Productlist/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
// https://github.com/GabrielGirotti/ecomerce_project