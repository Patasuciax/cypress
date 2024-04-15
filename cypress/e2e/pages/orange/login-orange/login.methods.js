import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.type(username)
    }
    static insertPassword(password){
        LoginElements.textboxes.password.type(password)
    }
    static clickOnLogin(){
        LoginElements.buttons.login.click()
    }
    static verifyUserLogin(){
        LoginElements.dropdown.userMenu.should('exist')
    }
}