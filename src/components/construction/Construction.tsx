import React from "react";

interface UnderConstructionProps {
    title?: string;
    message?: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
    title = "Em breve...",
    message = "estamos trabalhando neste conteúdo. Aguarde novidades!"
}) => {
    return (
        <div className="under-construction">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}


export default UnderConstruction;
