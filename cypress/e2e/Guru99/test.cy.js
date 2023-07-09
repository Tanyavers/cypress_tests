describe ("Tours page", () => {

    it("T-1234 login Tours", () => {
        cy.log("Open Tours page");
        cy.visit("https://demo.guru99.com/test/newtours/");
        cy.log('Enter sysAdmin credentials');
        cy.get('input[name="userName"]')
         .should('be.visible')
         .type('UserName')
        cy.get('input[name="password"]')
         .should('be.visible')
         .type('Uqwe123');
        cy.get('[name="submit"]').children(
            //доступ к вложенным элементам
        )
            .should('be.visible')
            .click()
        cy.url().expect('be.equal',"");
    })
})