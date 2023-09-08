import puppeteer from 'puppeteer';

(async ()=>{

    const browser = await  puppeteer.launch({headless: false,});
    const page = await browser.newPage();
   
    await page.goto('https://www.palaceskateboards.com/');
    
    await page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false,
      });
      
    await page.click(" <Choose a product id from html example: #triangle-grey-svg",{deley: 5000});
    
    await page.waitForNavigation();
      
    await page.$$eval('[href="<YOUR href of product example: /products/e11sx71l8srf>"]',async (elements) => {
        await elements[0].click({deley:1000});
     });
    await page.waitForTimeout(1000);
    await page.select('#product-select','42465566163132');
   
     
      
     
     await page.evaluate(() => {
         document.querySelectorAll('[value="Add to Cart"]')[0].click();
      });
      await page.waitForTimeout(500);
      await page.evaluate(() => {
          document.querySelectorAll('[href="/cart"]')[0].click();
       });
       await page.waitForTimeout(500);
       await page.evaluate(() => {
           document.querySelectorAll('.checkbox-control')[0].click();
        });
        
        await page.evaluate(() => {
            document.querySelectorAll('#checkout')[0].click();
         });
        await page.waitForTimeout(3000);
        await page.type("#checkout_email","<Your email>");
        
        await page.type("#checkout_shipping_address_first_name","<Your name>");
        
        await page.type("#checkout_shipping_address_last_name","<Your surname>");
     
        await page.type('[name="checkout[shipping_address][address1]"]',"<Your addres>");
       
        await page.type('[placeholder="Postal code"]',"<Your postal code>");
 
        await page.type('[placeholder="City"]',"<Your city>");
        await page.waitForTimeout(2000);
        await page.type('[placeholder="Phone"]',"<Your phone number>");
        await page.waitForTimeout(2000);
        page.click('#continue_button');
        await page.waitForTimeout(3000);
        await page.evaluate(() => {
            document.querySelectorAll('#continue_button')[0].click();
         });
         await page.waitForTimeout(3000);
         
         

    
         
    
    
   

})();
