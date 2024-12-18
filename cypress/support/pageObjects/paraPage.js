import data from '../../fixtures/locators.json'
import {CommonActions} from '../actions/commonActions'

const sharedContext = new CommonActions()

export class ParaPage{
    
    clickRegister(){
        sharedContext.click(data.register)
    }
    enterFirstname(){
        sharedContext.enterInputField(data.firstName, 'clara')
    }
    enterLastname(){
        sharedContext.enterInputField(data.lastName, 'Teflon')
    }
    enterAddress(){
        sharedContext.enterInputField(data.street, 'Avenue')
    }
    enterCity(){
        sharedContext.enterInputField(data.city, 'lagos')
    }
    enterstate(){
        sharedContext.enterInputField(data.state, 'lagos')
    }
    enterZipcode(){
        sharedContext.enterInputField(data.zipCode, '10045')
    }
    enterPhoneNumber(){
        sharedContext.enterInputField(data.phoneNumber, '08160907089')
    }
    enterSsn(){
        sharedContext.enterInputField(data.ssn, '7605')
    }
    enterUsername(){
        sharedContext.enterInputField(data.username, 'clara')
    }
    enterPassword(){
        sharedContext.enterInputField(data.password, '@Qwertyui11')
    }
    enterConfirmPassword(){
        sharedContext.enterInputField(data.confirmPassword, '@Qwertyui11')
    }
    clickSubmit(){
        sharedContext.click(data.submit)
    }
    enterUsernameLogin(){
        sharedContext.enterInputField(data.loginUsername, 'clara')
    }
    enterPasswordLogin(){
        sharedContext.enterInputField(data.loginpassword, '@Qwertyui11')
    }
    enterinvalidPassword(){
        sharedContext.enterInputField(data.loginpassword, 'Qwertyui11')
    }
    clickLoginBtn(){
        sharedContext.click(data.loginBtn)
    }
    clickOpenAccount(){
        sharedContext.click(data.openAccount)
    }
    selectAcctType(){
        sharedContext.click(data.acctType)
    }
    selectPayerAcct(){
        sharedContext.selectField(data.payerAcct)

    }
    clickSubmitBtn(){
        sharedContext.click(data.submitOpenAcct)

    }
    clickRequestloan(){
        sharedContext.click(data.requestLoan)
    
    }
    enterLoanAmount(){
        sharedContext.enterInputField(data.loanAmount, '5000')

    }
    enterDownpayment(){
        sharedContext.enterInputField(data.downPayment, '300')

    }
    selectFromAccount(){
        sharedContext.enterInputField(data.fromAccount, )

    }
    clickApplyBtn(){
        sharedContext.click(data.ApplyBtn)

    }
    clickTransferFunds(){
        sharedContext.click(data.transferFunds)

    }
    enterAmount(){
        sharedContext.enterInputField(data.amount, '5000')

    }
    selectRecipient(){
        sharedContext.click(data.recipient)

    }
    clickTransferBtn(){
        sharedContext.click(data.transferBtn)

    }
    
    
    


}

