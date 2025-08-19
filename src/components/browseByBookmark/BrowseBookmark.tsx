import React from "react"
import "./ImageRepeater.scss"
import Mark from "../../assets/Group 35.png"

interface ImageRepeatProps {
    count? : number;
}

const ToMark : React.FC<ImageRepeatProps> = ({count = 5 }) => {
    return(
         <div className="text">
                <h3>compre por marcas</h3>
           
        <div className="browseToMak">
           
            
            {Array.from({ length: count }).map((_, index) =>(
                <div key={index} className="div-image">
                    <img src={Mark} alt={`image ${index + 1}`} />
                </div>
            ))}
         </div>
        </div>

    
    )
}

export default ToMark;