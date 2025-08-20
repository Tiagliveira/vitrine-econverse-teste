  export interface Product {
    id: string;
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  }

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('/products.json');
    if (!response.ok) throw new Error('Erro ao buscar produtos');
    const data = await response.json();
    console.log('Produtos carregados:', data.produtos);

    return data.produtos;
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
    return [];
  }
};
