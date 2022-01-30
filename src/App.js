import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import FloatingCart from './Components/FloatingCart/FloatingCart'
import Contact from './Pages/Contact/Contact'
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart'
import Products from './Pages/Products/Products'
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase'
import Home from './Pages/Home/Home'



function App() {
  return (
    <Router>
      <Navbar />  

          <FloatingCart /> 
      <Routes> 
          <Route exact path="/" component={Home} /> 
          <Route exact path="/produits" component={Products} />
          <Route exact path="/produits/:id" component={ProductShowcase} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
      
        </Routes>
    </Router>
  );
}

export default App;
