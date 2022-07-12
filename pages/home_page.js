const { I } = inject();

module.exports = {

  button:{
    save: '~salvar'
  },

  fields:{
    code: '~codigo',
    name: '~aluno',
    search: '~search'
  },

  registerStudent(code, name){
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.name, name)
    I.tap(this.button.save)
  },

  searchStudent(search, check){
    I.fillField(this.fields.search, search)
    I.seeElement('//android.view.ViewGroup[@content-desc="' + check + '"]/android.widget.TextView')
  },

  validarLoginSucesso(){
    //aguardar pelo elemento
    I.waitForElement(this.button.save, 5)
    //validar o elemento visível
    I.seeElement(this.button.save)
  }
 
}
