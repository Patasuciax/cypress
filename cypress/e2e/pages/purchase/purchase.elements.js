export class PurchaseElements{
    static get elements(){
        return{
            get purchaseSuccessCheckMark(){
                return cy.get('.sa-placeholder')
            }
        }
    }
}