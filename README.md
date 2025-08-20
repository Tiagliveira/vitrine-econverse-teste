# 🛍️ Vitrine Econverse — Projeto de Avaliação Front-End

Este projeto foi desenvolvido como parte de um desafio técnico para uma vaga de desenvolvedor front-end na Econverse. A proposta consiste em construir uma vitrine de produtos com layout responsivo, navegação por carrossel e exibição de detalhes em modal.

🔗 **Deploy online:** [vitrine-econverse-teste.vercel.app](https://vitrine-econverse-teste.vercel.app/)  
📁 **Repositório:** [github.com/Tiagliveira/vitrine-econverse-teste](https://github.com/Tiagliveira/vitrine-econverse-teste)

---

## 📦 Tecnologias utilizadas

- **React** com TypeScript
- **Vite** para bundling e desenvolvimento rápido
- **SCSS** para estilização modular
- **ReactDOM.createPortal** para modais flutuantes
- **Vercel** para deploy contínuo

---

## 🧠 Funcionalidades

- Listagem de produtos em carrossel com navegação lateral
- Modal flutuante com detalhes do produto
- Responsividade para diferentes tamanhos de tela
- Animações suaves e UX refinada
- Separação de componentes reutilizáveis (`ProductCard`, `ProductModal`, `ProductsCarousel`)

---

## ⚙️ Sobre o JSON e o CORS

Durante o desenvolvimento, o projeto deveria consumir um arquivo JSON hospedado externamente. No entanto, o servidor de origem não estava configurado para permitir requisições cross-origin (CORS), o que impedia o fetch direto via navegador.

🔧 **Solução adotada:**  
Para contornar essa limitação, o arquivo JSON foi importado diretamente no projeto como um arquivo local. Isso garante que os dados estejam disponíveis sem depender de requisições externas, mantendo a integridade da avaliação técnica.

```ts
import products from '../data/products.json';

🚀 Como rodar localmente
# Instalar dependências
yarn install

# Rodar em modo de desenvolvimento
yarn dev

# Gerar build de produção
yarn build

# Visualizar build localmente
yarn pre

Perfeito, Tiago! Aqui está o trecho atualizado do README com seu LinkedIn certinho:
## 👨‍💻 Autor

**Tiago Oliveira**  
[LinkedIn](https://www.linkedin.com/in/tiagoliveira-) • [GitHub](https://github.com/Tiagliveira)


E aqui está o README completo, pronto pra você copiar e colar no seu repositório como README.md:

# 🛍️ Vitrine Econverse — Projeto de Avaliação Front-End

Este projeto foi desenvolvido como parte de um desafio técnico para uma vaga de desenvolvedor front-end na Econverse. A proposta consiste em construir uma vitrine de produtos com layout responsivo, navegação por carrossel e exibição de detalhes em modal.

🔗 **Deploy online:** [vitrine-econverse-teste.vercel.app](https://vitrine-econverse-teste.vercel.app/)  
📁 **Repositório:** [github.com/Tiagliveira/vitrine-econverse-teste](https://github.com/Tiagliveira/vitrine-econverse-teste)

---

## 📦 Tecnologias utilizadas

- **React** com TypeScript
- **Vite** para bundling e desenvolvimento rápido
- **SCSS** para estilização modular
- **ReactDOM.createPortal** para modais flutuantes
- **Vercel** para deploy contínuo

---

## 🧠 Funcionalidades

- Listagem de produtos em carrossel com navegação lateral
- Modal flutuante com detalhes do produto
- Responsividade para diferentes tamanhos de tela
- Animações suaves e UX refinada
- Separação de componentes reutilizáveis (`ProductCard`, `ProductModal`, `ProductsCarousel`)

---

## ⚙️ Sobre o JSON e o CORS

Durante o desenvolvimento, o projeto deveria consumir um arquivo JSON hospedado externamente. No entanto, o servidor de origem não estava configurado para permitir requisições cross-origin (CORS), o que impedia o fetch direto via navegador.

🔧 **Solução adotada:**  
Para contornar essa limitação, o arquivo JSON foi importado diretamente no projeto como um arquivo local. Isso garante que os dados estejam disponíveis sem depender de requisições externas, mantendo a integridade da avaliação técnica.

```ts
import products from '../data/products.json';


Essa abordagem foi necessária exclusivamente por conta da política de CORS do servidor original e não representa uma limitação técnica do projeto.


🚀 Como rodar localmente
# Instalar dependências
yarn install

# Rodar em modo de desenvolvimento
yarn dev

# Gerar build de produção
yarn build

# Visualizar build localmente
yarn preview



📂 Estrutura de pastas
src/
├── components/
│   ├── ProductCard/
│   ├── ProductModal/
│   └── ProductsCarousel/
├── data/
│   └── products.json
├── types/
│   └── product.ts
├── styles/
│   └── showcase.scss
└── main.tsx



👨‍💻 Autor
Tiago Oliveira
LinkedIn • GitHub
