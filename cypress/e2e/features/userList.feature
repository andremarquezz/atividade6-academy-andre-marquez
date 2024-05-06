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

  Cenário: Deve exibir uma mensagem de erro quando a busca por nome de usuario não retornar resultados
    Dado que acesso a página de listagem de usuários
    E existem usuários cadastrados
    Quando pesquisar por um nome de usuário que não existe
    Então devo visualizar uma mensagem de erro informando que não foi encontrado nenhum usuário

  Cenário: Deve exibir uma mensagem de erro quando a busca por email de usuario não retornar resultados

  Cenaŕio: Deve exibir mensagem de erro ao tentar consultar a lista de usuarios e a API falhar
  Cenaŕio: Deve limpar o campo de pesquisa ao clicar no icone de limpar e mostrar todos os usuarios
  Cenaŕio: Deve ser possível consultar os usuários da segunda página ao clicar no botão de Proxima página
  Cenaŕio: Deve ser possível navegar entre as páginas de usuários ao clicar nos botões de paginação
  Cenaŕio: Deve redirecionar para a página de detalhes do usuário ao clicar no botão de detalhes