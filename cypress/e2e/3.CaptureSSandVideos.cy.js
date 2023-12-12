describe('Test 3',()=>
{
    /*it("Capture SS", () => {
        cy.visit("www.google.com");
        cy.screenshot("Home page");
        cy.wait(5000);
        cy.get("img[alt='Google']").screenshot("Logo");

    }) */

    it("Capture failures SS and Videos", () => {
        cy.visit("https://demo.opencart.com");

        //Automatically capture SS & video on failure - only when on execute through CLI
        cy.get("li:nth-child(7) a:nth-child(1)").click(); //Camera Page

        cy.get("div[id='content'] h2").should('have.text',"Tablets");
    })
    
})