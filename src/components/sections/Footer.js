
const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 col-lg-4 col-xl-4 mb-4">
            <h6 className="text-uppercase fw-bold">Usluge</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p><a href="zvucna_masaza.html" className="text-dark">Zvučna masaža</a></p>
            <p><a href="kundalini_yoga.html" className="text-dark">Kundalini yoga</a></p>
            <p><a href="theta_healing.html" className="text-dark">Theta healing</a></p>
            <p><a href="human_design.html" className="text-dark">Human design</a></p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 col-lg-4 col-xl-4 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p><i className="fas fa-home me-2"></i> Ulica Drage Gervaisa 22, Pula</p>
            <p><i className="fas fa-envelope me-2"></i> info@example.com</p>
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
          {/* Column 3 */}
          <div className="col-md-4 col-lg-4 col-xl-4 mb-4 newsletter">
  <div className="ml-embedded" data-form="hkz3Np"></div>
        </div>
      </div>
      </div>
    </footer>
  );
};
export default Footer;
