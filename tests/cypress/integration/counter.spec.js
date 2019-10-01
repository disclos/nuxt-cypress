describe('Home', () => {
	it('contains "Hello world!"', () => {
		cy.visit('/')
		cy.contains('Hello world!')
		cy.get('button').click()
		cy.get('span').should('contain', '1')
	})
})
