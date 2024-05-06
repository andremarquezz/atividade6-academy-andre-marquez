#language: pt

Funcionalidade: Detalhes de usuário
  Eu como usuário
  Quero ver os detalhes de um usuário
  Para saber mais sobre ele

  Cenário: Deve ser possível consultar os detalhes de um usuário
    Dado que estou na página de detalhes de um usuário
    Quando eu vejo os detalhes do usuário
    Então eu vejo o nome do usuário
    E eu vejo o email do usuário
    E vejo o ID do usuário

  Cenário: Deve ser exibida uma mensagem de usuário não encontrado
    Dado que estou na página de detalhes de um usuário
    Quando o usuário não for encontrado
    Então eu vejo a mensagem "Usuário não encontrado"
  
  # Cenaŕio: Deve ser possível editar um usuário
  #   Dado que estou na página de detalhes de um usuário
  #   Quando eu clico no botão de editar
  
  # Cenaŕio: Deve retornar a lista de usuarios cadastrados quando o usuario não for encontrado e clicar no botão de cancelar
  #   Dado que estou na página de detalhes de um usuário
  #   Quando o usuário não for encontrado
  #   E eu clico no botão de cancelar
  #   Então eu sou redirecionado para a lista de usuários cadastrados

  # Cenário: Deve liberar os campos para edição quando clicar no botão de editar
  #   Dado que estou na página de detalhes de um usuário
  #   Quando eu clico no botão de editar
  #   Então eu vejo os campos de nome e email liberados para edição