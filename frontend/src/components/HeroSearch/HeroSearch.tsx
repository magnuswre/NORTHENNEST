// import CalendarComponent from '../CalendarComponent/CalendarComponent'
import DateRangeComponent from '../DateRangeComponent/DateRangeComponent'
import './HeroSearch.css'

// import DatePickerCheckOut from '../DatePicker/DatePickerCheckOut'
// import DatePickerCheckIn from '../DatePicker/DatePickerCheckin'
import Package from './Package/Package'

const HeroSearch = () => {
  return (
    <div className='Home-HeroSearch-container'>
      <div className='Home-HeroSearch'>
        <div className='Home-DatePickers'>
          {/* <DatePickerCheckIn />
          <DatePickerCheckOut /> */}
          {/* <CalendarComponent /> */}
          <DateRangeComponent />
        </div>
        <div>
          <Package />
        </div>
      </div>
    </div>
  )
}

export default HeroSearch