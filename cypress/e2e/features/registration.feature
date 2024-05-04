#language: pt

  Funcionalidade: Cadastro de usuário
  Como um usuário
  Eu quero me cadastrar

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
  
