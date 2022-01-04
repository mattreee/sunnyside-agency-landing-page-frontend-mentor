import Emily from '../images/image-emily.jpg';
import Thomas from '../images/image-thomas.jpg';
import Jennie from '../images/image-jennie.jpg';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="testimonials__title">Client testimonials</h2>

      <div className="testimonials__comments">
        <div className="testimonials__item">
          <img className='testimonials__photo' src={Emily} alt='' />
          <p className="testimonials__text">
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
          </p>
          <p className="testimonials__author">Emily R.</p>
          <p className="testimonials__job">Marketing Director</p>
        </div>
      
        <div className="testimonials__item">
          <img className='testimonials__photo' src={Thomas} alt="" />
          <p className='testimonials__text'>
            Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
          </p>
          <p className='testimonials__author'>Thomas S.</p>
          <p className='testimonials__job'>Chief Operating Officer</p>
        </div>
      
        <div className="testimonials__item">
          <img className='testimonials__photo' src={Jennie} alt="" />
          <p className='testimonials__text'>
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
          </p>
          <p className='testimonials__author'>Jennie F.</p>
          <p className='testimonials__job'>Business Owner</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
