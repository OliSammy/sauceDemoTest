# Plano de Teste - SauceDemo

## 1. Objetivo
Criar um plano de teste organizado para validar as principais funcionalidades da aplicação SauceDemo, com foco em testes funcionais.
## 2. Escopo
### Funcionalidades a serem testadas
- Login
- Catálogo de produtos
- Carrinho de compras
- Checkout
- Finalização de compra
- Logout
- Validação de mensagens de erro

### Funcionalidades fora do escopo
- Integrações externas
- Performance avançada
- Testes de API

## 3. Objetivos de Teste
- Garantir que o fluxo principal de compra funcione corretamente
- Validar regras de negócio básicas
- Identificar defeitos críticos e regressões
- Demonstrar organização, documentação e pensamento analítico de um QA

## 4. Estratégia de Teste
### Tipos de teste
- Teste funcional
- Teste de regressão
- Teste de interface

### Técnicas de teste aplicáveis
- Partição de equivalência: aplicado principalmente nos cenários em que há entradas com classes bem definidas, como login e checkout. Exemplo: usuário válido, inválido e bloqueado; senha correta, incorreta e vazia; campos de checkout preenchidos corretamente e incompletos.
- Tabela de decisão: foi útil para combinar condições do fluxo de login e checkout, como usuário válido + senha válida = acesso liberado; usuário válido + senha inválida = erro; usuário bloqueado + senha válida = acesso negado. Garantido uma melhor visualização para o QA.
- Teste de transição de estados: adequado para validar o fluxo completo do sistema, como login → catálogo → carrinho → checkout → confirmação.
> Observação: a análise de valor limite não se aplica de forma tão relevante neste contexto, pois não há regras de negócio claras que definam limites estritos para os campos analisados.

## 5. Cenários de Teste

### 5.1 Login
1. Login com usuário válido
2. Login com usuário inválido
3. Login com senha incorreta
4. Login com usuário vazio
5. Login com senha vazia
6. Login com usuário e senha vazios

### 5.2 Catálogo de produtos
1. Exibir lista de produtos corretamente
2. Ordenar produtos por Name (A-Z)
3. Ordenar produtos por Name (Z-A)
4. Ordenar produtos por Price (Low-High)
5. Ordenar produtos por Price (High-Low)
6. Adicionar produto ao carrinho
7. Remover produto do carrinho na página de produtos
8. Adicionar múltiplos produtos
9. Remover um produto mantendo outros
10. Expandir o item e verificar se a descrição e a foto permanecem visíveis

### 5.3 Carrinho
1. Adicionar múltiplos produtos
2. Remover um produto do carrinho
3. Remover todos os produtos do carrinho
4. Continuar comprando
5. Validar quantidade de itens no carrinho
6. Verificar se nome, descrição e preço são os mesmos do catálogo
7. Validar persistência dos produtos ao navegar entre páginas

### 5.4 Checkout
1. Preencher dados válidos
2. Preencher dados incompletos
3. Cancelar checkout
4. Verificar mensagens de erro
5. Validar resumo da compra
6. Validar cálculo do total (Item Total + Tax = Total)
7. Finalizar compra com sucesso
8. Validar que o carrinho é esvaziado após finalizar

### 5.5 Validações gerais
1. Mensagens de erro exibidas corretamente
2. Estado do carrinho persistindo durante o fluxo
3. Navegação entre páginas sem inconsistências

## 6. Casos de Teste Prioridade
### Alta prioridade
- Login com usuário válido
- Adicionar produto ao carrinho
- Finalizar compra com sucesso
- Login com usuário bloqueado

### Média prioridade
- Ordenação de produtos
- Remover produtos do carrinho
- Campo de checkout incompleto

### Baixa prioridade
- Mensagens visuais secundárias
- Elementos de interface não críticos

## 7. Critérios de Aceitação
- Todos os fluxos principais devem funcionar sem falhas críticas
- Erros esperados devem ser exibidos corretamente
- O sistema deve permitir compra completa de forma consistente
- O plano deve ser claro o suficiente para servir como base de demonstração em entrevista

