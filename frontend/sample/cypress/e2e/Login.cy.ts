import "cypress-localstorage-commands";
context('SignIn/SignUp test', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('localapp'))
    })

    it('visibility check', () => {
        cy.get('[data-testid="email"]').should('be.visible');
        cy.get('[data-testid="password"]').should('be.visible');
        cy.get('[data-testid="sigin-in-btn"').should('be.visible');
        cy.get('[data-testid="errmsg"').should('not.be.visible');
        cy.get('[data-testid="sigin-in-btn"').should('be.disabled');
    })
    // it('Sign-In button should be enabled when both email and password are filled', () => {
    //     cy.get('[data-testid="email"]').type('dummytext');
    //     cy.get('[data-testid="sigin-in-btn"').should('be.disabled');
    //     cy.get('[data-testid="password"]').type('dummytext');
    //     cy.get('[data-testid="sigin-in-btn"').should('be.enabled');
    // });

    // it('enter inavlid email and password', () => {
    //     cy.get('[data-testid="email"]').type('dummyemail');
    //     cy.get('[data-testid="password"]').type('dummypassword');
    //     cy.get('[data-testid="sigin-in-btn"').click();
    //     cy.get('[data-testid="errmsg"').should('be.visible');
    //     cy.get('[data-testid="errmsg"').should('contain', 'Please Check And Enter A Valid Email ID');
    // });

    // it('enter valid email and invalid password', () => {
    //     cy.get('[data-testid="email"]').clear();
    //     cy.get('[data-testid="email"]').type('sowmiya@yopmail.com');
    //     cy.get('[data-testid="password"]').type('dummypassword');
    //     cy.get('[data-testid="errmsg"').should('not.be.visible');
    //     cy.get('[data-testid="sigin-in-btn"').click();
    //     cy.get('[data-testid="errmsg"').should('be.visible');
    //     cy.get('[data-testid="errmsg"').should('contain', 'Incorrect Password');
    // })

    it('Enter with valid credentials', () => {
        cy.get('[data-testid="email"]').type('sowmiya@yopmail.com');
        cy.get('[data-testid="password"]').type('Augusta@12');
        cy.get('[data-testid="sigin-in-btn"').click();
        cy.url().should('include', '/user');
        cy.saveLocalStorage();
    });
})

context('check navbar',()=>{
    it('should render navbar menus',()=>{
        cy.restoreLocalStorage();
        cy.visit('http://localhost:3000/user');
        cy.get('[data-testid="appname"]').should('contain', 'Shopee');
        cy.get('[data-testid="menu"]').should('contain', 'User');
        cy.get('[data-testid="menu"]').should('contain', 'Products');
        cy.get('[data-testid="menu"]').should('contain', 'Account');
        cy.get('[data-testid="menu"]').should('contain', 'Cart');
    })

    it('page should render when menu are clicked',()=>{
        cy.restoreLocalStorage();
        cy.visit('http://localhost:3000/user');
        
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/user');
          })
        cy.get('[data-testid="User"]').should('have.css', 'border-bottom', '2px solid rgb(0, 0, 0)');
        cy.get('[data-testid="Products"]').should('have.css', 'border-bottom', '0px none rgb(0, 0, 238)');

        cy.get('[data-testid="Products"').click();
        cy.location('pathname').should('include', 'product');
        cy.location('pathname').should('not.include', 'user')
        cy.get('[data-testid="User"]').should('have.css', 'border-bottom', '0px none rgb(0, 0, 238)');
        cy.get('[data-testid="Products"]').should('have.css', 'border-bottom', '2px solid rgb(0, 0, 0)');
        
    })

    it('Create User',()=>{
        cy.restoreLocalStorage();
        cy.visit('http://localhost:3000/user');
        cy.get('[data-testid="create-user-btn"').click();
        cy.get('[data-testid="firstname"]').first().should('not.have.text', 'First name must have at least 2 letters')
        cy.get('[data-testid="call-api-btn"').click();
        cy.get('[data-testid="firstname"]').should('have.text', 'First name must have at least 2 letters')

    })
})

// context('checking logout functionality',()=>{
   
//     it('logout',()=>{
//         cy.restoreLocalStorage();
//         cy.visit('http://localhost:3000/user');
//         cy.get('[data-testid="logoutBtn"').should('be.visible');
//         cy.get('[data-testid="logoutBtn"').click();
//         cy.clearLocalStorage().should(localStorage => {
//             expect(localStorage.getItem('token')).to.be.null;
//         });


//     })
// })

