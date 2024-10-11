import CommonPage from "./CommonPage.js";
class LoginPage extends CommonPage
{
    constructor()
    {
        super();
        this.$psquareheader=()=>$('//div[@class="d-none d-sm-flex header_logo_container__fMMFZ"]//img[@alt="p square logo"]');
        this.$loginButton=()=> $('//div[@class="book_appointment_btn"]//button[@aria-label="login or goto account"]')
        this.$emailInput=()=> $('//input[@name="userName"]')
        this.$continueButton=()=> $('//button[@type="submit"]')
        this.$passwordInput=()=> $('//input[@name="password"]')
        this.$psquareLoginText=()=> $('//h2[text()="Happiness Inside since 1997"]')
      

    }


   /**
    * This Function is to Login to the Psquare Application
    */

    async Login(){

     await this.$loginButton().click();
     await this.$emailInput().setValue('aiswarya.a@gmail.com');
     await this.$continueButton().click();
     await this.$passwordInput().setValue('testtest')
     await this.$continueButton().click();
   
    }
}



    

export default new LoginPage();