const { I } = inject();

module.exports = {

  fields:{
    email: '~email',
    senha: '~senha'
  },

  buttons:{
    enter: '~entrar'
  },

  messages:{
    loginError: '~lognFail'
  },

  doLogin(email, senha){
     //preencher campo de email
     I.fillField(this.fields.email, email)

     //preencher a senha 
     I.fillField(this.fields.senha, senha)
 
     //selecionar o botão entrar 
     I.tap(this.buttons.enter)
  },

  validarLoginInvalido(){
    //aguardar pelo elemento
    I.waitForElement(this.messages.loginError, 5)

    //validar o elemento visível
    I.seeElement(this.messages.loginError)
  }
}
