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
        CommonPageMethods.clickOnLoginOption()
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLogin()
        CommonPageMethods.verifySignedUser(username)
    }
}