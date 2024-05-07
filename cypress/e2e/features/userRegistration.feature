#language: pt
Funcionalidade: Cadastro de usuário

 Contexto: O usuário deve ter acesso à página de cadastro
  Dado que acessei a página de cadastro

 Cenário: Deve ser possível cadastrar um usuário com sucesso
   Quando preencher um nome válido e um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de sucesso

 Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuário com email inválido
   Quando preencher um nome válido
   E preencher um email inválido "<email>"
   Exemplos:
    | email      |
    | @          |
    | jey@       |
    | jey@gmail  |
    | @gmail.com |
    | jey@.com   |
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email é inválido

 Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuário sem nome
   Quando não preencher o nome
   E preencher um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o nome é obrigatório

 Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuário sem email
   Quando preencher um nome válido
   E não preencher o email
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email é obrigatório

 Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuário com nome com menos de 4 caracteres
   Quando preencher um nome com menos de 4 caracteres
   E preencher um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o nome deve ter pelo menos 4 letras

 Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuário com número no nome
   Quando preencher um nome com números
   E preencher um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o formato do nome é inválido

 Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuário com nome com mais de 100 caracteres
   Quando preencher um nome com mais de 100 caracteres
   E preencher um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o nome deve ter no máximo 100 caracteres

 Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuário com email com mais de 60 caracteres
   Quando preencher um nome válido
   E preencher um email com mais de 60 caracteres
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email deve ter no máximo 60 caracteres

 Cenário: Deve exibir mensagem de erro ao tentar cadastrar um usuário com email já cadastrado
   Quando preencher um nome válido
   E preencher um email já cadastrado
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email já está cadastrado

 Cenário: Deve redirecionar para a tela de listagem de usuários ao clicar no botão Voltar
   Quando clicar no botão de Voltar
   Então devo ver a página de listagem de usuários

 Cenário: Deve redirecionar para a tela de listagem de usuários ao clicar no ícone da Raro
   Quando clicar no ícone da Raro
   Então devo ver a página de listagem de usuários
