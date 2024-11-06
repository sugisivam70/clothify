import {Route, Routes} from 'react-router-dom'
import Home from './pages/home.jsx'
import Collection from './pages/collection.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Product from './pages/product.jsx'
import Cart from './pages/cart.jsx'
import Login from './pages/login.jsx'
import Placeorder from './pages/placeorder.jsx'
import Oder from './pages/oder.jsx'
import Navbar from './components/navbar.jsx'
const App = () => {
  return (
    <div className=" px-4 sm:[5vm] md:px-[7vw] lg:[px-9vw]">
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}  />
         <Route path='/collection' element={<Collection/>} />
         <Route path='/About' element={<About/>} />
         <Route path='/Contact' element={<Contact/>} />
         <Route path='/Product/:productid' element={<Product/>} />
         <Route path='/Cart' element={<Cart/>} />
         <Route path='/Login' element={<Login/>} />
         <Route path='/Placeorder' element={<Placeorder/>} />
         <Route path='/Oder' element={<Oder/>} />


      </Routes>
    </div>
  )
}

export default App
