# 🛒 Projeto: Página de Produto (E-commerce)

![Preview da Página de Produto](preview.gif)

Uma página de produto interativa para um e-commerce, focada em **gerenciamento de estado** com JavaScript puro. A aplicação simula um carrinho de compras simples, permitindo ao usuário alterar a quantidade de um item e ver o preço total ser atualizado em tempo real.

---

### 🎯 Objetivo

O objetivo principal é demonstrar o gerenciamento de estado do lado do cliente (client-side). Este projeto foca em como o JavaScript pode controlar variáveis (`quantidade`, `preço`), ouvir eventos do usuário (cliques em `+` e `-`) e atualizar dinamicamente múltiplos elementos do DOM (`#quantity-display`, `#product-price-display`) em resposta a essas ações.

---

### 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES6+)
* **Tecnologias Web:** HTML5, CSS3
* **Framework/Biblioteca:** Bootstrap 5 (para o grid responsivo e botões)
* **Ambiente:** Navegador Web

---

### 🧱 Estrutura do Código

A lógica da aplicação é centralizada no `main.js` e gira em torno de variáveis de estado que são independentes do DOM.

| Arquivo/Variável | Propósito Principal |
| :--- | :--- |
| `index.html` | Estrutura da página com os elementos interativos (`#decrement-btn`, `#increment-btn`, etc.). |
| `css/style.css` | Estilização personalizada para destacar o preço e o contador. |
| `js/main.js` | **Lógica de Estado:** Contém toda a lógica de gerenciamento da compra. |
| `main.js` » `basePrice` (const) | Armazena o preço fixo do produto. |
| `main.js` » `quantity` (let) | **Variável de Estado:** Armazena a quantidade atual. |
| `main.js` » `updatePrice()` | **Função Chave:** Recalcula e atualiza o DOM com o novo preço total. |
| `main.js` » Event Listeners | `click` nos botões `+` e `-` que modificam o estado `quantity`. |

---

### 🔍 Funcionalidades

* **Controle de Quantidade:** O usuário pode aumentar ou diminuir a quantidade do produto.
* **Atualização de Preço em Tempo Real:** O preço total é recalculado e exibido instantaneamente a cada mudança na quantidade.
* **Validação de Quantidade:** O script impede que a quantidade seja menor que 1.
* **Feedback de Compra:** Um alerta confirma a adição do item ao carrinho.
* **Interface Responsiva:** O layout de duas colunas se adapta para uma única coluna em dispositivos móveis.

---

### 🧪 Como Executar

Este é um projeto de front-end estático.

1.  Clone o repositório (ou tenha a pasta do projeto em sua máquina).
2.  Abra o arquivo `index.html` no seu navegador de preferência.

---

### 📚 Aprendizado

Este projeto foi uma introdução essencial ao conceito de **Gerenciamento de Estado** em JavaScript:

* **Separação de Lógica e DOM:** Aprendi a não depender do DOM para armazenar dados. Ao invés de ler o preço da tela, eu o armazenei em uma variável JS (`basePrice`) e usei o DOM apenas como um "espelho" para exibir o estado atual.
* **Fonte Única da Verdade (Single Source of Truth):** As variáveis `basePrice` e `quantity` serviram como a "fonte da verdade". Qualquer mudança na UI era uma consequência da mudança nessas variáveis, o que é um pilar de frameworks modernos como React e Vue.
* **Formatação de Dados:** Pratiquei a formatação de números para exibição como moeda, usando `.toFixed(2)` e `.replace('.', ',')`.

---

📄 **Licença**
Este projeto está licenciado sob a MIT License.
