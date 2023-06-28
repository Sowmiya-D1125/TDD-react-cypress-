import "cypress-localstorage-commands";
context('SignIn/SignUp test', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('localapp'))
    })

    it('Create User',()=>{
         cy.get('[data-testid="email"]').type('sowmiya@yopmail.com');
        cy.get('[data-testid="password"]').type('Augusta@12');
        cy.get('[data-testid="sigin-in-btn"').click();
        cy.url().should('include', '/user');
        cy.saveLocalStorage();
        cy.visit('http://localhost:3000/user');

        // cy.get('.user-list tr').should('have.length', 5)
        // cy.get('[data-testid="create-user-btn"').click();
        // cy.get('[id="FirstName-error"]').should('not.exist')
        // cy.get('[data-testid="call-api-btn"').click();
        // cy.wait(300)
        // cy.get('[id="FirstName-error"]').should('exist');
        // cy.get('[data-testid="firstname"]').type('Venkat');
        // cy.get('[data-testid="lastname"]').type('user');
        // cy.get('[data-testid="email"]').type('venki@yopmail.com');
        // cy.get('[data-testid="password"]').type('Augusta@12');
        // cy.get('[data-testid="aadhar"]').type('457808532689');
        // cy.get('[data-testid="pan"]').type('59GU57WH');
        // cy.get('[data-testid="address"]').type('16,cross street');
        // cy.get('[data-testid="contact"]').type('9876424579');
        // cy.get('[data-testid="call-api-btn"').click();
        cy.get('.user-list tr').should('have.length', 5); 
        cy.get('.user-list tr')
        .last().should('contain.text', 'Venkat')


    })
})

