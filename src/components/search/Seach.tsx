import React, { useState } from "react";
import MagnifyingGlass from "../../assets/MagnifyingGlass.png"
import "./styles.search.scss"

export const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Busando por", query);
    };

    return (
        <form className="form" role="Seach" onSubmit={handleSearch} aria-label="Buscar Produtos">
            <input className="form"
                type="search"
                placeholder="O que você está buscando?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="O que você está buscando?" />
            <button className="glass" type="submit"><img src={MagnifyingGlass} alt="Lupa" /></button>
        </form>
    );
};
