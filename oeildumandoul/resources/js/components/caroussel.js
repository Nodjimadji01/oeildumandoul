import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = () => {
    return (
        <div className="Slider">
            <div className="Slides">
              <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src="https://pixabay.com/get/gd62889c0535a40117ccd9bb2b70a219cf2285efec4ac080371f6496eb91792516aeabe88a5f176d48a633fd045cbf848ab4ab258d18be29d971a8934eafbf1ca6aec577687d8476bc85b6f70ce93cae2_640.jpg"
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
                        src="https://pixabay.com/get/gd62889c0535a40117ccd9bb2b70a219cf2285efec4ac080371f6496eb91792516aeabe88a5f176d48a633fd045cbf848ab4ab258d18be29d971a8934eafbf1ca6aec577687d8476bc85b6f70ce93cae2_640.jpg"
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
                        src="https://pixabay.com/get/gd62889c0535a40117ccd9bb2b70a219cf2285efec4ac080371f6496eb91792516aeabe88a5f176d48a633fd045cbf848ab4ab258d18be29d971a8934eafbf1ca6aec577687d8476bc85b6f70ce93cae2_640.jpg"
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
