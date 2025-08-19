import React, { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import type { Product } from "../../types/product";
import "./showcase.scss";

import ArrowLeft from "../../assets/Group 2412.png";
import ArrowRight from "../../assets/Group 2411.png";
import ProductModal from "../productModal/ProductModal";

interface Props {
  products: Product[];
}

export const ProductsCarousel: React.FC<Props> = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selecProduct, setSelectProduct] = useState<Product | null>(null);
  const itemsByPage = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handlenext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, products.length - itemsByPage)
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsByPage);

  return (
    <div className="Container-carousel">
      <div className="carousel-wrapper">
        <button
          className="nav-button left"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          <img src={ArrowRight} alt="Anterior" />
        </button>

        <div className="products-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.productName}
              product={product}
              onClick={() => setSelectProduct(product)}
            />
          ))}
        </div>

        <button
          className="nav-button right"
          onClick={handlenext}
          disabled={startIndex + itemsByPage >= products.length}
        >
          <img src={ArrowLeft} alt="Próximo" />
        </button>
      </div>

      {selecProduct && (
        <ProductModal
          product={selecProduct}
          onClose={() => setSelectProduct(null)}
        />
      )}
    </div>
  );
};