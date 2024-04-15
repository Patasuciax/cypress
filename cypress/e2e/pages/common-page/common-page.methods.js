import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    static generateRandomString(){
        return ("string" + Math.random().toString(36).slice(2));
    }

    static navigateToTheApplication(){
        cy.clearCookies()
        cy.visit(CommonPageData.applicationUrl)
    }

    static clickOnSignUpOption(){
        CommonPageElements.topMenu.signUp.click()
    }

    static clickOnLoginOption(){
        CommonPageElements.topMenu.login.click()
    }

    static verifySignedUser(username){
        CommonPageElements.topMenu.nameOfUser.should('contain',`Welcome ${username}`)
    }

    static clickOnHomePage(){
        CommonPageElements.topMenu.home.click()
    }

    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click()
    }
    static verifyAlert(expectedMessage){
        cy.on('window:alert',(str)=>{
            expect(str).to.equal(expectedMessage)
        })
    }
}