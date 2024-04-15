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
        CommonPageMethods.clickOnSignUpOption()
        this.insertUserName(username)
        this.insertPassword(password)
        this.clickOnSignUpButton()
    }
}