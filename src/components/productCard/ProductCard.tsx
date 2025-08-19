import type { Product } from "../../types/product";
import "./productCard.scss"

interface ProductCardProps {
    product: Product;
    onClick?: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
    const discountedPrice = product.price * 0.9;

    return (
        <div className="product-card" onClick={onClick}>
           
            <img src={product.photo} alt={product.productName} />
            
             <p className="short-description">
                {product.descriptionShort.length > 80
                ? product.descriptionShort.slice(0,80) + "..."
            : product.descriptionShort}</p>
            <h3>{product.productName}</h3>
            
            <p className="old-price"> De: R$ {product.price.toFixed(2)}</p>
            <strong className="new-price">Por: R$ {discountedPrice.toFixed(2)}</strong>
            <p className="frete">Frete grátis</p>
            <button type="button" >COMPRAR</button>
            
        </div>
    );
};

export default ProductCard;