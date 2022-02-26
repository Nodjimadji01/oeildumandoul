import React from "react";
import { ReactDOM } from "react";
var Carousel = require('react-responsive-carousel').Carousel;

const Caroussel = () => {
    return (
         <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="https://www.eurelien.fr/sites/default/files/styles/638x426/public/actu-formation-en-ligne.jpg?itok=HMBOHEVT" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.eurelien.fr/sites/default/files/styles/638x426/public/actu-formation-en-ligne.jpg?itok=HMBOHEVT" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://www.eurelien.fr/sites/default/files/styles/638x426/public/actu-formation-en-ligne.jpg?itok=HMBOHEVT" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://www.eurelien.fr/sites/default/files/styles/638x426/public/actu-formation-en-ligne.jpg?itok=HMBOHEVT" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://www.eurelien.fr/sites/default/files/styles/638x426/public/actu-formation-en-ligne.jpg?itok=HMBOHEVT" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="https://www.eurelien.fr/sites/default/files/styles/638x426/public/actu-formation-en-ligne.jpg?itok=HMBOHEVT" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
     );
}

export default Caroussel;
