const server = require('./server/server.js')
exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'D:/Udemy/Automação de Testes Mobile com CodeceptJS e Appium/app-release.apk',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'SM N975F+',
        plataformVersion: '11 ',
        //automationName:'UiAutomator2',
        //browserName: 'Chrome',
        fullReset: false,
        noReset: true
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.stop();
  },
  mocha: {},
  timeout: null,
  hooks: [],
  //gherkin: {
  //  features: './features/*.feature',
  //  steps: ['./step_definitions/steps.js']
  //},
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './steps/*_test.js',
  name: 'Automation'
}
