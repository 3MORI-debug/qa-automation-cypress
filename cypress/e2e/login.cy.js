describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  describe('Cenários positivos', () => {
    it('Login com sucesso', () => {
      cy.login('standard_user', 'secret_sauce')
      cy.url().should('include', '/inventory')
    })
  })

  describe('Cenários negativos', () => {

    it('Senha inválida', () => {
      cy.login('standard_user', 'errado')
      cy.contains('Username and password do not match')
    })

    it('Usuário bloqueado', () => {
      cy.login('locked_out_user', 'secret_sauce')
      cy.contains('locked out')
    })

    it('Campos vazios', () => {
      cy.get('[data-test="login-button"]').click()
      cy.contains('Username is required')
    })

  })

})
