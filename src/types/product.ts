  export interface Product {
    id: string;
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  }

  export const fetchProducts = async (): Promise<Product[]> => {
const response = await fetch('/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
const data = await response.json();
return data.produtos;
  }