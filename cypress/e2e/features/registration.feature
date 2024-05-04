#language: pt

  Funcionalidade: Cadastro de usuário
  Como um usuário
  Eu quero me cadastrar

  Cenário: Cadastro de usuário com sucesso
  Dado que eu estou na página de cadastro
  Quando eu preencher os campos nome e email
  E clicar no botão de Salvar
  Então eu devo ver a mensagem de sucesso




  # Cenário: Cadastro de usuário com falha
  # Dado que eu estou na página de cadastro
  # Quando eu preencher os campos nome e email
  # | Nome | Email |
  # | João |       |