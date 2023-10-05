import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  const [data, setData] = useState([]);
  const cardStyle = {
    width: '18rem',
    
    margin: '30px' // Add border radius here
  };
  const arrangement{
    
  }
  


  useEffect(() => {
    // Fetch data from the JSON file
    fetch('http://localhost:500/hotelinfo')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='carddiv' style={arrangement}>
      {data.map((item, index) => (
        <div key={index} className="card hotelinfo" style={cardStyle}>
          <div id={`carouselExample${index}`} className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={item.Image1} className="d-block w-100" alt="..." style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src={item.Image2} className="d-block w-100" alt="..." style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src={item.Image3} className="d-block w-100" alt="..." style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-body">
            <p className="card-text">{item.kilometers}</p>
            <p className="card-text">{item.dates}</p>
            <p className="card-text">{item.price}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Card;
