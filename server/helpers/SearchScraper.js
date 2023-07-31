const puppeteer = require('puppeteer');

const searchScraper = {
  async search(query) {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(`https://www.google.com/search?q=${encodeURIComponent(query)}`);

      // Wait for the search results to load
      await page.waitForSelector('.g');



      // Extract the search result links,
      //if gusto pa nimo kuhaon ang mga url sud sa mga search results. e scrape npud ni na variable: searchedLinks
      const searchedLinks = await page.$$eval('.g a', (anchors) =>
        anchors.map((anchor) => anchor.href)
      );
      

      //Get Image of the links
      //if gusto pa nimo kuhaon ang mga images sud sa mga search results. e scrape npud ni na variable: searchedImages
      const searchedImages = await page.$$eval('img', (imgs) => 
        imgs.map((img) => img.src)
      );

     


      
      await browser.close();


      return {
        links:searchedLinks,
        images:searchedImages
      }
      

    } catch (error) {
      console.error('An error occurred:', error);
      throw new Error('Internal server error');
    }
  },







  async getMovies(links) {
    try {
      const browser = await puppeteer.launch();
      let movieLinks = [];
  
      for (const link of links) {
        const page = await browser.newPage();
        await page.goto(link);
  
        // Extract links using Puppeteer's evaluation function
        const tmplinks = await page.evaluate(() => {
          const anchorTags = Array.from(document.querySelectorAll('a'));

          const videoExtensions = ['.mp4', '.mkv', '.avi']; 
          const docExtensions = ['.docx','.pdf'];

          const videoLinks = anchorTags
            .filter(tag => videoExtensions.some(ext => tag.href.toLowerCase().endsWith(ext)))
            .map(tag => tag.href);

          const docLinks = anchorTags
          .filter(tag => videoExtensions.some(ext => tag.href.toLowerCase().endsWith(ext)))
          .map(tag => tag.href);


          return videoLinks;
          return docLinks;
        });
  
        movieLinks.push(tmplinks);
        await page.close();
      }
  
      await browser.close();
      return movieLinks;
    } catch (error) {
      console.error('An error occurred:', error);
      throw new Error('Internal server error');
    }
  },





  async getBooks(links) {
    try {
      const browser = await puppeteer.launch();
      let movieLinks = [];
  
      for (const link of links) {
        const page = await browser.newPage();
        await page.goto(link);
  
        // Extract links using Puppeteer's evaluation function
        const tmplinks = await page.evaluate(() => {
          const anchorTags = Array.from(document.querySelectorAll('a'));

          const docExtensions = ['.docx','.pdf'];

        
          const docLinks = anchorTags
          .filter(tag => docExtensions.some(ext => tag.href.toLowerCase().endsWith(ext)))
          .map(tag => tag.href);


          return docLinks;
        });
  
        movieLinks.push(tmplinks);
        await page.close();
      }
  
      await browser.close();
      return movieLinks;
    } catch (error) {
      console.error('An error occurred:', error);
      throw new Error('Internal server error');
    }
  },









  
  
};

module.exports = searchScraper;
