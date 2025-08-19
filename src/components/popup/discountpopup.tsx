import React, { useState} from "react";
import OverlaySection from "../ovelay/OverlaySection";
import type { Product } from "../../types/product";
import "./discountpopup.scss"

import Left from "../../assets/Group 2411.png"
import Right from "../../assets/Group 2412.png"

interface DiscountPopupProps {
    products: Product[];
    onClose: () => void;
}

const DiscountPopup: React.FC<DiscountPopupProps> = ({ products, onClose}) => {
    const [index, setIndex] = useState(0);

    const currentProduct = products[index];

    const next = () => {
        setIndex((prev) => (prev +1) % products.length);
    };

    const previous = () => {
        setIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const discountedPrice = (currentProduct.price * 0.5).toFixed(2);

    return( 
        <OverlaySection onclose={onClose}>
  <div className="discont-popup">
    
    <div className="product">
      <img src={currentProduct.photo} alt={currentProduct.productName} />
      <h3>{currentProduct.productName}</h3>
      <p>Lorem ipsum dolor sit amet</p>
      <p className="origin-price">De: R${currentProduct.price.toFixed(2)}</p>
      <p className="discont-price">Por: R${discountedPrice}</p>
      <p>{currentProduct.descriptionShort}</p>
      <button>COMPRAR</button>
    </div>
    <div className="popup-buttons">
      <button className="button-popup" onClick={previous}>
        <img src={Left} alt="Anterior" />
      </button>
      <button className="button-popup" onClick={next}>
        <img src={Right} alt="Próximo" />
      </button>
    </div>
  </div>
</OverlaySection>

    );
};

export default DiscountPopup;