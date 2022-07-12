const { I } = inject();
// Add in your custom step files

Given('Eu preencha o email', () => {
   I.fillField('~email', 'teste@teste.com')
});

Given('Eu preencha a senha', () => {
  I.fillField('~senha', '123456')
});

When('Eu clico no botão Entrar -->', () => {
  I.tap('~entrar')
});

Then('Eu vejo o botão Salvar', () => {
   I.waitForElement('~salvar', 5)
   I.seeElement('~salvar')
});
