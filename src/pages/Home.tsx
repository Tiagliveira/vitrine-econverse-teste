import { Banner, BannerPartners } from "../components/banner/Banner";
import { BuyCategory } from "../components/buyCategory/BuyByPortfolio";
import { Header } from "../components/header/Header";
import { ProductsCarousel } from "../components/showcase1/showcase1";
import { useState, useEffect } from "react";
import { fetchProducts, type Product } from "../types/product";
import DiscountPopup from "../components/popup/discountpopup";
import "../styles/main.scss"
import "./home.scss"

import ToMark from "../components/browseByBookmark/BrowseBookmark";
import Footer from "../components/footer/Foooter";
import CategoryLinks from "../components/linksNav/CategoryLinks";



export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const loadProducts = async () => {
            const result = await fetchProducts();
            setProducts(result);
        };

        loadProducts();
    }, []);

    return (
        <>
            
            <main>
                <section id="section-home">
                    <Header />
                    <Banner onShowPopup={() => setShowPopup(true)} />
                        {showPopup && (
                <DiscountPopup products={products} onClose={() => setShowPopup(false)} />
            )}
                    <BuyCategory />
                </section>
            </main>

            <section id="celular-section" >

                <CategoryLinks selectLabels={["CELULAR", "ACESSÓRIOS", "TABLET", "NOTEBOOK", "TVS", "VER TODOS"]} />
                <ProductsCarousel products={products} />
            </section>
            <BannerPartners />
            <section >

                <CategoryLinks selectLabels={["VER TODOS"]} />
                <ProductsCarousel products={products} />

                <BannerPartners />
            </section>
            <ToMark />
            <section >

                <CategoryLinks selectLabels={["VER TODOS"]} />
                <ProductsCarousel products={products} />

            </section>

            <Footer />

        </>
    )
}
