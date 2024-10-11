import CommonPage from "./CommonPage.js";
class HomePage extends CommonPage
{
    constructor()
    {
        super();
        this.$clickOnMore=()=> $('//span[text()="More"]')
        this.$clickOnCustomFurniture=()=> $('//a[@aria-label="Custom Furniture"]')
        this.$clickOnAcceptAll=()=> $('//button[text()="Accept All"]')
       
        
      

    }
    /**
     * This function is to click on the 'More' option and then select the 'Custom Furniture' option
     */

    async openCustomFurniture()
    {
        await this.$clickOnAcceptAll().click()
        await this.$clickOnMore().click();
        await this.$clickOnCustomFurniture().click();


    }


   
}



    

export default new HomePage();