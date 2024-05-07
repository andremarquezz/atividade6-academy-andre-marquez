#language: pt

 Funcionalidade: Detalhes de usuário
  Eu como usuário
  Quero ver os detalhes de um usuário
  Para saber mais sobre ele

  @createUserDetails
  Cenário: Deve ser possível consultar os detalhes de um usuário
    Dado que acessei a página de detalhes do usuário
    Quando visualizo as informações do usuário
    Então devo visualizar o ID do usuário
    E devo visualizar o nome do usuário
    E devo visualizar o email do usuário

  Cenário: Deve ser exibida uma mensagem de usuário não encontrado
    Dado que acessei a página de detalhes do usuário que não existe
    Quando o usuário não for encontrado
    Então vejo a mensagem que o usuário não foi encontrado

  Cenário:  Deve redirecionar para pagina de lista de usuarios quando o usuario não for encontrado e clicar no botão de cancelar
    Dado que acessei a página de detalhes do usuário que não existe
    Quando o usuário não for encontrado
    E clico no botão de cancelar
    Então  sou redirecionado para a lista de usuários cadastrados

  Cenário: Deve liberar os campos para edição quando clicar no botão de editar
    Dado que acessei a página de detalhes do usuário
    Quando  clico no botão de editar
    Então os campos de nome e email estão liberados para edição
  
  Cenário: Deve ser possível editar o nome de um usuário
    Dado que acessei a página de detalhes do usuário
    Quando clico no botão de editar
    E os campos de nome e email estão liberados para edição
    E digito um novo nome
    E clico no botão de salvar
    Então vejo a mensagem que a informação foi atualizada com sucesso

  Cenário: Deve ser possível editar o email de um usuário
    Dado que acessei a página de detalhes do usuário
    Quando clico no botão de editar
    E os campos de nome e email estão liberados para edição
    E digito um novo email
    E clico no botão de salvar
    Então vejo a mensagem que a informação foi atualizada com sucesso

   