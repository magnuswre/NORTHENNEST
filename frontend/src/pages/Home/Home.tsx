import './Home.css'
import HeroSearch from "../../components/HeroSearch/HeroSearch"
import Explore from "../../components/Home/Explore/Explore"
import Heading2 from "../../components/Home/Heading2/Heading2"
import PackageCard from "../../components/Home/PackageCard/PackageCard"
import ReviewTestimonialCard from "../../components/Home/ReviewTestimonialCard/ReviewTestimonialCard"
import AboutOurCabins from '../../components/Home/AboutActivitesBookingInfo/AboutOurCabins/AboutOurCabins'
import ActivitiesFeatures from '../../components/Home/AboutActivitesBookingInfo/ActivitiesFeatures/ActivitiesFeatures'
import BookingConfirmationComponent from '../../components/Home/AboutActivitesBookingInfo/BookingConfirmationComponent/BookingConfirmationComponent'
import Heading4 from '../../components/Home/Heading4/Heading4'
import StarRating from '../../components/StarRating/StarRating'

const Home = () => {
  return (
    <div className='Home-Homepage'>
        <HeroSearch />
        <StarRating />
        <Heading2 />
        {/* {/* <PackageCard /> */}
        {/* <PackageCard /> */}
        <PackageCard /> 
        <AboutOurCabins />
        <ActivitiesFeatures />
        <BookingConfirmationComponent />
        <Explore />
        <Heading4 />
        <ReviewTestimonialCard />

    </div>
  )
}

export default Home