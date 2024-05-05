#language: pt

@userList
Funcionalidade: Listagem de usuários
  Contexto: O usuario deve ter acesso a página de listagem de usuarios
  Dado que acesso a página de listagem de usuários
   

  Cenário: Deve ser possivel consultar a lista de usuarios
    E existem usuários cadastrados
    Então devo visualizar o nome e email de cada usuário
