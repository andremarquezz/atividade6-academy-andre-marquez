#language: pt
 Funcionalidade: Cadastro de usuário

  Contexto: O usuario deve ter acesso a página de cadastro
   Dado que estou na página de cadastro

  Cenário: Deve ser possivel cadastrar um usuario com sucesso
   Quando preencher o nome e email
   E clicar no botão de Salvar
   Então devo ver a mensagem de sucesso

  Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuario sem nome
   Quando não preencher o nome
   E preencher o email com um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o nome é obrigatório

  Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuario sem email
   Quando preencher o nome com um nome válido
   E não preencher o email
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email é obrigatório

  Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuario com nome com menos de 4 caracteres
   Quando preencher o nome "Jey"
   E preencher o email com um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o nome deve ter pelo menos 4 letras

  Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuario com numero no nome
   Quando preencher o nome "Jey32"
   E preencher o email com um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o formato do nome é inválido

  Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuario com nome com mais de 100 caracteres
   Quando preencher o nome com mais de 100 caracteres
   E preencher o email com um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o nome deve ter no máximo 100 caracteres

  Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuario com email invalido
   Quando preencher o nome com um nome válido
   E preencher o email "jey.com"
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email é inválido

  Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuario com email com mais de 60 caracteres
   Quando preencher o nome com um nome válido
   E preencher o email com um email com mais de 60 caracteres
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email deve ter no máximo 60 caracteres

  Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuario com email ja cadastrado
   Quando preencher o nome com um nome válido
   E preencher o email com um email já cadastrado
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email já está cadastrado

  Cenário: Deve redirecionar para a tela de listagem de usuarios ao clicar no botão Voltar
   Quando clicar no botão de Voltar
   Então devo ver a página de listagem de usuários

  Cenário: Deve redirecionar para a tela de listagem de usuarios ao clicar no icone da Raro
   Quando clicar no icone da Raro
   Então devo ver a página de listagem de usuários