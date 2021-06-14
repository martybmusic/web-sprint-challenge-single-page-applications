describe('Text may be inputed', () => {
    it('can receive text input', () => {
        cy.visit('localhost:3000/pizza');
        cy.get('#name-input')
        .type('Jane Doe').should('have.value', 'Jane Doe');
    })
})