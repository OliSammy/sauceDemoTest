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

### LG-04 - Login com usuário vazio
- Pré-condição: o usuário está na página de login.
- Entrada: usuário = vazio; senha = secret_sauce.
- Passos:
  1. Deixar o campo de usuário vazio.
  2. Informar a senha secret_sauce.
  3. Clicar em "LOGIN".
- Resultado esperado: o sistema impede o login e exibe mensagem de erro de campos obrigatórios.

### LG-05 - Login com senha vazia
- Pré-condição: o usuário está na página de login.
- Entrada: usuário = standard_user; senha = vazio.
- Passos:
  1. Informar o usuário standard_user.
  2. Deixar o campo de senha vazio.
  3. Clicar em "LOGIN".
- Resultado esperado: o sistema impede o login e exibe mensagem de erro de campos obrigatórios.

### LG-06 - Login com usuário e senha vazios
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
- Resultado esperado: o produto é adicionado ao carrinho, o contador é atualizado e o botão deve ser "Remove".

### CTG-03 - Remover produto da página de produtos
- Pré-condição: o usuário possui um produto adicionado ao carrinho.
- Passos:
  1. Acessar o catálogo.
  2. Remover o produto diretamente da página de produtos.
- Resultado esperado: o produto é removido do carrinho e o contador é atualizado.

### CTG-04 - Ordenar produtos por todas as opções disponíveis
- Pré-condição: o usuário está autenticado e no catálogo.
- Passos:
  1. Abrir o seletor de ordenação.
  2. Selecionar a opção "Name (A to Z)".
  3. Verificar a ordem alfabética.
  4. Selecionar a opção "Name (Z to A)".
  5. Verificar a ordem reversa.
  6. Selecionar a opção "Price (low to high)".
  7. Verificar a ordem crescente por preço.
  8. Selecionar a opção "Price (high to low)".
  9. Verificar a ordem decrescente por preço.
- Resultado esperado: os produtos são exibidos em ordem correta conforme cada opção selecionada.

### CTG-05 - Expandir item e verificar descrição e imagem
- Pré-condição: o usuário está autenticado e no catálogo.
- Passos:
  1. Clicar no item desejado para abrir a visualização detalhada.
  2. Verificar se a descrição do produto é exibida.
  3. Verificar se a imagem do produto permanece visível.
- Resultado esperado: o item expandido exibe corretamente a descrição e a imagem do produto.

### CTG-06 - Adicionar múltiplos produtos
- Pré-condição: o usuário está autenticado e no catálogo.
- Passos:
  1. Adicionar 3 produtos diferentes ao carrinho.
- Resultado esperado: o contador do carrinho exibe o valor 3.

### CTG-07 - Remover um produto mantendo outros
- Pré-condição: o usuário adicionou 3 produtos ao carrinho.
- Passos:
  1. Remover um dos produtos adicionados.
- Resultado esperado: o contador passa para 2 e os demais produtos continuam presentes.

## 3. Carrinho de compras

### CR-01 - Adicionar múltiplos produtos ao carrinho
- Pré-condição: o usuário está no catálogo.
- Passos:
  1. Adicionar dois ou mais produtos ao carrinho.
- Resultado esperado: todos os produtos aparecem no carrinho corretamente.

### CR-02 - Remover um produto do carrinho
- Pré-condição: o usuário possui dois ou mais produtos no carrinho.
- Passos:
  1. Acessar o carrinho.
  2. Clicar em remover para um dos itens.
- Resultado esperado: o item selecionado é removido e os demais permanecem no carrinho.

### CR-03 - Remover todos os produtos do carrinho
- Pré-condição: o usuário possui produtos no carrinho.
- Passos:
  1. Acessar o carrinho.
  2. Remover todos os itens disponíveis.
- Resultado esperado: o carrinho fica vazio e não exibe produtos.

### CR-04 - Continuar comprando
- Pré-condição: o usuário está no carrinho com produtos adicionados.
- Passos:
  1. Clicar em "Continue Shopping".
- Resultado esperado: o usuário retorna ao catálogo de produtos.

### CR-05 - Validar quantidade de itens no carrinho
- Pré-condição: o usuário adicionou produtos ao carrinho.
- Passos:
  1. Verificar o indicador de quantidade do carrinho.
- Resultado esperado: a quantidade exibida corresponde ao número de itens adicionados.

### CR-06 - Verificar nome, descrição e preço no carrinho
- Pré-condição: o usuário adicionou produtos ao carrinho.
- Passos:
  1. Acessar o carrinho.
  2. Verificar nome, descrição e preço de cada produto.
- Resultado esperado: as informações exibidas no carrinho correspondem às do catálogo.

### CR-07 - Validar persistência dos produtos ao navegar entre páginas
- Pré-condição: o usuário adicionou produtos ao carrinho.
- Passos:
  1. Navegar para outra página do fluxo.
  2. Voltar ao carrinho.
- Resultado esperado: os produtos continuam presentes no carrinho após a navegação.

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

### CK-04 - Verificar mensagens de erro no checkout
- Pré-condição: o usuário possui produtos no carrinho e está na tela de checkout.
- Passos:
  1. Tentar prosseguir com um ou mais campos obrigatórios vazios.
  2. Observar as mensagens exibidas.
- Resultado esperado: as mensagens de erro aparecem de forma clara e impedem a continuação do fluxo.

### CK-05 - Validar resumo da compra
- Pré-condição: o usuário possui produtos no carrinho e preencheu os dados de checkout.
- Passos:
  1. Avançar para a tela de revisão da compra.
  2. Verificar os itens, quantidades e valores exibidos.
- Resultado esperado: o resumo apresenta corretamente os produtos adicionados e os valores esperados.

### CK-06 - Validar cálculo do total
- Pré-condição: o usuário está na tela de revisão da compra.
- Passos:
  1. Identificar o valor do Item Total.
  2. Identificar o valor da Tax.
  3. Comparar com o valor do Total exibido.
- Resultado esperado: a soma do Item Total com a Tax corresponde ao Total apresentado.

### CK-07 - Finalizar compra com sucesso
- Pré-condição: o usuário possui produtos no carrinho e os dados de checkout foram preenchidos corretamente.
- Passos:
  1. Confirmar a compra.
- Resultado esperado: a compra é finalizada com sucesso e a tela de confirmação é exibida.

### CK-08 - Validar que o carrinho é esvaziado após finalizar
- Pré-condição: o usuário concluiu a compra com sucesso.
- Passos:
  1. Acessar o carrinho após a confirmação.
- Resultado esperado: o carrinho aparece vazio e o contador de itens retorna para zero.

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
