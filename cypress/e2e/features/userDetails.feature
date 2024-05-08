#language: pt

Funcionalidade: Detalhes de usuário
  Contexto: O usuário deve ter acesso à página de listagem de usuários
   Dado que acessei a página de detalhes do usuário

  Cenário: Deve consultar os detalhes de um usuário
   Quando visualizo as informações do usuário
   Então devo visualizar o ID, nome e email do usuário

  Cenário: Deve editar o nome de um usuário
   Quando clico no botão 'Editar'
   E os campos de nome e email estão liberados para edição
   E digito um novo nome
   E clico no botão 'Salvar'
   Então devo ver a mensagem informando que a informação foi atualizada com sucesso

  Cenário: Deve editar o email de um usuário
   Quando clico no botão 'Editar'
   E os campos de nome e email estão liberados para edição
   E digito um novo email
   E clico no botão 'Salvar'
   Então devo ver a mensagem informando que a informação foi atualizada com sucesso

  Cenário: Não deve editar email de um usuário com email já cadastrado
   Quando clico no botão 'Editar'
   E os campos de nome e email estão liberados para edição
   E digito um email já cadastrado
   E clico no botão 'Salvar'
   Então devo ver a mensagem informando que o email já está em uso

  @userNotFound
  Cenário: Deve exibir mensagem de usuário não encontrado
   Quando o usuário não for encontrado
   Então devo ver a mensagem informando que o usuário não foi encontrado
  @userNotFound
  Cenário: Deve redirecionar para página de lista de usuários ao clicar em "Cancelar"
   Quando o usuário não for encontrado
   E clico no botão 'Cancelar'
   Então devo ser redirecionado para a lista de usuários cadastrados
