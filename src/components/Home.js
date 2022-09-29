import React, { useState, useEffect } from 'react';
import Links from './Links';
import CarList from './CarList';

export default function Home() {
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    fetch("https://cars-back-cap.herokuapp.com/car/get")
    .then((res) => res.json())
    .then(res => setAllCars(res))
    .catch(error => console.log("There was an error fetchin yo cars G", error))
  }, []);

  const renderAllCars = () => {
    return allCars.map(carList => {    
        return (
            <div>
            <CarList carList={carList} />
            </div>
        );
    });
  };

    return (
      <div>

        <div className='header-wrapper'>
            <Links />
        </div>

        <div className='blog-wrapper'>

          <div className='car-blog'>
            {renderAllCars()}
          </div>

        </div>
        
      </div>
    );
}

