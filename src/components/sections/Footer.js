import { Link } from 'react-router-dom';
import NewsletterForm from '../parts/NewsletterForm';
const Footer = () => {

  return (
    <footer className="bg-light text-dark pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4 mb-4">
            <h6 className="text-uppercase fw-bold">Usluge</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p><Link to="/ZvucnaMasaza" className="text-dark">Zvučna masaža</Link></p>
            <p><Link to="/KundaliniYoga" className="text-dark">Kundalini yoga</Link></p>
            <p><Link to="/ThetaHealing" className="text-dark">Theta healing</Link></p>
            <p><Link to="/HumanDesign" className="text-dark">Human Design</Link></p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 mb-4">
            <h6 className="text-uppercase fw-bold">Kontakt</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p><i className="fas fa-home me-2"></i> Ulica Drage Gervaisa 22, Pula</p>
            <p><a href="mailto:info@zenplacepula.com">info@zenplacepula.com</a></p>
            <p><i className="fas fa-phone me-2"></i> +01 234 567 88</p>
            <p>
              <a
                href="https://www.facebook.com/ZenplaceStudioForBodyMindSoul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark me-3"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/nikolina_papuga/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark me-3"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </p>
          </div> 
        <div className="col-md-4 col-lg-4 col-xl-4 mb-4">
            <NewsletterForm />
          </div> 
      </div>
      </div>
      
    </footer>
  );
};
export default Footer;
