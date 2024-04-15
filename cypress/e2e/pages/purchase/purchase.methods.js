import { PurchaseElements } from "./purchase.elements";

export class PurchaseMethods{
    static verifyPurchaseSuccesful(){
        PurchaseElements.icons.purchaseSuccessCheckMark.should('exist')
    }
    static clickOnOk(){
        PurchaseElements.buttons.clickOnOk()
    }
}