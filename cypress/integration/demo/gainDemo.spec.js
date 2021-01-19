/// <reference types="cypress" />


describe("Testing Gain Demo API endpoints", () => {
    it("Test Get Request", () => {
        cy.request({
            method: 'GET',
            url: 'https://gaindemoapi.azurewebsites.net/api/values/1',
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response).property('status').to.equal(200)
                expect(response).property('body').to.contain('Yirga')
            })


    })

})