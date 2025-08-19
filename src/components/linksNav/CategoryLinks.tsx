import React, { useState } from "react";
import { category, renderCategoryLinks } from "./Links";
import { handleOverlay } from "../ovelay/handleOverlay";
import OverlaySection from "../ovelay/OverlaySection";
import UnderConstruction from "../construction/Construction";
import ProductList from "../productList/productList";
import "./CategoryLinks.scss"

interface CategoryLinksProps {
    selectLabels?: string[];
}

const CategoryLinks: React.FC<CategoryLinksProps> = ({ selectLabels }) => {
    const [showAll, setShowAll] = useState(false);
    const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

    const handleClick = (target: string) => {
        if(target === "ver-todos-section") {
            setShowAll(true);
        }else {
            handleOverlay(target, setActiveOverlay);
        }
    };

    return(
        <>
        <div className="category">
            <h3>Produtos relacionados</h3>
          
             </div>
            <div className="links">
            {renderCategoryLinks(category, selectLabels, handleClick)}
        </div>
         {showAll && (
            <OverlaySection onclose={() => setShowAll(false)}>
                <ProductList/>
            </OverlaySection>
         )}

         {activeOverlay && (
            <OverlaySection onclose={() => setActiveOverlay(null)}>
                <UnderConstruction
                title="Conteúdo em contrução"
                message={`Estamos trtabalhando na seção "${activeOverlay}". Em breve estarà disponível!`}/>
            </OverlaySection>
         )}
        
        </>
    );
};

export default CategoryLinks