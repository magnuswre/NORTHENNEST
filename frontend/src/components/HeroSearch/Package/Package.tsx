import chevronBottom from '../../../assets/chevron bottom.svg';
import './Package.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { useState, useEffect, useRef } from 'react';

const Package = () => {
  const [open, setOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('All');
  const [inputValues, setInputValues] = useState({
    packages: '',
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

  const handleOpenClick = (field: 'packages') => {
    setOpen(true);
    setInputValues({ ...inputValues, [field]: '' });
  };

  const handlePackageSelect = (packageType: string) => {
    setSelectedPackage(packageType);
    setOpen(false);
  };

  return (
    <div className="calendarWrap">
      <div className='CalenderInputAndLabel'>
        <div className='inputBoxCheckIn-container'>
          <label htmlFor="inputBoxCheckIn">Package</label>
          <div>
            <input
              value={selectedPackage}
              readOnly
              className="inputBoxCheckIn"
              onClick={() => handleOpenClick('packages')}
              id='inputBoxCheckIn'
            />
            <img src={chevronBottom} alt="" />
          </div>
        </div>
      </div>
      <div ref={refOne}>
        {open && (
          <>
            <p onClick={() => handlePackageSelect('All')}>All</p>
            <p onClick={() => handlePackageSelect('Budget')}>Budget</p>
            <p onClick={() => handlePackageSelect('Standard')}>Standard</p>
            <p onClick={() => handlePackageSelect('Deluxe')}>Deluxe</p>
          </>
        )}
      </div>
      <button>SEARCH</button>
    </div>
  );
};

export default Package;
