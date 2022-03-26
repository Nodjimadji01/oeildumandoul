import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = () => {
    return (
        <div className="Slider">
            <div className="Slides">
              <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100 h-100"
                        src="https://images.pexels.com/photos/667803/pexels-photo-667803.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2016/11/30/15/00/apples-1872997_960_720.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
          </Carousel>

            </div>
        </div>
     );
}

export default Slider;
