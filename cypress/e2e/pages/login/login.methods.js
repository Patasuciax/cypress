import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val',username)
    }
    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val',password)
    }
    static clickOnLogin(){
        LoginElements.buttons.login.click()
    }
    static login(username,password){
        Logger.subStep('Click on Login button')
        CommonPageMethods.clickOnLoginOption()
        Logger.subStep('Insert username')
        this.insertUsername(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on Login button')
        this.clickOnLogin()
        Logger.subStep('Verify user session')
        CommonPageMethods.verifySignedUser(username)
    }
    static verifyWrongPasswordMessageIsDisplayed(){
        CommonPageMethods.verifyAlert("User does not exist.")
    }
}