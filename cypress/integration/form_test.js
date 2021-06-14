describe('Text may be inputed', () => {
    it('can receive text input', () => {
        cy.visit('localhost:3000/pizza');
        cy.get('#name-input')
        .type('Jane Doe').should('have.value', 'Jane Doe');
    })
})

describe('Multiple toppings may be selected', () => {
    it('can check multiple toppings', () => {
        cy.visit('localhost:3000/pizza');
        cy.get('[type="checkbox"]')
        .check({force: true})
        .should('be.checked')
    })
})

describe('Order may be submitted', () => {
    it('Posts submitted object', () => {
        cy.visit('localhost:3000/pizza');
        cy.get('#pizza-form').submit()
    })
})