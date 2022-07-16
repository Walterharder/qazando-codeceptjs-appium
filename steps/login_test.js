const home_page = require("../pages/home_page");
const { doLogin } = require("../pages/login_page");
const { I, login_page } = inject()


Feature('login').tag('@Login');

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

    //Utilizando o método doLogin    
    login_page.doLogin('teste@teste.com', '123456')

    //utilizando o método validarLoginSucesso
    home_page.validarLoginSucesso()

    pause()
    I.touchPerform([
        {
            action: 'longPress',

            options: {
                x: 300,
                y: 1100
            },
            action:'moveTo',
            options: {
                x: 300,
                y: 250
            }
        }, {action: 'release' }
    ])

}).tag('@login_sucesso');

Scenario('Login inválido', () => {

    //Utilizando o método doLogin    
    login_page.doLogin('xteste@teste.com', '123456')

    //validar o login com sucesso 
    login_page.validarLoginInvalido()

}).tag('@login_erro');
