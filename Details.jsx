import React from 'react';
import { FaPalette, FaCalendarAlt, FaTag, FaImage } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import './details.css';

const Details = () => {
  return (
    <div className="painting-details-container">
      <div className="carousel">
        {/* Carousel for painting images */}
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/card1.png" className="d-block w-100" alt="Painting 1" />
            </div>
            {/* <div className="carousel-item">
              <img src="/painting2.png" className="d-block w-100" alt="Painting 2" />
            </div>
            <div className="carousel-item">
              <img src="/painting3.png" className="d-block w-100" alt="Painting 3" />
            </div> */}
            {/* Add more carousel items as needed */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="painting-details">
        <h2 className="painting-title">The Last Supper</h2>
        <p className="painting-description">
          Experience the beauty of Leonardo da Vinci. A timeless piece of art that adds elegance to any collection.
        </p>
        <ul className="painting-features">
          <li>Artist: Leonardo da Vinci</li>
          <li><FaCalendarAlt /> Year: 1889</li>
          <li><FaTag /> Price: $100 million</li>
        </ul>
        <div className="purchase-info">
          <h3>Purchase Information</h3>
          <p>Contact us for purchasing details and availability.</p>
          <p>8590506474</p>
        </div>
        <div className="buy-button-container">
          <a href="#" className="btn btn-primary">Buy Now <FaArrowRight /></a>
        </div>
      </div>
    </div>
  );
}

export default Details;
