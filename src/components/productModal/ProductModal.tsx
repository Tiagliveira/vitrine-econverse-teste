import type { Product } from "../../types/product";
import ReactDOM from "react-dom";
import "./productModal.scss"

interface ProductModalProps {
    product: Product;
    onClose: () => void;
    position: { top: number; left: number };
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, }) => {
    return ReactDOM.createPortal(

        <div className="Modal-overlay" 
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(2px)',
                zIndex: 9999,
            }}
        >
            <div
                className="Modal-content"
                  onClick={(e) => e.stopPropagation()}
                style={{
                    position: 'fixed',
                    top: "50%",
                    left: "50%",
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9999
                }}

            >

                <button className="close-button" onClick={onClose}>Fechar</button>
                <h2>{product.productName}</h2>
                <img src={product.photo} alt={product.productName} />
                <p>{product.descriptionShort}</p>
                <p><strong>Price:</strong> R${product.price}</p>
                <button>COMPRAR</button>

            </div>
        </div>,
         document.body

    );
};


export default ProductModal;
