import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ObjectListing from './pages/ObjectListing/ObjectListing'
// import ObjectDetail from './pages/ObjectDetail/ObjectDetail'
import BookingConfirmation from './pages/BookingConfirmation/BookingConfirmation'
import ObjectListingDetails from './components/ObjectListingDetails/ObjectListingDetails'
import PackageCardDetails from './components/Home/PackageCardDetails/PackageCardDetails'
// import PackageDetails from './pages/PackageDetails/PackageDetails'
// import PaymentConfirmation from './pages/PaymentConfirmation/PaymentConfirmation'

const App = () => {
  return (
    <BrowserRouter>
    <div className='wrapper'>
      <div className='app-container'>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/rentalobject' element={ <ObjectListing /> }/>
          <Route path='/rentalobject/rentalobjectdetails/:id' element={ <ObjectListingDetails /> }/>

          {/* <Route path='/package' element={ <PackageDetails /> }/> */}

          <Route path='/package/packagedetails/:id' element={ <PackageCardDetails /> }/>

          <Route path='/order/:id' element={ <BookingConfirmation /> }/>
        </Routes>
        <Footer />

      </div>
    </div>
    </BrowserRouter>
  )
}

export default App