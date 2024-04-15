export class LoginElements{
    static get textboxes(){
        return{
            get username(){
                return cy.get('input[name="username"]')
            },
            get password(){
                return cy.get('input[name="password"]')
            }
        }
    }
    static get buttons(){
        return{
            get login(){
                return cy.get('button[type="submit"]')
            }
        }
    }
    static get dropdown(){
        return{
            get userMenu(){
                return cy.get('.oxd-userdropdown-tab')
            }
        }
    }
}