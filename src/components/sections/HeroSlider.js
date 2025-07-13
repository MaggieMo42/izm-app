import Slider from 'react-slick';

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="hero-container">
<Slider {...settings} className="hero-slider">
  <div className="slide"><img src="/img/zdjele.webp" alt="zdjele za zvučnu masažu" /></div>
  <div className="slide"><img src="/img/nina2.jpg" alt="slika 2" /></div>
  <div className="slide"><img src="/img/nina3.jpg" alt="slika 3" /></div>
</Slider>

      <div className="hero-text">
        <h1 className="creamtext">Zen Place Pula</h1>
        <p>Dobro došli u vašu oazu mira</p>
      </div>
    </div>
  );
};

export default HeroSlider;