#language: pt

Funcionalidade: Detalhes de usuário

  Cenário: Exibir mensagem de usuário não encontrado
   Dado que acessei a página de detalhes de um usuário que não existe
   Quando o usuário não for encontrado
   Então devo ver a mensagem informando que o usuário não foi encontrado

  Cenário: Redirecionar para página de lista de usuários ao clicar em "Cancelar"
   Dado que acessei a página de detalhes de um usuário que não existe
   Quando o usuário não for encontrado
   E clico no botão 'Cancelar'
   Então devo ser redirecionado para a lista de usuários cadastrados

  Contexto: O usuário deve ter acesso à página de listagem de usuários
   Dado que acessei a página de detalhes do usuário

  Cenário: Consultar os detalhes de um usuário
   Quando visualizo as informações do usuário
   Então devo visualizar o ID, nome e email do usuário
   
  Cenário: Editar o nome de um usuário
   Quando clico no botão 'Editar'
   E os campos de nome e email estão liberados para edição
   E digito um novo nome
   E clico no botão 'Salvar'
   Então devo ver a mensagem informando que a informação foi atualizada com sucesso

  Cenário: Editar o email de um usuário
   Quando clico no botão 'Editar'
   E os campos de nome e email estão liberados para edição
   E digito um novo email
   E clico no botão 'Salvar'
   Então devo ver a mensagem informando que a informação foi atualizada com sucesso

  Cenário: Não editar email de um usuário com email já cadastrado
   Quando clico no botão 'Editar'
   E os campos de nome e email estão liberados para edição
   E digito um email já cadastrado
   E clico no botão 'Salvar'
   Então devo ver a mensagem informando que o email já está em uso
