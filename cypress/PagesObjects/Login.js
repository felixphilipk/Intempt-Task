/// <reference types = "cypress"/>

export class Login{


navigate(){

cy.visit("https://app.intempt.com")

}

Credentials(emailid,password){
    cy.get('#username').type(emailid,)
    cy.get('#password').type(password)
    cy.get('.ca73473bb > .c063cb1a4').click();
}





}