import React from 'react';
import { useParams } from 'react-router-dom';
import January from './Months/January';

export default function BestVistingPlaces() {
 
    const months = [
    { name: 'January', url: 'january' },
    { name: 'February', url: '/february' },
    { name: 'March', url: '/march' },
    { name: 'April', url: '/april' },
    { name: 'May', url: '/may' },
    { name: 'June', url: '/june' },
    { name: 'July', url: '/july' },
    { name: 'August', url: '/august' },
    { name: 'September', url: '/september' },
    { name: 'October', url: '/october' },
    { name: 'November', url: '/november' },
    { name: 'December', url: '/december' },
  ];

 

  const { url: monthUrl } = useParams();
  const handleClick = (clickedUrl) => {
    switch (clickedUrl) {
        case 'january':
          return <January />;
        default:
          return <div>Invalid URL</div>;
  }}

  return (
    <div>
      <h2>PLACES TO VISIT IN INDIA MONTH WISE</h2>
      <div className="grid-container">
        {months.map((month) => (
          <li
            key={month.name}
            onClick={() => handleClick(month.url)}
            style={{ cursor: 'pointer' }}
          >
            {`Best places to visit in ${month.name} in India`}
          </li>
        ))}
      </div>
    </div>
  );
}

