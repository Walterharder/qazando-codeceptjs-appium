const home_page = require("../pages/home_page");
const { doLogin } = require("../pages/login_page");
const { I, login_page } = inject()

Feature('login');

BeforeSuite(() => {
    console.log('BeforeSuite')
})

Before(() => {
    console.log('Before')
})

After(() => {
    console.log('After')
})

AfterSuite(() => {
    console.log('AfterSuite')
})

Scenario('Login com sucesso', () => {

    I.r

    //Utilizando o método doLogin    
    login_page.doLogin('teste@teste.com', '123456')

    //utilizando o método validarLoginSucesso
    home_page.validarLoginSucesso()
});

Scenario('Login inválido', () => {

    //Utilizando o método doLogin    
    login_page.doLogin('xteste@teste.com', '123456')

    //validar o login com sucesso 
    login_page.validarLoginInvalido()
});
