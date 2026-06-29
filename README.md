# SauceDemo Test

> Projeto de automação de testes end-to-end com Cypress para a aplicação SauceDemo.

---

## 📋 Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Arquitetura e Organização](#arquitetura-e-organização)
- [Funcionalidades](#funcionalidades)
- [Documentação do Projeto](#documentação-do-projeto)
- [Técnicas de Teste](#técnicas-de-teste)
- [Bibliotecas Utilizadas](#bibliotecas-utilizadas)
- [Notas Importantes](#notas-importantes)

---

## 🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js 18 ou superior
- npm
- VS Code ou qualquer editor de código
- Terminal ou prompt de comando

---

## 🚀 Instalação

### 1. Clone ou abra o projeto

Abra o projeto em sua IDE ou terminal.

### 2. Instale as dependências

No terminal, a partir da raiz do projeto:

```bash
npm install
```

### 3. Instale o Cypress

```bash
npx cypress install
```

### 4. Execute os testes

```bash
npx cypress run
```

Ou abra a interface do Cypress:

```bash
npx cypress open
```

---

## 🏗️ Arquitetura e Organização

O projeto segue uma estrutura simples e organizada para automação de testes com Cypress.

### Estrutura de pastas

```text
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── catalog.cy.js
│   ├── cart.cy.js
│   └── checkout.cy.js
├── fixtures/
│   └── login.json
├── support/
│   ├── commands/
│   │   ├── commands.js
│   │   ├── catalog.js
│   │   └── cart.js
│   ├── locators/
│   │   ├── login.js
│   │   ├── catalog.js
│   │   └── cart.js
│   └── e2e.js
└── cypress.config.js
```

### O que cada pasta faz

- `cypress/e2e/`: contém os cenários de teste automatizados
- `cypress/support/commands/`: comandos reutilizáveis personalizados
- `cypress/support/locators/`: seletores dos elementos da interface
- `cypress/fixtures/`: dados estáticos utilizados nos testes
- `cypress.config.js`: configuração do projeto Cypress

---

## 🎯 Funcionalidades

### Login
- Validar login com usuário válido
- Validar mensagens de erro para entradas inválidas

### Catálogo
- Exibir produtos corretamente
- Adicionar e remover itens do carrinho
- Validar ordenação dos produtos

### Carrinho
- Adicionar múltiplos produtos
- Remover itens do carrinho
- Validar quantidade e persistência dos itens

### Checkout
- Preencher formulário com dados válidos e inválidos
- Cancelar o fluxo de checkout
- Validar resumo e cálculo do total
- Finalizar compra com sucesso

---

## 📄 Documentação do Projeto

Este projeto também conta com documentação complementar para apoiar o entendimento dos cenários e da estratégia de testes.

### Arquivos de documentação
- [planoDeTeste.md](planoDeTeste.md): apresenta o plano de teste com objetivo, escopo, estratégia e cenários principais.
- [casosDeTeste.md](casosDeTeste.md): descreve os casos de teste com pré-condições, passos e resultados esperados.

### Conteúdo documentado
- Fluxos principais de teste
- Cenários de login, catálogo, carrinho e checkout
- Casos de validação de erro e sucesso
- Estratégia de organização dos testes

---

## 🧪 Técnicas de Teste

A automação foi organizada com foco em cenários funcionais e validação de fluxos principais.

### Técnicas aplicadas
- Partição de equivalência para validar entradas válidas e inválidas no login e no checkout
- Tabela de decisão para combinar condições como usuário válido, senha incorreta e campos obrigatórios vazios
- Teste de transição de estados para verificar o fluxo completo de login → catálogo → carrinho → checkout

> O objetivo é garantir que os principais cenários da aplicação sejam executados de forma consistente e confiável.

---

## 📚 Bibliotecas Utilizadas

O projeto utiliza as seguintes tecnologias:

- Cypress para automação de testes end-to-end
- JavaScript como linguagem principal
- Node.js para execução do ambiente

Não há dependências externas além do próprio Cypress.

---

## 📝 Notas Importantes

- Os testes utilizam a aplicação pública SauceDemo
- O projeto pode ser executado localmente sem necessidade de backend adicional
- A estrutura foi pensada para facilitar manutenção, reutilização de comandos e organização dos seletores
