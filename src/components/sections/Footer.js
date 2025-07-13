import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4 text-center">
        <h6 className="text-uppercase fw-bold">Usluge</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" />
        <p><a href="zvucna_masaza.html" className="text-dark">Zvučna masaža</a></p>
        <p><a href="kundalini_yoga.html" className="text-dark">Kundalini yoga</a></p>
        <p><a href="theta_healing.html" className="text-dark">Theta healing</a></p>
        <p><a href="human_design.html" className="text-dark">Human design</a></p>
      </div>

      <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase fw-bold">Contact</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" />
        <p><i className="fas fa-home mr-3"></i> Ulica Drage Gervaisa 22, Pula</p>
        <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
        <p><i className="fas fa-phone mr-3"></i> +01 234 567 88</p>
        <p>
          <a
            href="https://www.facebook.com/ZenplaceStudioForBodyMindSoul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-2 mx-2"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/nikolina_papuga/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-2 mx-2"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
