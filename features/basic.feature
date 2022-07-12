Feature: Login
  Eu como usuário
  Gostaria de fazer Login na aplicação
  Para acessar o sistema

  Scenario: Login com sucesso 
    Given Eu preencha o email 
    And  Eu preencha a senha 
    When Eu clico no botão Entrar -->
    Then Eu vejo o botão Salvar
