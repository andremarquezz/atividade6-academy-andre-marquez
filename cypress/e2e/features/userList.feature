#language: pt
Funcionalidade: Listagem de usuários

  Cenário: Ancora para página de cadastro quando a lista de usuários estiver vazia
   Dado que estou na página de listagem de usuários vazia
   Então devo visualizar uma âncora para a página de cadastro de usuários


  Cenário: Mensagem de erro ao consultar a lista de usuários e a API falhar
   Dado que a API de listagem de usuários está offline
   Quando acesso a página de listagem de usuários
   Então devo visualizar uma mensagem de erro informando que não foi possível carregar a lista de usuários

  Contexto: O usuário deve ter acesso à página de listagem de usuários
   Dado que acessei a página de listagem de usuários

  Cenário: Consultar a lista de usuários
   E existem usuários cadastrados
   Então devo visualizar o nome e email de cada usuário

  Cenário: Consultar usuário pela barra de pesquisa através do nome
   E existem usuários cadastrados
   Quando pesquisar por um nome de usuário
   Então devo visualizar o nome e email do usuário pesquisado

  Cenário: Consultar usuário pela barra de pesquisa através do email
   E existem usuários cadastrados
   Quando pesquisar por um email de usuário
   Então devo visualizar o nome e email do usuário pesquisado

  Cenário: Mensagem de erro quando busca por nome de usuário não retornar resultados
   E existem usuários cadastrados
   Quando pesquisar por um nome de usuário que não existe
   Então devo visualizar uma mensagem de erro informando que não foi encontrado nenhum usuário

  Cenário: Mensagem de erro quando busca por email de usuário não retornar resultados
   E existem usuários cadastrados
   Quando pesquisar por um email de usuário que não existe
   Então devo visualizar uma mensagem de erro informando que não foi encontrado nenhum usuário

  Cenário: Limpar campo de pesquisa ao clicar no ícone de limpar e mostrar todos os usuários
   E existem usuários cadastrados
   Quando pesquisar por um nome de usuário
   E clicar no ícone de limpar pesquisa
   Então devo visualizar o nome e email de cada usuário

  Cenário: Consultar usuários da segunda página ao clicar no botão de Próxima página
   E existem usuários cadastrados
   Quando clicar no botão de próxima página
   Então devo visualizar os usuários da segunda página

  Cenário: Navegar entre as páginas de usuários ao clicar nos botões de paginação
   E existem usuários cadastrados
   Quando clicar no botão de próxima página
   E clicar no botão de voltar para a página anterior
   Então devo visualizar o nome e email de cada usuário

  Cenário: Redirecionar para a página de detalhes do usuário ao clicar no botão de detalhes
   E existem usuários cadastrados
   Quando clicar no botão de detalhes de um usuário
   Então devo ser redirecionado para a página de detalhes do usuário