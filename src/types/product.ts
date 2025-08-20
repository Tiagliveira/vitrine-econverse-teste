  export interface Product {
    id: string;
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  }

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
    if (!response.ok) throw new Error('Erro ao buscar produtos');
    const data = await response.json();
    return data.produtos;
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
    return [];
  }
};
