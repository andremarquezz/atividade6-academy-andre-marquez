#language: pt


Funcionalidade: Listagem de usuários 
   
  @userList
    # Cenário: Deve ser possivel consultar a lista de usuarios
    #   Dado que acesso a página de listagem de usuários
    #   E existem usuários cadastrados
    #   Então devo visualizar o nome e email de cada usuário

    # Cenário: Deve ser possivel consultar o usuario pela barra de pesquisa através do nome
    #   Dado que acesso a página de listagem de usuários
    #   E existem usuários cadastrados
    #   Quando pesquisar por um nome de usuário
    #   Então devo visualizar o nome e email do usuário pesquisado

    # Cenário: Deve ser possivel consultar o usuario pela barra de pesquisa através do email
    #   Dado que acesso a página de listagem de usuários
    #   E existem usuários cadastrados
    #   Quando pesquisar por um email de usuário
    #   Então devo visualizar o nome e email do usuário pesquisado
@userListEmpty
  Cenário: Deve exibir uma ancora para pagina de cadastro quando a lista de usuarios estiver vazia
    Dado que acesso a página de listagem de usuários vazia
    Então devo visualizar uma ancora para a página de cadastro de usuários
