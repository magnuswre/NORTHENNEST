import chevronBottom from '../../assets/chevron bottom.svg';
import './DateRangeComponent.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { useState, useEffect, useRef } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import format from 'date-fns/format';

const DateRangeComponent = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ]);

  const [open, setOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    checkIn: '',
    checkOut: '',
  });
  const refOne = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e: MouseEvent) => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const handleOpenClick = (field: 'checkIn' | 'checkOut') => {
    setOpen(true);
    setInputValues({ ...inputValues, [field]: '' });
  };

  const handleDateChange = (item: { selection: any }) => {
    setRange([item.selection]);
    setInputValues({
      checkIn: format(item.selection.startDate, 'MM/dd/yyyy'),
      checkOut: format(item.selection.endDate, 'MM/dd/yyyy'),
    });
  };

  return (
    <div className="calendarWrap">
      <div className='CalenderInputAndLabel'>
        <div className='inputBoxCheckIn-container'>
          <label htmlFor="inputBoxCheckIn">Check in</label>
          <div>
            <input
              value={inputValues.checkIn || 'When?'}
              readOnly
              className="inputBoxCheckIn"
              onClick={() => handleOpenClick('checkIn')}
              id='inputBoxCheckIn'
            />
            <img src={chevronBottom} alt="" />
          </div>
        </div>

        <div className='inputBoxCheckOut-container'>
          <label htmlFor="inputBoxCheckOut">Check out</label>
          <div>
            <input
              value={inputValues.checkOut || 'When?'}
              readOnly
              className="inputBoxCheckOut"
              onClick={() => handleOpenClick('checkOut')}
              id='inputBoxCheckOut'
            />
            <img src={chevronBottom} alt="" />
          </div>
        </div>
      </div>
      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={handleDateChange}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComponent;
