const Features = () => {
  return (
    <div className="features">
      <div className="features__item egg-text">
        <div className='features__content'>
          <h2 className="features__title">Transform your brand</h2>
          <p className="features__text">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <a className='yellow' href="#Learn-more">Learn more</a>
        </div>
      </div>

      <div className="features__item features-image egg-image">
        {/* <img src={Egg} alt="" /> */}
      </div>

      <div className="features__item features-image cup-image">
        {/* <img src={Cup} alt="" /> */}
      </div>
    
      <div className="features__item">
        <div className="features__content">
          <h2 className="features__title">Stand out to the right audience</h2>
          <p className="features__text">
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
          </p>
          <a className='soft-red' href="#Learn-more">Learn more</a>
        </div>
      </div>
    
      <div className="features__bottom cherry-item">
        <h2 className="features__title">Graphic design</h2>
        <p className="features__text">
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
        </p>
      </div>

      <div className="features__bottom orange-item">
      <h2 className="features__title">Photography</h2>
      <p className="features__text">
        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
      </p>
      </div>
    </div>
  )
}

export default Features
