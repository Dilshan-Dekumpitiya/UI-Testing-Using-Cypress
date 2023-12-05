
describe('My First Test', () => //describe --> Keyword
{
    //can include multiple it blocks
    it('verify title-positive', () =>
        {
        
            cy.visit("https://www.google.com/") //need check website url
            cy.title().should('eq','Google') //check title positive (Pass)

        }
    )

    it('verify title-negative', () =>
        {
          
            cy.visit("https://www.google.com/") //need check website url
            cy.title().should('eq','GOOGLE') //check title positive (Fail)

        }
    )

})
