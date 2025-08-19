import type { Product } from "../../types/product";
import "./productModal.scss"

interface ProductModalProps {
    product:Product;
    onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
    return (
        <div className="Modal-overlay" onClick={onClose}>
            <div className="Modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>Fechar</button>
                <h2>{product.productName}</h2>
                <img src={product.photo} alt={product.productName}/>
                <p>{product.descriptionShort}</p>
                <p><strong>Price:</strong> R${product.price}</p>
                <button>COMPRAR</button>

            </div>
        </div>
    )
}


export default ProductModal;
