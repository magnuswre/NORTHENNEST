import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ObjectListing from './pages/ObjectListing/ObjectListing'
// import ObjectDetail from './pages/ObjectDetail/ObjectDetail'
import BookingConfirmation from './pages/BookingConfirmation/BookingConfirmation'
import ObjectListingDetails from './components/ObjectListingDetails/ObjectListingDetails'
// import PaymentConfirmation from './pages/PaymentConfirmation/PaymentConfirmation'

const App = () => {
  return (
    <BrowserRouter>
    <div className='wrapper'>
      <div className='app-container'>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/products' element={ <ObjectListing /> }/>
          <Route path='/products/productdetails/:id' element={ <ObjectListingDetails /> }/>
          <Route path='/order/:id' element={ <BookingConfirmation /> }/>
          {/* <Route path='/products/:id' element={ <PaymentConfirmation /> }/> */}
        </Routes>
        <Footer />

      </div>
    </div>
    </BrowserRouter>
  )
}

export default App