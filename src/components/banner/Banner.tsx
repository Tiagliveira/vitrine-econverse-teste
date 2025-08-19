import React, {} from "react";
import Button from "../button/Button";

import "./styles.banner.scss"






interface BannerPros {
    onShowPopup: () => void;
}

export const Banner: React.FC<BannerPros> = ({ onShowPopup }) => {

    return (
        <section aria-label="Promoção Black Friday" className="banner" >
            <div className="sombra">
                <div className="text-banner">
                    <h1>Venha conhecer nossas <br />promoções</h1>
                    <p><span>50% Off</span> nos Produtos</p>
                    <Button label="ver produtos" onClick={onShowPopup} />
                </div>


            </div>

        </section>
    );
};


export const BannerPartners: React.FC = () => {

    return (
        <section className="partners" >
            <div className="Partners1" aria-label="anuncios parceiros">
                <div className="Partners2">
                    <div className="textpartnes">
                        <h1>Parceiros</h1>
                        <p>Lorem ipsum dolor sit<br/> amet consectetur </p>
                        <Button label="CONFIRA" />
                    </div>
                </div>
            </div>
            <div className="Partners1" aria-label="anuncios parceiros">
                <div className="Partners2">
                    <div className="textpartnes">
                        <h1>Parceiros</h1>
                        <p>Lorem ipsum dolor sit<br/> amet consectetur </p>
                        <Button label="CONFIRA" />
                    </div>
                </div>
            </div>

        </section>
    )
}




