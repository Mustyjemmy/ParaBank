/// <reference types="Cypress" />

import { PageManager } from '../support/pageManager/pageManager'

const pageManager = new PageManager()

describe('paraBank test', ()=>{
    it('signUpTest', function(){
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        pageManager.onParaPage().clickRegister()
        pageManager.onParaPage().enterFirstname()
        pageManager.onParaPage().enterLastname()
        pageManager.onParaPage().enterAddress()
        pageManager.onParaPage().enterCity()
        pageManager.onParaPage().enterstate()
        pageManager.onParaPage().enterZipcode()
        pageManager.onParaPage().enterPhoneNumber()
        pageManager.onParaPage().enterSsn()
        pageManager.onParaPage().enterUsername()
        pageManager.onParaPage().enterPassword()
        pageManager.onParaPage().enterConfirmPassword()
        pageManager.onParaPage().clickSubmit()
        cy.get('#rightPanel p').should('have.text', 'Your account was created successfully. You are now logged in.');


    })
    
   
})

describe('test suite', () => {
    
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    });

    it('invalid login', () => {
        pageManager.onParaPage().enterUsernameLogin();
        pageManager.onParaPage().enterinvalidPassword();
        pageManager.onParaPage().clickLoginBtn();
        cy.get(".error").contains('The username and password could not be verified.');

    });

    it('valid login', () => {
        pageManager.onParaPage().enterUsernameLogin();
        pageManager.onParaPage().enterPasswordLogin();
        pageManager.onParaPage().clickLoginBtn();
    });
});


describe('test suite', ()=>{
    beforeEach(function(){
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        pageManager.onParaPage().enterUsernameLogin()
        pageManager.onParaPage().enterPasswordLogin()
        pageManager.onParaPage().clickLoginBtn()
    
    })
    it('open Account', ()=>{
        pageManager.onParaPage().clickOpenAccount()
        pageManager.onParaPage().selectAcctType()
        pageManager.onParaPage().clickSubmitBtn()
        cy.get('#openAccountResult p').should('have.text', 'Congratulations, your account is now open.');


    })
    it('transfer funds', ()=>{
        pageManager.onParaPage().clickTransferFunds()
        pageManager.onParaPage().enterAmount()
        pageManager.onParaPage().selectPayerAcct()
        pageManager.onParaPage().selectRecipient()
        pageManager.onParaPage().clickTransferBtn()
    })

    it('request loan', ()=>{
        pageManager.onParaPage().clickRequestloan()
        pageManager.onParaPage().enterLoanAmount()
        pageManager.onParaPage().enterDownpayment()
        //pageManager.onParaPage().selectFromAccount()
        pageManager.onParaPage().clickApplyBtn()


   })
    
   

    
});



