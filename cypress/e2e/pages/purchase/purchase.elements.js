export class PurchaseElements{
    static get buttons(){
        return{
            get ok(){
                return cy.contains('button', 'OK')
            }
        }
    }
    static get icons(){
        return{
            get purchaseSuccessCheckMark(){
                return cy.get('.sa-placeholder')
            }
        }
    }
}