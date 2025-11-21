import React from 'react'
import Home from './componant/Home/Home'
import About from './componant/pages/About'
import Product from './componant/pages/Product'
import Contect from './componant/pages/Contect'
import Order from './componant/pages/Order'
import Navbar from './componant/ui/Navbar'
import Footer from './componant/ui/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div>

       <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Product' element={<Product />}/>
      <Route path='/contect' element={<Contect />} />
      <Route path='/order' element={<Order />} />
    </Routes>
   <Footer />
    </div>

    </>
  )
}

export default App
