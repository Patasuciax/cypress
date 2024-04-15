const { CommonData } = require("../../orange/common-orange/common.data")
const { LoginData } = require("../../orange/login-orange/login.data")
const { LoginMethods } = require("../../orange/login-orange/login.methods")

describe("Login",()=>{
    it.only("Login valido",()=>{
        cy.visit(CommonData.dataSet.url)
        LoginMethods.insertUsername(LoginData.dataSet.username)
        LoginMethods.insertPassword(LoginData.dataSet.password)
        LoginMethods.clickOnLogin()
        LoginMethods.verifyUserLogin()
    })
})