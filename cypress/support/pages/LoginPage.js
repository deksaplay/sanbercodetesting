const locator = require('../locator/LoginPageLocator')


class LoginPage {
    async visit(path) {
        cy.visit(path)
        return cy.url().should('eq', path)
    }

    async verify_login_page() {
        cy.xpath(locator.datatestid.logo, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.login_text_title, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.email_input, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.pass_input, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.btn_login, { timeout: 10000 }).should('be.visible')
    }

    async type_email(email) {
        cy.xpath(locator.datatestid.email_input)
            .type(email)
            .should('have.value', email)
    }

    async type_password(password) {
        cy.xpath(locator.datatestid.pass_input)
            .type(password)
            .should('have.value', password)
    }


    async type_email_salah(emailsalah) {
        cy.xpath(locator.datatestid.email_input)
            .type(emailsalah)
            .should('have.value', emailsalah)
    }
    async type_password_salah(passwordsalah) {
        cy.xpath(locator.datatestid.pass_input)
            .type(passwordsalah)
            .should('have.value', passwordsalah)
    }
    async type_email_kosong(emailkosong) {
        cy.xpath(locator.datatestid.email_input)
            .type(emailkosong)
            .should('have.text', '')
    }

    async type_password_kosong(passwordkosong) {
        cy.xpath(locator.datatestid.pass_input)
            .type(passwordkosong)
            .should('have.text', '')
    }
    async click_login_button() {
        cy.xpath(locator.datatestid.btn_login).click()
    }

   async verify_login_failed() {
    cy.xpath(locator.datatestid.err_login_message).should('be.visible')
    }
}

module.exports = LoginPage
