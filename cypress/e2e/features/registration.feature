#language: pt

 Funcionalidade: Cadastro de usuário

  Contexto: O usuario deve ter acesso a página de cadastro
   Dado que estou na página de cadastro

  Cenário: Cadastro de usuário com sucesso
   Quando preencher os campos nome e email
   E clicar no botão de Salvar
   Então devo ver a mensagem de sucesso

  Cenário: Não preenchimento do campo de nome
   Quando não preencher o campo nome
   E preencher o campo email com um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o nome é obrigatório

  Cenário: Não preenchimento do campo de email
   Quando preencher o campo nome com um nome válido
   E não preencher o campo email
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email é obrigatório

  Cenário: Preenchimento incorreto do campo de nome com menos de 4 caracteres
   Quando preencher o campo nome "Jey"
   E preencher o campo email com um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o nome deve ter pelo menos 4 letras

  Cenário: Preenchimento incorreto do campo de nome com numeros no nome
   Quando preencher o campo nome "Jey32"
   E preencher o campo email com um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o formato do nome é inválido

  Cenário: Preenchimento incorreto do campo de nome com mais de 100 caracteres
   Quando preencher o campo nome com mais de 100 caracteres
   E preencher o campo email com um email válido
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o nome deve ter no máximo 100 caracteres

  Cenário: Preenchimento incorreto do campo de email com email inválido
   Quando preencher o campo nome com um nome válido
   E preencher o campo email "jey.com"
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email é inválido

  Cenário: Preenchimento incorreto do campo de email com email com mais de 60 caracteres
   Quando preencher o campo nome com um nome válido
   E preencher o campo email com um email com mais de 60 caracteres
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email deve ter no máximo 60 caracteres

  Cenário: Preenchimento incorreto do campo de email com email já cadastrado
   Quando preencher o campo nome com um nome válido
   E preencher o campo email com um email já cadastrado
   E clicar no botão de Salvar
   Então devo ver a mensagem de erro indicando que o email já está cadastrado

# Funcionalidade: Validação dos campos de cadastro de usuário
  Cenário: Retornar para a pagina de listagem de usuários
   Quando clicar no botão de Voltar
   Então devo ver a página de listagem de usuários



  
