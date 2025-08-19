
import BuyByPortfolio from "../../assets/compre por categoria.png"
import "./styles.buyCategory.scss"


export const BuyCategory: React.FC = () => {
    return(
        <section className="buy-category" aria-label="compra por categoria">
            <img className="categorias" src={BuyByPortfolio} alt="comprar por categoria"/>
        </section>
    )
}