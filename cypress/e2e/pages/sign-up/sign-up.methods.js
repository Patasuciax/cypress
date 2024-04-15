import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignUpElements } from "./sign-up.elements";

export class SignUpMethods{

    static insertUserName(username){
        SignUpElements.textboxes.username.invoke('val',username)
    }

    static insertPassword(password){
        SignUpElements.textboxes.password.invoke('val',password)
    }

    static clickOnSignUpButton(){
        SignUpElements.buttons.signUp.click()
    }

    static createUserAccount(username,password){
        Logger.subStep('Click on Sign Up button')
        CommonPageMethods.clickOnSignUpOption()
        Logger.subStep('Insert username')
        this.insertUserName(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on Login button')
        this.clickOnSignUpButton()
    }
    static verifySignupSuccessfulMessageIsDisplayed(){
        CommonPageMethods.verifyAlert("Sign up successful.")
    }
    static verifyUserAlreadyExistMessageIsDisplayed(){
        CommonPageMethods.verifyAlert("This user already exist.")
    }
}