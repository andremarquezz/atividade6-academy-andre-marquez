#language: pt
 Funcionalidade: Listagem de usuários

  Cenário: Deve ser possivel consultar a lista de usuarios
   Dado que acesso a página de listagem de usuários
   E existem usuários cadastrados
   Então devo visualizar o nome e email de cada usuário
 
  Cenário: Deve ser possivel consultar o usuario pela barra de pesquisa através do nome
   Dado que acesso a página de listagem de usuários
   E existem usuários cadastrados
   Quando pesquisar por um nome de usuário
   Então devo visualizar o nome e email do usuário pesquisado

  Cenário: Deve ser possivel consultar o usuario pela barra de pesquisa através do email
   Dado que acesso a página de listagem de usuários
   E existem usuários cadastrados
   Quando pesquisar por um email de usuário
   Então devo visualizar o nome e email do usuário pesquisado

 
  Cenário: Deve exibir uma ancora para pagina de cadastro quando a lista de usuarios estiver vazia
   Dado que acesso a página de listagem de usuários vazia
   Então devo visualizar uma ancora para a página de cadastro de usuários
 
  Cenário: Deve exibir uma mensagem de erro quando a busca por nome de usuario não retornar resultados
   Dado que acesso a página de listagem de usuários
   E existem usuários cadastrados
   Quando pesquisar por um nome de usuário que não existe
   Então devo visualizar uma mensagem de erro informando que não foi encontrado nenhum usuário


  Cenário: Deve exibir uma mensagem de erro quando a busca por email de usuario não retornar resultados
   Dado que acesso a página de listagem de usuários
   E existem usuários cadastrados
   Quando pesquisar por um email de usuário que não existe
   Então devo visualizar uma mensagem de erro informando que não foi encontrado nenhum usuário

  Cenário: Deve exibir mensagem de erro ao tentar consultar a lista de usuarios e a API falhar
   Dado que a API de listagem de usuários esta offline
   E que acesso a página de listagem de usuários
   Então devo visualizar uma mensagem de erro informando que não foi possível carregar a lista de usuários

  Cenário: Deve limpar o campo de pesquisa ao clicar no icone de limpar e mostrar todos os usuarios
   Dado que acesso a página de listagem de usuários
   E existem usuários cadastrados
   Quando pesquisar por um nome de usuário
   E clicar no icone de limpar pesquisa
   Então devo visualizar o nome e email de cada usuário

  Cenário: Deve ser possível consultar os usuários da segunda página ao clicar no botão de Proxima página
   Dado que acesso a página de listagem de usuários
   E existem usuários cadastrados
   Quando clicar no botão de próxima página
   Então devo visualizar os usuários da segunda página

  Cenário: Deve ser possível navegar entre as páginas de usuários ao clicar nos botões de paginação
   Dado que acesso a página de listagem de usuários
   E existem usuários cadastrados
   Quando clicar no botão de próxima página
   E clicar no botão de voltar para página anterior
   Então devo visualizar o nome e email de cada usuário

  Cenário: Deve redirecionar para a página de detalhes do usuário ao clicar no botão de detalhes
   Dado que acesso a página de listagem de usuários
   E existem usuários cadastrados
   Quando clicar no botão de detalhes de um usuário
   Então devo ser redirecionado para a página de detalhes do usuário