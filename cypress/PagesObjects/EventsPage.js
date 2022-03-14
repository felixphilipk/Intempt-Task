

export class EventsPage{

    EventsMajorTab(){

        cy.get('[href="/events"]').click()
    }

createEventShopifyCustomerStateContains(testTitle,State){

    // Click events 
    //cy.get('[href="/events"]').click()
    //Click on create event 
    cy.get('.VueButtonComponent > .v-btn__content').click()
    cy.get('.header__breadcrumb').should("be.visible") 
    // Input Event name 
    cy.get("input[placeholder='Enter a new title']").type(testTitle)
    //Select Source
    
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-application--wrap section.mainLayout:nth-child(4) div.mainLayout__inner:nth-child(2) div.row.grey.lighten-5.routerView:nth-child(2) div.text-center.col.col-9 section.newEventContainer.details-view section.eventContainer div.eventContainerInner div.eventContainerInnerSource div.v-input.eventContainerInnerSourceSelect.v-input--hide-details.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder.v-select div.v-input__control div.v-input__slot.white div.v-select__slot:nth-child(2) div.v-input__append-inner:nth-child(2) div.v-input__icon.v-input__icon--append > i.v-icon.notranslate.fas.fa-caret-down.theme--light').click()
    cy.wait(3000)
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-menu__content.theme--light.menuable__content__active div.v-list.v-select-list.v-sheet.theme--light.v-list--dense.theme--light div.v-list-item.v-list-item--link.theme--light:nth-child(1) div.v-list-item__content > div.v-list-item__title').click()
    //Select Event Type
    
    cy.get('.eventContainerInnerCollection > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon',{timeout:10000}).click()
    cy.wait(3000)
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-menu__content.theme--light.menuable__content__active:nth-child(3) div.v-list.v-select-list.v-sheet.theme--light.v-list--dense.theme--light div.v-list-item.v-list-item--link.theme--light:nth-child(2) div.v-list-item__content > div.v-list-item__title').click()
   
    // Select  Filter Parameter dropdown 
   
    cy.get('.singleEventGroupParentFilterRowProperty > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon',{timeout:10000}).click()
    cy.wait(3000)
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-menu__content.theme--light.menuable__content__active:nth-child(4) div.v-list.v-select-list.v-sheet.theme--light.v-list--dense.theme--light div.v-list-item.v-list-item--link.theme--light:nth-child(10) div.v-list-item__content > div.v-list-item__title').click()
    //Select logical operator dropdown 
    
    cy.get('.singleEventGroupParentFilterRowOperator > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon',{timeout:10000}).click()
    
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-menu__content.theme--light.menuable__content__active:nth-child(5) div.v-list.v-select-list.v-sheet.theme--light.v-list--dense.theme--light div.v-list-item.v-list-item--link.theme--light:nth-child(5) div.v-list-item__content > div.v-list-item__title').click()
    //Input the logical operator search keyword 

    cy.get("input[placeholder='Set value']").type(State)
       
//save to create event
cy.wait(3000)
cy.xpath("//span[contains(text(),'Save')]").click()
cy.wait(4000)
    
}

EventsDropdown(Search){
    cy.get("input[placeholder='Find event']").type(Search)
    cy.wait(3000)
    cy.get('.list__item__inner').click()
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-application--wrap section.mainLayout:nth-child(4) div.mainLayout__inner:nth-child(2) div.row.grey.lighten-5.routerView:nth-child(2) div.text-center.col.col-9 section.detailedEventContainer.details-view section.comparisonControlPanel div.comparisonControlPanel__top section.comparisonControlPanel__top__frequency:nth-child(6) div.v-input.comparisonControlPanel__top__frequency__select.v-input--hide-details.v-input--is-label-active.v-input--is-dirty.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select div.v-input__control div.v-input__slot.white div.v-select__slot:nth-child(2) div.v-input__append-inner:nth-child(2) div.v-input__icon.v-input__icon--append > i.v-icon.notranslate.fas.fa-caret-down.theme--light').click()
    //Monthly
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-menu__content.theme--light.menuable__content__active div.v-list.v-select-list.v-sheet.theme--light.v-list--dense.theme--light div.v-list-item.primary--text.v-list-item--active.v-list-item--link.theme--light.v-list-item--highlighted:nth-child(1) > div.v-list-item__content').click()
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-application--wrap section.mainLayout:nth-child(4) div.mainLayout__inner:nth-child(2) div.row.grey.lighten-5.routerView:nth-child(2) div.text-center.col.col-9 section.detailedEventContainer.details-view section.comparisonControlPanel div.comparisonControlPanel__top section.comparisonControlPanel__top__frequency:nth-child(6) div.v-input.comparisonControlPanel__top__frequency__select.v-input--hide-details.v-input--is-label-active.v-input--is-dirty.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select div.v-input__control div.v-input__slot.white div.v-select__slot:nth-child(2) div.v-input__append-inner:nth-child(2) div.v-input__icon.v-input__icon--append > i.v-icon.notranslate.fas.fa-caret-down.theme--light').click()
    //weekly
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-menu__content.theme--light.menuable__content__active div.v-list.v-select-list.v-sheet.theme--light.v-list--dense.theme--light div.v-list-item.v-list-item--link.theme--light:nth-child(2) div.v-list-item__content > div.v-list-item__title').click()
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-application--wrap section.mainLayout:nth-child(4) div.mainLayout__inner:nth-child(2) div.row.grey.lighten-5.routerView:nth-child(2) div.text-center.col.col-9 section.detailedEventContainer.details-view section.comparisonControlPanel div.comparisonControlPanel__top section.comparisonControlPanel__top__frequency:nth-child(6) div.v-input.comparisonControlPanel__top__frequency__select.v-input--hide-details.v-input--is-label-active.v-input--is-dirty.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select div.v-input__control div.v-input__slot.white div.v-select__slot:nth-child(2) div.v-input__append-inner:nth-child(2) div.v-input__icon.v-input__icon--append > i.v-icon.notranslate.fas.fa-caret-down.theme--light').click()
    //Daily
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-menu__content.theme--light.menuable__content__active div.v-list.v-select-list.v-sheet.theme--light.v-list--dense.theme--light div.v-list-item.v-list-item--link.theme--light:nth-child(3) > div.v-list-item__content').click()



}



deleteEventCreated(Search){
cy.get("input[placeholder='Find event']").type(Search)
cy.wait(3000)
cy.get('.list__item__inner').click()
cy.get('.VueButtonWithDropdown > [role="button"]').click()
cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-application--wrap section.mainLayout:nth-child(4) div.mainLayout__inner:nth-child(2) div.row.grey.lighten-5.routerView:nth-child(2) div.text-center.col.col-9 section.detailedEventContainer.details-view section.header section.VueButtonWithDropdown:nth-child(3) div.v-menu__content.theme--light.menuable__content__active:nth-child(4) div.v-list.v-sheet.theme--light div.v-list-item.theme--light div.v-list-item__content > button.dropdownButton.v-btn.v-btn--block.v-btn--text.theme--light.v-size--default.primary--text').click()
// The id value of textfield is dynamic need support
cy.xpath("//div/input[@type='text']").type(Search)
cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-dialog__content.v-dialog__content--active div.v-dialog.v-dialog--active.v-dialog--scrollable div.v-card.v-sheet.theme--light div.v-card__actions button.positiveButton.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default.primary > span.v-btn__content').click()

}





}