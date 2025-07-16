import Lokacija from '../parts/lokacija.jpg';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <p> </p>
      </div>    
<div className="container">
  <div className="row">
  
    <div className="col-md-6">
      <iframe
        style={{ width: '100%', height: '450px', border: 0 }}
        title="Google Map - Studio Zen Place"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.067155231049!2d13.848275576274453!3d44.850026971070506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67d110a47891ba33%3A0x39e74d17769202d4!2sStudio%20Zen%20place%20~%20holistic%20studio%20for%20yoga%2C%20sound%20massage%20and%20wellbeing!5e1!3m2!1sen!2shr!4v1752626452825!5m2!1sen!2shr"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    
    <div className="col-md-6">
      <img 
        src={Lokacija} 
        alt="Lokacija studija Zen place Pula" 
        style={{ width: '100%', height: 'auto' }} 
      />
    </div>
  </div>
</div>
</div>
  );
};
export default Contact;