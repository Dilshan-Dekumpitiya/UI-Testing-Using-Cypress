describe('Test 3',()=>
{
    it("Capture SS and Videos", () => {
        cy.visit("www.google.com");
        cy.screenshot("Home page");
       // cy.wait(5000);
        cy.get("img[alt='Google']").screenshot("Logo");
    })
})