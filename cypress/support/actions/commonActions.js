/// <reference types="cypress" />

export class CommonActions{

    click(locator){
        cy.get(locator).click();
    }
    
    clickIndx(locator, index){
        cy.get(locator).eq(index).click()
    }

    enterInputField(locator, input){
        cy.get(locator).clear().type(input)
    }

    enterInputFieldIndx(locator, index, input){
        cy.get(locator).eq(index).clear().type(input)
    }

    verifyAlert(locator, errorText){
        cy.get(locator)
        .should('be.visible')
        .should('include.text', errorText)
    }

    verifyURLNavigation(url){
        cy.url().should('eq', url)
    }

    clickContain(locator, input){
        cy.get(locator).contains(input).click()
    }
    
    selectField(locator, input){
        cy.get(locator).select(input)

    }

    

    
}