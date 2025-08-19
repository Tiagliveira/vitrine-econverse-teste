import React, { useEffect, useState } from "react";
import { SearchBar } from "../search/Seach";
import "./styles.header.scss"

//imagens
import Frame from "../../assets/Frame 2364.png"
import Group from "../../assets/Group 35.png"
import FrameIcon from "../../assets/Frame 2365.png"


export const Header: React.FC = () => {
    const[activeSection, setActiveSection] = useState("")

    useEffect(() =>{
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) =>{
                entries.forEach((entry) =>{
                    if(entry.isIntersecting){
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {threshold: 0.5}
        );
        sections.forEach((section) =>observer.observe(section));
  
    
    () => observer.disconnect();
          }, []);
          return (
        <header className="header">
            <img className="frame" src={Frame} alt="quadro" />

            <div className="header-top">
                <img src={Group} alt="logo-econverse" className="group" />
                <SearchBar />
                <img src={FrameIcon} alt="logo-econverse" className="icon" />
            </div>

            <nav aria-label="Navegação principal">
                
                <ul className="nav">
                    <li><a href="">TODAS CATEGORIAS</a></li>
                    <li><a href="">SUPERMECADO</a></li>
                    <li><a href="">LIVROS</a></li>
                    <li><a href="">MODA</a></li>
                    <li><a href="">LANÇAMENTOS</a></li>
                    <li><a id="ativo" href="#section-home" className={activeSection === "section-home" ? "active" : ""}>OFERTAS DO DIA</a></li>
                    <li><a href="">ASSINATURAS</a></li>
                </ul>
            </nav>
        </header>
          )
}

