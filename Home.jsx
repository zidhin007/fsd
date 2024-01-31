import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/pic13.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/card8.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/pic12.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<section className="black-banner">
        <h2 className="text-center mt-4 mb-4 text-white">Portraits</h2>

      <div className="card-container row">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/card1.png" className="card-img-top" alt="Car 1" />
            <div className="card-body">
              <h5 className="card-title">The Last Supper</h5>
              <p className="card-text">Leonardo da Vinci</p>
              <Link to={"/sig in"} className='btn btn-primary'>more</Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/card2.png" className="card-img-top" alt="Car 2" />
            <div className="card-body">
              <h5 className="card-title">body of water and stars</h5>
              <p className="card-text">Vincent van Gogh</p>
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/card3.png" className="card-img-top" alt="Car 3" />
            <div className="card-body">
              <h5 className="card-title">Boat during golden hour</h5>
              <p className="card-text">Claude Monet</p>
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/card4.png" className="card-img-top" alt="Car 4" />
            <div className="card-body">
              <h5 className="card-title">the ceiling</h5>
              <p className="card-text">Michelangelo</p>
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/card5.png" className="card-img-top" alt="Car 5" />
            <div className="card-body">
              <h5 className="card-title">man in black coat</h5>
              <p className="card-text">Rembrandt van Rijn</p>
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-3">
          <div className="card">
            <img src="/card6.png" className="card-img-top" alt="Car 6" />
            <div className="card-body">
              <h5 className="card-title">multicolored abstract</h5>
              <p className="card-text">Wassily Kandinsky</p>
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/card7.png" className="card-img-top" alt="Car 6" />
            <div className="card-body">
              <h5 className="card-title">Sculpture, Grounds For Sculpture, the scream</h5>
              <p className="card-text">Edvard munch</p>
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/card8.png" className="card-img-top" alt="Car 6" />
            <div className="card-body">
              <h5 className="card-title">horses spanish bull</h5>
              <p className="card-text">Pablo picasso</p>
              <Link to={"/sign in"} className='btn btn-primary'>more</Link>
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* <section className="black-banner">
        <h2 className="text-center mt-4 mb-4 text-white">About Us</h2>
        </section>
        <div> */}
      {/* ... (your existing code) ... */}

      <section className="black-banner about-us-section">
        <h2 className="text-center mt-4 mb-4 text-white">About Us</h2>
        <div className="about-us-content">
          <p className="text-center text-white">
            Welcome to TAC your premier destination for exquisite artworks...
            {/* More content here */}
          </p>

          <div className="social-media-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </section>

      {/* ... (continue with the rest of your code) ... */}
      
    </div>

    // </div>
  )
}

export default Home;