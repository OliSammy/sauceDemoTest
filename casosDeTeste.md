# Casos de Teste - SauceDemo

## 1. Login

### LG-01 - Login com usuário válido
- Pré-condição: o usuário está na página de login.
- Entrada: usuário = standard_user; senha = secret_sauce.
- Passos:
  1. Informar o usuário standard_user.
  2. Informar a senha secret_sauce.
  3. Clicar em "LOGIN".
- Resultado esperado: o usuário é autenticado e redirecionado para o catálogo de produtos.

### LG-02 - Login com usuário inválido
- Pré-condição: o usuário está na página de login.
- Entrada: usuário = usuario_inexistente; senha = secret_sauce.
- Passos:
  1. Informar o usuário usuario_inexistente.
  2. Informar a senha secret_sauce.
  3. Clicar em "LOGIN".
- Resultado esperado: a aplicação exibe mensagem de erro informando que as credenciais estão inválidas.

### LG-03 - Login com senha incorreta
- Pré-condição: o usuário está na página de login.
- Entrada: usuário = standard_user; senha = senha_incorreta.
- Passos:
  1. Informar o usuário standard_user.
  2. Informar a senha senha_incorreta.
  3. Clicar em "LOGIN".
- Resultado esperado: o sistema não autentica o usuário e exibe mensagem de erro.

### LG-04 - Login com campos vazios
- Pré-condição: o usuário está na página de login.
- Entrada: usuário = vazio; senha = vazio.
- Passos:
  1. Deixar o campo de usuário vazio.
  2. Deixar o campo de senha vazio.
  3. Clicar em "LOGIN".
- Resultado esperado: o sistema impede o login e exibe mensagem de erro de campos obrigatórios.

## 2. Catálogo de produtos

### CTG-01 - Exibir catálogo corretamente
- Pré-condição: o usuário está autenticado.
- Passos:
  1. Acessar a página inicial do catálogo.
- Resultado esperado: a lista de produtos é exibida com nome, imagem e preço.

### CTG-02 - Adicionar produto ao carrinho
- Pré-condição: o usuário está no catálogo.
- Passos:
  1. Selecionar um produto.
  2. Clicar em "Add to cart".
- Resultado esperado: o produto é adicionado ao carrinho e o contador é atualizado.

### CTG-03 - Remover produto da página de produtos
- Pré-condição: o usuário possui um produto adicionado ao carrinho.
- Passos:
  1. Acessar o catálogo.
  2. Remover o produto diretamente da página de produtos.
- Resultado esperado: o produto é removido do carrinho e o contador é atualizado.

### CTG-04 - Ordenar produtos por preço e nome
- Pré-condição: o usuário está autenticado e no catálogo.
- Passos:
  1. Abrir o seletor de ordenação.
  2. Selecionar a opção "Price (low to high)".
  3. Verificar a ordem dos produtos.
  4. Selecionar a opção "Name (A to Z)".
  5. Verificar a nova ordem dos produtos.
- Resultado esperado: os produtos são exibidos em ordem correta conforme a opção selecionada.

### CTG-05 - Expandir item e verificar descrição e imagem
- Pré-condição: o usuário está autenticado e no catálogo.
- Passos:
  1. Clicar no item desejado para abrir a visualização detalhada.
  2. Verificar se a descrição do produto é exibida.
  3. Verificar se a imagem do produto permanece visível.
- Resultado esperado: o item expandido exibe corretamente a descrição e a imagem do produto.

## 3. Carrinho de compras

### CR-01 - Adicionar múltiplos produtos ao carrinho
- Pré-condição: o usuário está no catálogo.
- Passos:
  1. Adicionar dois ou mais produtos ao carrinho.
- Resultado esperado: todos os produtos aparecem no carrinho corretamente.

### CR-02 - Remover produto do carrinho
- Pré-condição: o usuário possui produtos no carrinho.
- Passos:
  1. Acessar o carrinho.
  2. Clicar em remover para um item.
- Resultado esperado: o item é removido e o valor total é recalculado.

### CR-03 - Validar valor total do carrinho
- Pré-condição: o usuário adicionou produtos ao carrinho.
- Passos:
  1. Acessar o carrinho.
  2. Verificar o valor total exibido.
- Resultado esperado: o valor total corresponde à soma dos produtos adicionados.

## 4. Checkout

### CK-01 - Checkout com dados válidos
- Pré-condição: o usuário possui produtos no carrinho.
- Passos:
  1. Iniciar o checkout.
  2. Preencher todos os campos obrigatórios corretamente.
  3. Finalizar a compra.
- Resultado esperado: a compra é concluída com sucesso e a página de confirmação é exibida.

### CK-02 - Checkout com dados incompletos
- Pré-condição: o usuário possui produtos no carrinho.
- Passos:
  1. Iniciar o checkout.
  2. Deixar um campo obrigatório vazio.
  3. Tentar continuar.
- Resultado esperado: o sistema impede o avanço e exibe mensagem de erro.

### CK-03 - Cancelar checkout
- Pré-condição: o usuário está na tela de checkout.
- Passos:
  1. Clicar em "Cancel".
- Resultado esperado: o usuário retorna para o carrinho sem concluir a compra.

## 5. Validações gerais

### GV-01 - Mensagens de erro exibidas corretamente
- Pré-condição: o usuário tenta executar uma ação inválida.
- Passos:
  1. Realizar uma ação que gere erro.
- Resultado esperado: a mensagem de erro é exibida de forma clara e consistente.

### GV-02 - Persistência do estado do carrinho
- Pré-condição: o usuário adicionou produtos ao carrinho.
- Passos:
  1. Navegar entre páginas do fluxo.
- Resultado esperado: o estado do carrinho permanece consistente durante a navegação.
