///<reference types = "cypress"/>

 
import {Login} from '../../../PagesObjects/Login'
import {Home} from '../../../PagesObjects/Home'
import {Dashboard} from '../../../PagesObjects/Dashboard'
import {EventsPage} from '../../../PagesObjects/EventsPage'
import { beforeEach } from 'mocha'

describe('EventsDisplayDropDown',()=>{

    const login = new Login()
    const home = new Home()
    const dashboard = new Dashboard()
    const events = new EventsPage()
    

    beforeEach("TestData",()=>{
        
  cy.fixture("TestData").then(function(data){
      this.data= data

  })

    })

    xit('Login',function(){ 
    login.navigate() 
    login.Credentials(this.data.email,this.data.password)
    
   })
   

    xit('HomePage',function(){

        login.navigate() 
        login.Credentials(this.data.email,this.data.password)
        home.organisationSelect()
    
     })

    xit('EventsMajorTab',function(){

        login.navigate() 
        login.Credentials(this.data.email,this.data.password)
        home.organisationSelect()
        dashboard.Events()

    })

    it('CreateEvents',function(){
        
        login.navigate() 
        login.Credentials(this.data.email,this.data.password)
       cy.wait(3000)
        home.organisationSelect()
        dashboard.Events()
        events.EventsMajorTab()
        events.createEventShopifyCustomerStateContains(this.data.CreateEventName,this.data.State)
        
       
    })

    xit("displayDropdownEvents",function(){
        login.navigate() 
        login.Credentials(this.data.email,this.data.password)
        home.organisationSelect()
        dashboard.Events()
        events.EventsMajorTab()
        events.EventsDropdown(this.data.EventsDropDownTestName)
    
    })

    xit("DeleteEvent",function(){

        login.navigate() 
        login.Credentials(this.data.email,this.data.password)
        home.organisationSelect()
        dashboard.Events()
        events.EventsMajorTab()
        events.deleteEventCreated(this.data.deleteEventCreated)


    })


  
  

})


