import { PurchaseElements } from "./purchase.elements";

export class PurchaseMethods{
    static verifyPurchaseSuccesful(){
        PurchaseElements.elements.purchaseSuccessCheckMark.should('exist')
    }
}