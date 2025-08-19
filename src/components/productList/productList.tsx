import { useEffect, useState } from "react";
import { fetchProducts } from "../../types/product";
import type { Product } from "../../types/product";
import ProductCard from ".././productCard/ProductCard";
import ProductModal from "../productModal/ProductModal";
import "./productList.scss"

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectProduct, setSelectProduct] = useState<Product | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <>
        <div className="product-grid">
            {products.map((product, index) => (
                <ProductCard
                 key={index}
                 product={product}
                 onClick={() => setSelectProduct(product)} />

            ))}
           
        
        </div>
         {selectProduct && (
                <ProductModal
                    product={selectProduct}
                    onClose={() => setSelectProduct(null)}
                    />
            )}
            </>
    );
};

export default ProductList;