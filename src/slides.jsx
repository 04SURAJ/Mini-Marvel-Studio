import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/54684.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h3>Marvel Heros</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/441/161/104/the-avengers-avengers-endgame-ant-man-avengers-endgame-black-panther-marvel-comics-hd-wallpaper-preview.jpg"
          alt="asasas"
        />

        <Carousel.Caption>
          <h3>EndGame</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2979640.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Marvel Family</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;