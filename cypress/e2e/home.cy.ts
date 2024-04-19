
describe('Home Suit', () => {

    it('should render the title name', () => {
        cy.visit('http://localhost:3000')
        cy.get('.title').should('have.text','Hafiz Huaru,  Mobile Developer')
    })

    it('should check if the navbar is working', () => {
        cy.visit('http://localhost:3000')
        cy.get('.menu-bar').click()
        cy.wait(2000)
        cy.get('.navlinks ul').should('have.css', 'visibility', 'visible')
    })



})

